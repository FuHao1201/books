/*
 * 订单详情
 */
layui.use(['form' ,'layer'], function() {
	var _form = layui.form,_layer = layui.layer; 
    var $ = layui.$;
    function init(){
    	var id = $("#id").val();
    	getOrder(id);
    };
    function getOrder(id){
    	$.get("/order/get",{id : id},function(res){
    		console.log(res)
    		$("#bookPictures").attr('src',res.data.bookPictures);
    		$("#bookName").html(res.data.bookName);
    		$("#author").html(res.data.author);
    		$("#name").html(res.data.name);
    		$("#phone").html(res.data.phone);
    		$("#publishingHouse").html(res.data.publishingHouse);
    		$("#address").html(res.data.address);
    		$("#postCode").html(res.data.postCode);
    		$("#price").html("￥"+res.data.price);
    		$("#bookNum").html(res.data.bookNum);
    		$("#sum").html("￥"+res.data.sum);
    		var d = new Date(res.data.createTime); 
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
			$("#time").html(time);
    	})
    };
    
    
    $(function(){
	   	init();
	});
})