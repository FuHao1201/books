/** 
  * 用户列表 
  */ 

layui.use(['form' ,'table' ,'layer'], function() { 
	var $ = layui.$; 
    var _table = layui.table,_form = layui.form,_layer= layui.layer;
    
    function init() {
		// 工具栏监听
	    _table.on('tool(user)', function(obj){
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
            	remove(data);
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
            	removeBatch(data);
            }
//            methods[event].call(this, data.id);
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
		App.msg.confirm('确认是否删除？',function(){
			App.del("/user/remove", {ids:ids}, function(res) {
				methods.reload();
			});
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
			App.msg.warn('请选择一行');
			return;
		}
		methods.remove(ids);

	};
	function reload(condition) { // 重载列表
		_table.search('students', condition);
	};    
//    //单行监听
//	_table.on('toolbar(user)',function(obj){
//		console.log(obj)
//        var event = obj.event;
//        var data = obj.data;
//        add();
//    });	
    $(function() {
    	_table.init('user', {
		  	  height: 315 //设置高度
		  	  ,limit: 10//注意：请务必确保 limit 参数（默认：10）是与你服务端限定的数据条数一致
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
//		  			console.log(res.data[i].createTime)
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
