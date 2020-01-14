/** 
  * 登录 
  */ 
var $ = layui.$; 
layui.use(['form' ,'layer'], function() { 
    var _form = layui.form,_element = layui.element;
    //getTime();
    //var _layer = layui.layer; 
}) 
function getTime(){
	debugger
	$.post("/user/getTime",{},function(res){
		console.log(res)
		$("#time").find('a').remove();
		var str = "";
		var $li = $("<a>"+res.time+"</a>");
		$("#time").append($li);
		var layFilter = $("#time").attr('lay-filter');
	    _element.render('time', layFilter);
	})
}
//function login(){ 
//	debugger
//    var json={
//		loginname:$("#loginname").val(), 
//		password:$("#password").val() 
//	};    
//    $.post("/user/login",json,function(res) {
//    	//location.href="/user/manager";
//    });
//}