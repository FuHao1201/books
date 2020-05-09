/** 

  * 结算列表 
  */ 

layui.use(['form' ,'table' ,'layer','element'], function() { 
	var $ = layui.$; 
    var _table = layui.table,_form = layui.form,_layer= layui.layer,_element = layui.element;
    
    function init() {
    	var userId=$("#userId").val();
    	// 地址工具栏监听
	    _table.on('tool(address)', function(obj){
            var event = obj.event;
	    	var data = obj.data;
            if(event == 'updateAddress'){
            	editAddress(data.id);
            }
            if(event == 'removeAddress'){
            	removeAddress(data.id);
            }
	    });
	    //地址单行监听
		_table.on('toolbar(address)',function(obj){ 
			console.log(obj)
            var event = obj.event;
            var data = obj.data;
            var userId=$("#userId").val();
            if(event == 'addAddress'){
            	addAddress(userId);
            }
        });
		$("#toCar").click(function(){
			var userId=$("#userId").val();
			$.post("/buy/removeByUserId",{userId:userId},function(res){
				  parent.layui.layer.closeAll();
			  });
        });
		$("#order").click(function(){
			if($("#order").hasClass("layui-btn-disabled")==true){
				_layer.msg("请选择收件人");
				return;
			}
            order();
        });
		_table.on('radio(address)', function(obj){
			$("#order").removeClass("layui-btn-disabled");
			console.log(obj.data)
			$("#addressId").val(obj.data.id);
		});
    };
    function addAddress(userId){
    	_layer.open({
			title : "新增收件人",
			type : 2,
			area: ['400px', '400px'],
			content : '/address/addresses/address_add?userId='+ userId
		});
    };
    function editAddress(id){
    	_layer.open({
			title : "编辑收件人",
			type : 2,
			area: ['400px', '400px'],
			content : '/address/addresses/address_update?id='+ id
		});
    };
    function removeAddress(id){
    	console.log(id)
    	_layer.confirm('确认是否删除？', {
			  btn: ['确认','取消'] //按钮
			}, function(){
				$.post("/address/remove", {id:id}, function(res){
					var msg = res.message;
					if(res.code == "SUCCESS"){
						_layer.msg(msg, {icon: 1});
						reloadAddress();
					}if(res.code == "ERROR"){
						_layer.msg(msg, {icon: 2});
					}
					
				})
			}, function(){
				_layer.close();
			});
    };
    function reloadAddress(condition) { // 重载列表
		_table.reload('address',{
			condition
		});
	};
	function order(){//提交订单
		var sum_all = $("#sum_all").text().split('￥')[1];
		var addressId = $("#addressId").val();
		var userId=$("#userId").val();
		console.log(addressId)
		_layer.msg("提交订单");
		var json = {
				subject : "图书",
				total_amount : sum_all,
				body : userId
		}
		$.post("/buy/paySum",json,function(res){
			  var obj = window.open("about:blank");   
			  obj.document.write(res);
			  console.log(userId);
			  $.get("/buy/buy_list",{userId:userId},function(res){
				  console.log(res.data)
				  for(var i=0; i<res.data.length; i++){
  						var bookId = res.data[i].bookId;
  						var json = {
  								userId:userId,
  								bookId:bookId
  						}
  						$.post("/car/remove",json);
  						var jsonBookNum = {
  								id:bookId,
  								bookNum:res.data[i].book_num
  						}
  						$.post("/book/lessBookNum",jsonBookNum);
  						var jsonOrder = {
  								userId:userId,
  								bookId:bookId,
  								addressId:addressId,
  								bookNum:res.data[i].bookNum,
  								sum:res.data[i].sum
  						}
  						$.post("/order/save",jsonOrder,function(res){
  							console.log(res)
  						});
  					}
				  $.post("/buy/removeByUserId",{userId:userId},function(res){
					  parent.layui.layer.closeAll();
				  });
			  }); 
		});
	};
    $(function() {
    	var userId=$("#userId").val();
    	_table.init('address', {
  		  url: '/address/address_list/?userId='+userId
  		  ,height: 250
  		  ,width: 710
    	});
    	_table.init('buy', {
    		  url: '/buy/buy_list/?userId='+userId
    		  ,height: 250
    		  ,width: 710
    		  ,done: function(res){
    			  var sum_all = 0;
    			  for(var i=0; i<res.data.length; i++){
    					var sum = res.data[i].sum;
    					sum_all+=sum;
    				}
    			$("#sum_all").html("￥"+sum_all);
      		}
    	});
    	init();
	});
})