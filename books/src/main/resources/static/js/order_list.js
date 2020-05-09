/*
 * 订单
 */		
layui.use(['form' ,'layer','table'], function() {
	var _form = layui.form,_layer = layui.layer,_table = layui.table; 
    var $ = layui.$;
    function init(){
    	var userId = $("#userId").val();
    	getOrder(userId);
    	
    };
    function getOrder(userId){
    	$.get("/order/listByUserId",{userId : userId},function(res){
    		console.log(res)
    	})
    };    
    $(function(){
    	var userId=$("#userId").val();
    	_table.init('order', {
    		url:'/order/listByUserId/?userId='+userId
    		,done: function(res){
    			$(".layui-table-tool").removeAttr("style"); //ie,ff均支持
//    	    	$(".layui-table-tool").attr("style","");
//    			$(".number").on("input",function(data){
//    	    		console.log(data)
//    	    		var spanid = "sum"+data.target.id;
//    	    		var price = data.target.name;
//    	    		var number = data.delegateTarget.value;
//    	    		var sum = price*number;		    
//    	    		$("#"+spanid).html("￥"+sum);
//    	    	  });
    			}
    		});
	   	init();
	});
})