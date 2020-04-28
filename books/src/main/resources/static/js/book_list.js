/** 
  * 图书列表 
  */ 

layui.use(['form' ,'table' ,'layer'], function() { 
	var $ = layui.$; 
    var _table = layui.table,_form = layui.form,_layer= layui.layer; 
    function init() {
    	getBookType();
		// 工具栏监听
	    _table.on('tool(book)', function(obj){
            var event = obj.event;
	    	var data = obj.data;
            if(event == 'reload') {
            	obj = {page: 1}; //查询从首页开始
            	reload();
            }
            if(event == 'update'){
            	edit(data.id);
            }
            if(event == 'remove'){
            	remove(data.id);
            }
	    });
	  //表头排序监听
		_table.on('sort(book)',function(obj){   
            reload();
        });
	    //单行监听
		_table.on('toolbar(book)',function(obj){ 
			console.log(obj)
            var event = obj.event;
            var data = obj.data;
            if(event == 'add'){
            	add();
            }
            if(event == 'removeBatch'){
            	removeBatch(obj);
            }
        });
		_form.on('submit(SearchForm)', function(data){
			  var condition = {where : data.field, page : 1};
			  _table.reload('book', {
				  page: {
		  			  layout: ['prev','page', 'next','count',],
		  			  limit: 20,
		  		  },where: {
		  			  bookName : data.field.bookName,
		  			  author : data.field.author,
		  			  bookType : data.field.bookType,
		  			  page : '1'
		  		  	}
		  		  });
			  return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
		});
	};
	function getBookType(){
		$.get("/book/getBookType",{}, function(res) {
			$('#bookType').append(new Option('请选择', ''));// 下拉菜单里添加元素
			$.each(res.data, function (index, item) {
				$('#bookType').append(new Option(item.bookType, item.bookType));// 下拉菜单里添加元素
			});
			_form.render('select');
		});
	};
	function add() { //新增
		_layer.open({
			title : '新增图书',
			type : 2,
			area: ['500px', '500px'],
			end: function(){
				reload();
			},
			content : '/book/books/book_add'
		})
	};
	function edit(id) { //编辑
		console.log(id)
		_layer.open({
			title : "编辑图书",
			type : 2,
			area: ['500px', '500px'],
			end: function(){
				reload();
			},
			content : '/book/books/book_update?id='+ id
		});
	};
	function remove(ids) { //删除
		if(!$.isArray(ids)) {
			ids = [ids];
		}
		_layer.confirm('确认是否删除？', {
			  btn: ['确认','取消'] //按钮
			}, function(){
				$.post("/book/remove", {ids:ids}, function(res){
					var msg = res.message;
					_layer.msg(msg, {icon: 1});
//					_table.render().reload(options);
					reload();
				})
			}, function(){
				_layer.close();
			});
	};
	function removeBatch(obj) { // 批量删除
        var checkStatus = _table.checkStatus(obj.config.id)
        , data = checkStatus.data //获取选中的数据
		, ids = [];
		$.each(data, function(i,val){
			ids.push(val.id);
		});
		if(ids.length == 0) {
			_layer.msg('请选择一行', {icon: 0});
			return;
		}
		remove(ids);
	};
	function reload(condition) { // 重载列表
		_table.reload('book',{
			page: {
	  			  layout: ['prev','page', 'next','count',],
	  			  limit: 20,
	  		  },where: {
	  			condition
	  		  }
		});
	}; 	
    $(function() {
    	var flag = false;
    	_table.init('book', {
	  		  page: {
	  			  curr: '1', //重新从第 1 页开始
	  			  layout: ['prev','page', 'next','count',],
	  			  limit: 20,
	  		  },    	  
	    	  parseData: function(res){ //res 即为原始返回的数据
	    		  console.log(res)
	    		  if(res.data == null){
                      //显示无数据提示内容
                      return {
                          "code": 201, //解析接口状态
                          "msg": '未查到数据' //解析提示文本
                      };
                  }
		       return {
		          "code": res.code, //解析接口状态
		          "msg": res.message, //解析提示文本
		          "count": res.data[0].count, //解析数据长度
		          "data": res.data, //解析数据列表
		        };
		  	  }
		  	  ,done : function(res){
		  		  console.log(res)
		  		  if(!flag){
		  			  var page = $(".layui-laypage-curr").text();
					  var json = {
					  		page : page
					  };
					  reload(json);
					  console.log(json) 
					  flag = true;
		  		  }
		  		$(".layui-box").click(function(){
		  			var page = $(".layui-laypage-curr").text();
		  			var condition = {
		  					page : page,
		  			};
		  			reload(page);
		  		});
		  	  }
		  	  //支持所有基础参数
		  	});
    	init();
	});
}) 
//时间转换函数
function showTime(tempDate)
{
	if(tempDate == null){
		return '';
	}
	var d = new Date(tempDate); 
	var year = d.getFullYear();
	var month = d.getMonth();
	month++;
	var day = d.getDate();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	var seconds = d.getSeconds();
	month = month<10 ? "0"+month:month;
	day = day<10 ? "0"+day:day;
	hours = hours<10 ? "0"+hours:hours;
	minutes = minutes<10 ? "0"+minutes:minutes;
	seconds = seconds<10 ? "0"+seconds:seconds;
	var time = year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
	return time;
};