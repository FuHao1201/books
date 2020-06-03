/** 
  * 购物车列表 
  */ 

layui.use(['form' ,'table' ,'layer','element'], function() { 
	var $ = layui.$; 
    var _table = layui.table,_form = layui.form,_layer= layui.layer,_element = layui.element;
    
    function init() {
    	var userId=$("#userId").val();
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
		console.log(data)
		$.each(data, function(i,val){
			ids.push(val.id);
		});
		if(ids.length == 0) {
			_layer.msg('请选择商品', {icon: 0});
			return;
		}
		var userId=$("#userId").val();
		$.post("/buy/removeByUserId/",{userId : userId});
		for(var i=0; i<data.length; i++){
			var numId = data[i].id;
			var bookNum = $("#"+numId).val();
			var sumId = "sum"+data[i].id;
			var sum = parseFloat($("#"+sumId).text().split('￥')[1]);
			var json = {
					userId : data[i].userId,
					bookId : data[i].bookId,
					price : data[i].price,
					bookNum : bookNum,
					sum : sum,
				}
			$.post("/buy/addBuy/",json);
		}
		var userId = $("#userId").val();
		_layer.open({
			title: '下单',
			type : 2,
			area: ['750px', '600px'],
			content: '/buy/buys/buy_list/?userId='+userId,
			end: function(){
				_table.reload('car');
			},
			closeBtn: 0
		});
	}
    $(function() {
    	var userId=$("#userId").val();
    	_table.init('car', {
    		url:'/car/car_list/?userId='+userId
    		,done: function(res){
    			$(".number").on("input",function(data){
    	    		console.log(data)
    	    		var spanid = "sum"+data.target.id;
    	    		var id = data.target.id;
    	    		var bookId = data.target.title;
    	    		var price = data.target.name;
    	    		var number = data.delegateTarget.value;
    	    		$.get("/book/get/",{id : bookId},function(res){
    	    			if(number > res.data.bookNum){
    	    				$("#"+id).val(res.data.bookNum);
    	    			}
    	    		});
    	    		var sum = price*number;		    
    	    		$("#"+spanid).html("￥"+sum);
    	    	  });
    			}
    		}); 
    	init();
	});
}) 
