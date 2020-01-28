/** 
  * 图书列表 
  */ 

layui.use(['form' ,'table' ,'layer'], function() { 
	var $ = layui.$; 
    var _table = layui.table,_form = layui.form,_layer= layui.layer;
    
    function init() {
		// 工具栏监听
	    _table.on('tool(book)', function(obj){
            var event = obj.event;
	    	var data = obj.data;
            if(event == 'reload') {
            	obj = {page: 1}; //查询从首页开始
            	reload();
            }
            if(event == 'update'){
            	debugger
            	edit(data.id);
            }
            if(event == 'remove'){
            	remove(data.id);
            }
	    });
	  //表头排序监听
		_table.on('sort(book)',function(obj){   
            methods.reload();
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
			  _table.reload('book', condition);
			  return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
		});
	};
	function add() { //新增
		_layer.open({
			title : '新增图书',
			type : 2,
			area: ['500px', '500px'],
			content : '/book/books/book_add'
		})
	};
	function edit(id) { //编辑
		console.log(id)
		_layer.open({
			title : "编辑图书",
			type : 2,
			area: ['500px', '500px'],
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
			condition
		});
	}; 	
    $(function() {
    	_table.init('book', {
		  	  height: 315 //设置高度
//		  	  ,limit: 10//注意：请务必确保 limit 参数（默认：10）是与你服务端限定的数据条数一致
		  	  ,parseData: function(res){ //res 即为原始返回的数据
//		  		  debugger
		  		  console.log(res.data)
		  		  for(var i = 0;i < res.data.length;i++){
		  			res.data[i].createTime  
		  			var create1 = res.data[i]["createTime"].split(".")[0];
		  			var create2 = create1.replace("T"," ");
		  			res.data[i].createTime = create2;
		  			
		  			if(res.data[i]["updateTime"] != null){
		  				var update1 = res.data[i]["updateTime"].split(".")[0];
			  			var update2 = update1.replace("T"," ");
			  			res.data[i].updateTime = update2;
		  			}
		  		  }		  		  	 
		       return {
		          "code": res.code, //解析接口状态
		          "msg": res.message, //解析提示文本
		          "count": res.data.length, //解析数据长度
		          "data": res.data, //解析数据列表
		        };
		  	  }
		  	  //支持所有基础参数
		  	});
    	init();
	});
}) 
