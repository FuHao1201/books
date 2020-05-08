layui.use(['form' ,'layer' ,'element'], function() {
	var _form = layui.form,_layer = layui.layer,_element = layui.element; 
    var $ = layui.$;
    function init(){
/*    	$("#showInformation").show();
	    $("#updateInformation").hide();*/
    	var userId = $("#id").val();
    	getInformation();
    	$("#editInformation").click(function(){
    		$("#showInformation").hide();//隐藏div
    	    $("#updateInformation").show();//显示div
		});
    	_form.on("submit(update)",function (data){
        	console.log(data)
        	if(data.field.loginnameOld != data.field.loginname){
        		$.get("/user/getByLoginName",{loginname : data.field.loginname},function(res){
    				console.log(res)
    				if(res.code == 'SUCCESS'){
    					_layer.msg('用户名已被使用', {icon: 2});
    					return false;
    				}else{
    					$.post("/user/save",data.field,function(res){
    	        			console.log(res)
    	        			var msg = res.message;
    						if(res.code == 'SUCCESS'){
    							_layer.msg(msg, {
    								  icon: 1,
    								});
    						}else{
    							_layer.msg(msg, {
    								  icon: 2,
    								});
    						}
    	        		})
    				}
        		})
        	}else{
        		$.post("/user/save",data.field,function(res){
        			console.log(res)
        			var msg = res.message;
					if(res.code == 'SUCCESS'){
						_layer.msg(msg, {
							  icon: 1,
							});
					}else{
						_layer.msg(msg, {
							  icon: 2,
							});
					}
        		})
        	}
        	return false;
        });
    };
    function getInformation(){
    	var userId = $("#id").val();
    	$.get("/user/get",{id:userId}, function(res){
    		var create = res.data.createTime;
    		var createTime = showTime(create);
    		$('#loginnameOld').val(res.data.loginname);
    		_form.val('formData', res.data);
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