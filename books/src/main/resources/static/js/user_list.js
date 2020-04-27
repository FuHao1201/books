/** 
  * 用户列表 
  */ 

layui.use(['form' ,'table' ,'layer','laypage'], function() { 
	var $ = layui.$; 
    var _table = layui.table,_form = layui.form,_layer= layui.layer,_laypage = layui.laypage;
    
    function init() {
		// 工具栏监听
	    _table.on('tool(user)', function(obj){
            var event = obj.event;
	    	var data = obj.data;
            if(event == 'reload') {
            	obj = {page: 1}; //查询从首页开始
            	reload(obj);
            }
            if(event == 'update'){
            	edit(data.id);
            }
            if(event == 'remove'){
            	remove(data.id);
            }
	    });
	  //表头排序监听
		_table.on('sort(user)',function(obj){   
            methods.reload();
        });
	    //单行监听
		_table.on('toolbar(user)',function(obj){ 
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
			  _table.reload('user', condition);
			  return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
		});
	};
	function add() { //新增
		_layer.open({
			title : '新增用户',
			type : 2,
			area: ['500px', '500px'],
			content : '/user/users/user_add'
		})
	};
	function edit(id) { //编辑
		console.log(id)
		_layer.open({
			title : "编辑用户",
			type : 2,
			area: ['500px', '500px'],
			content : '/user/users/user_update?id='+ id
		});
	};
	function remove(ids) { //删除
		if(!$.isArray(ids)) {
			ids = [ids];
		}
		_layer.confirm('确认是否删除？', {
			  btn: ['确认','取消'] //按钮
			}, function(){
				$.post("/user/remove", {ids:ids}, function(res){
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
		_table.reload('user',{
			condition
		});
	}; 	
    $(function() {    	
    	_table.init('user', {
		  	  height: 315, //设置高度
//		  	  ,limit: 10//注意：请务必确保 limit 参数（默认：10）是与你服务端限定的数据条数一致
	  		  page: {
	  			  curr: '1', //重新从第 1 页开始
	  		  },
		  	  limit: 6,
	    	  limits: [6, 12, 20],
	    	  first: '首页',
	    	  last: '尾页',
	    	  layout: ['count', 'prev', 'page', 'next', 'limit', 'skip'],
	    	  parseData: function(res){ //res 即为原始返回的数据
//		  		  debugger
		  		  console.log(res)
		       return {
		          "code": res.code, //解析接口状态
		          "msg": res.message, //解析提示文本
		          "count": res.total, //解析数据长度
		          "data": res.data, //解析数据列表
		        };
		    	
		  	  }
		  	  ,done : function(res){
		  		  console.log(res)
		  		  var i=0;
		  		  if(i=0){
		  			  debugger
		  			i=i+1;
		  			var size = $(".layui-laypage-limits").find("option:selected").val(); //分页数目
				  	var current = $(".layui-laypage-skip .layui-input").val(); //当前页码值
				  	var json = {
				  		size : size,
				  		current : current,
				  	};
		    		reload(json);
				  	console.log(json)  
		  		  }
		  		$(".layui-laypage-skip .layui-input").on("propertychange", function () {
		  			debugger
		  	        console.log("正在输入...");
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