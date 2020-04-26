layui.use(['form' ,'layer' ,'element'], function() {
	var _form = layui.form,_layer = layui.layer,_element = layui.element; 
    var $ = layui.$;
    function init(){
    	var userId = $("#id").val();
    	getInformation();
    	$("#editInformation").click(function(){
			
		});
    };
    function getInformation(){
    	var userId = $("#id").val();
    	$.get("/user/get",{id:userId}, function(res){
    		var create = res.data.createTime;
    		var createTime = showTime(create);
    		var str = "";
    		str += "<div class='layui-row'>\
    					<div style='float: right;width: 100px;height: 100px;border:1px solid #0000FF;'>\
    						<img width='100px' height='100px' src="+res.data.head+" />\
						</div>\
						<div class='layui-col-md6'>\
							<span>姓名：</span>&nbsp;&nbsp;\
							<span>"+res.data.name+"</span>\
						</div><br/>\
						<div class='layui-col-md6'>\
							<span>登录名：</span>&nbsp;&nbsp;\
							<span>"+res.data.loginname+"</span>\
						</div><br/>\
						<div class='layui-col-md6'>\
							<span>性别：</span>&nbsp;&nbsp;\
							<span>"+res.data.sex+"</span>\
						</div><br/>\
						<div class='layui-col-md6'>\
							<span>身份证号：</span>&nbsp;&nbsp;\
							<span>"+res.data.identity+"</span>\
						</div><br/>\
						<div class='layui-col-md6'>\
							<span>电话号码：</span>&nbsp;&nbsp;\
							<span>"+res.data.phone+"</span>\
						</div><br/>\
						<div class='layui-col-md6'>\
							<span>注册时间：</span>&nbsp;&nbsp;\
							<span>"+createTime+"</span>\
						</div>\
					</div>";
    		_element.render('information');
    		$("#information").html(str);
    	})
    };    
    $(function(){
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