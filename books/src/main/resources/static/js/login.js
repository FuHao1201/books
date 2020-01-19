/** 
  * 登录 
  */ 
layui.use(['form' ,'layer'], function() { 
          var _form = layui.form; 
          var $ = layui.$; 
          //var _layer = layui.layer; 
          _form.on("submit(login)",function (data) { 
//        	  console.log("123");
        	  debugger
        		$.post("/user/login",data.field,function(res) {
//        		    	location.href="/user/manager";
        		});
              return false;
          }); 
      }) 

      
//function login(){ 
//	debugger
//    var json={
//		loginname:$("#loginname").val(), 
//		password:$("#password").val() 
//	};    
//    $.post("/user/login",json,function(res) {
////    	location.href="/user/manager";
//    });
//} 
