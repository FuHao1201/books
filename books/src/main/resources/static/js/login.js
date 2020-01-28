/** 
  * 登录 
  */ 
layui.use(['form' ,'layer'], function() { 
          var _form = layui.form,_layer = layui.layer; 
          var $ = layui.$;  
          _form.on("submit(login)",function (data) { 
        		$.post("/user/login",data.field,function(res) {
        			console.log(res)
//        			var loginname = res.data.loginname;
        			var msg = res.message;
        			if(msg == "登录成功"){
        				_layer.msg(msg, {icon: 1});
        				debugger
        				$.get("/user/index",res.data,function(res){
        					
        				});
        			}else{
        				_layer.msg(msg, {icon: 2});
        			}
        		});
              return false;
          }); 
      }) 