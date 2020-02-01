/** 
  * 购物车列表 
  */ 

layui.use(['form' ,'table' ,'layer','element'], function() { 
	var $ = layui.$; 
    var _table = layui.table,_form = layui.form,_layer= layui.layer,_element = layui.element;
    
    function init() {
    	var userId=$("#userId").val();
    	$(".number").on("input",function(data){
    		var spanid = "sum"+data.target.id.split('-')[0];
    		var price = data.target.id.split('-')[1];
    		var number = data.delegateTarget.value;
    		var sum = price*number;		    
    		$("#"+spanid).html("￥"+sum);
    	  });
    	_table.on('checkbox(car)', function(obj){
    		$(".number").on("input",function(data){
    			var checkStatus = _table.checkStatus('car');
        		var sumNum = checkStatus.data.length;
        		var sum_all=0;
        		$("#sumNum").html(sumNum);
        		for(var i=0; i<checkStatus.data.length; i++){
        			var sumid = "sum"+checkStatus.data[i].id;
        			var sum = parseFloat($("#"+sumid).text().split('￥')[1]);
        			sum_all+=sum;
        		}
        		$("#sum_all").html("￥"+sum_all);     
        	  });
    		var checkStatus = _table.checkStatus('car');
    		var sumNum = checkStatus.data.length;
    		var sum_all=0;
    		$("#sumNum").html(sumNum);
    		for(var i=0; i<checkStatus.data.length; i++){
    			var sumid = "sum"+checkStatus.data[i].id;
    			var sum = parseFloat($("#"+sumid).text().split('￥')[1]);
    			sum_all+=sum;
    		}
    		$("#sum_all").html("￥"+sum_all);         
    	});
    	// 工具栏监听
	    _table.on('tool(car)', function(obj){
            var event = obj.event;
	    	var data = obj.data;
            if(event == 'remove'){
            	var json = {
            			userId : userId,
            			bookId : data.bookId
            	}
            	remove(json);
            }
            if(event == 'toCollection'){
            	var json = {
            			userId : userId,
            			bookId : data.bookId
            	}
            	toCollection(json);
            }
	    });
	    //单行监听
		_table.on('toolbar(car)',function(obj){
            var event = obj.event;
            var data = obj.data;
            if(event == 'buy'){
            	buy(obj);
            }
            if(event == 'removeBatch'){
            	removeBatch(obj);
            }
        });
	};
	
	function remove(json) { //单个删除
		_layer.confirm('确认是否删除？', {
			  btn: ['确认','取消'] //按钮
			}, function(){
				$.post("/car/remove", json, function(res){
					var msg = res.message;
					if(res.code == "SUCCESS"){
						_layer.msg(msg, {icon: 1});
						_table.reload('car');
					}
					if(res.code == "ERROR"){
						_layer.msg(msg, {icon: 2});
					}
				})
			}, function(){
				_layer.close();
			});
	};
	function toCollection(json) { //移入收藏
		_layer.confirm('确认移入收藏？', {
			  btn: ['确认','取消'] //按钮
			}, function(){
				$.post("/collection/addCollection", json, function(res){
					var msg = res.message;
					if(res.code == "SUCCESS"){
						$.post("/car/remove", json, function(res){
							if(res.code == "SUCCESS"){
								_layer.msg("移入收藏成功", {icon: 1});
								_table.reload('car');
							}
							if(res.code == "ERROR"){
								_layer.msg("移入收藏失败", {icon: 2});
							}
						})
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
							userId : checkStatus.data[i].userId,
							bookId : checkStatus.data[i].bookId
					}					
					$.post("/car/remove", json, function(res){
						var msg = res.message;
						if(res.code == "SUCCESS"){
							_layer.msg(msg, {icon: 1});
							_table.reload('car');
						}
						if(res.code == "ERROR"){
							_layer.msg(msg, {icon: 2});
						}
					})
				}
			}, function(){
				_layer.close();
			});
	};
	function buy(obj){//结算
		var checkStatus = _table.checkStatus(obj.config.id)
        , data = checkStatus.data //获取选中的数据
        , ids = [];
		var sum_all = $("#sum_all").text().split('￥')[1];
		var bookId = data;
		$.each(data, function(i,val){
			ids.push(val.id);
		});
		if(ids.length == 0) {
			_layer.msg('请选择商品', {icon: 0});
			return;
		}		
		var json = {
				
		}
		_layer.open({
			title: '下单',
			type : 2,
			area: ['500px', '500px'],
//			content : '/car/cars/car_buy/?bookId='+ bookId
		})
//		$.post("/order/orders/order_list/")
	}
    $(function() {
    	var userId=$("#userId").val();
    	_table.render('car', {
    		   url:'/car/car_list/?userId='+userId
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
