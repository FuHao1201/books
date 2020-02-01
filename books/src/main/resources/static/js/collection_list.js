/** 
  * 购物车列表 
  */ 

layui.use(['form' ,'table' ,'layer','element'], function() { 
	var $ = layui.$; 
    var _table = layui.table,_form = layui.form,_layer= layui.layer,_element = layui.element;
    
    function init() {
    	var userId=$("#userId").val();
    	// 工具栏监听
	    _table.on('tool(collection)', function(obj){
            var event = obj.event;
	    	var data = obj.data;
            if(event == 'remove'){
            	var json = {
            			userId : userId,
            			bookId : data.bookId
            	}
            	remove(json);
            }
            if(event == 'addCar'){
            	var json = {
            			userId : userId,
            			bookId : data.bookId
            	}
            	addCar(json);
            }
	    });
	    //单行监听
		_table.on('toolbar(collection)',function(obj){
            var event = obj.event;
            var data = obj.data;
            if(event == 'addCarBatch'){
            	addCarBatch(obj);
            }
            if(event == 'removeBatch'){
            	removeBatch(obj);
            }
        });
	};
	function addCar(json){//加入购物车
//		console.log(json)
		$.post("/car/addCar",json,function(res){
//			console.log(res)
			var msg=res.message;
			if(res.code == "SUCCESS"){
				_layer.msg(msg, {
					  icon: 1,
				});
			}if(res.code == "ERROR"){
				_layer.msg(msg, {
					  icon: 2,
				});
			}
		})
	};
	function addCarBatch(obj) { // 批量加入购物车
        var checkStatus = _table.checkStatus(obj.config.id)
        , data = checkStatus.data //获取选中的数据
		, ids = [];
        var userId=$("#userId").val();
		console.log(checkStatus.data)
		$.each(data, function(i,val){
			ids.push(val.id);
		});
		if(ids.length == 0) {
			_layer.msg('请选择商品', {icon: 0});
			return;
		}
		for(var i=0; i<checkStatus.data.length; i++){
			var json ={
					userId : userId,
					bookId : checkStatus.data[i].bookId
			}					
			$.post("/car/addCar", json, function(res){
				console.log(res)
				var msg = res.message;
				if(res.code == "SUCCESS"){
					_layer.msg(msg, {
						  icon: 1,
					});
				}if(res.code == "ERROR"){
					_layer.msg(msg, {
						  icon: 2,
					});
				}
			})
		}
	};
	function remove(json) { //删除
		_layer.confirm('确认是否删除？', {
			  btn: ['确认','取消'] //按钮
			}, function(){
				$.post("/collection/remove", json, function(res){
					console.log(res)
					var msg = res.message;
					if(res.code == "SUCCESS"){
						_layer.msg(msg, {
							  icon: 1,
						});
						_table.reload('collection');
					}if(res.code == "ERROR"){
						_layer.msg(msg, {
							  icon: 2,
						});
					}					
				})
			}, function(){
				_layer.close();
			});
	};
	function removeBatch(obj) { // 批量删除
        var checkStatus = _table.checkStatus(obj.config.id)
        , data = checkStatus.data //获取选中的数据
		, ids = [];
        var userId=$("#userId").val();
		console.log(checkStatus.data)
		$.each(data, function(i,val){
			ids.push(val.id);
		});
		if(ids.length == 0) {
			_layer.msg('请选择商品', {icon: 0});
			return;
		}
		_layer.confirm('确认是否删除选中商品？', {
			  btn: ['确认','取消'] //按钮
			}, function(){
				for(var i=0; i<checkStatus.data.length; i++){
					var json ={
							userId : userId,
							bookId : checkStatus.data[i].bookId
					}					
					$.post("/collection/remove", json, function(res){
						console.log(res)
						var msg = res.message;
						if(res.code == "SUCCESS"){
							_layer.msg(msg, {
								  icon: 1,
							});
							_table.reload('collection');
						}if(res.code == "ERROR"){
							_layer.msg(msg, {
								  icon: 2,
							});
						}	
					})
				}
			}, function(){
				_layer.close();
			});
	};
    $(function() {
    	var userId=$("#userId").val();
    	_table.init('collection', {
    		  url: '/collection/collection_list/?userId='+userId
		  	  ,parseData: function(res){ //res 即为原始返回的数据
		  		  console.log(res.data);
		  		return {
			          "code": res.code, //解析接口状态
			          "msg": res.message, //解析提示文本
			          "count": res.data.length, //解析数据长度
			          "data": res.data, //解析数据列表
			        };
		  	  }
    	});
    	init();
	});
})
//时间转换函数
function showTime(tempDate)
{
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
