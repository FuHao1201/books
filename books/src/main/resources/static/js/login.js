/** 
  * 登录 
  */ 
layui.use(['form' ,'layer'], function() {
	var _form = layui.form,_layer = layui.layer; 
    var $ = layui.$;
    function init(){
        _form.on("submit(login)",function (data) { 
      		$.post("/user/login",data.field,function(res) {
      			console.log(res)
//      			var loginname = res.data.loginname;
      			var msg = res.message;
      			if(res.code == "SUCCESS"){
      				_layer.msg(msg, {icon: 1});
//      				debugger
//      				window.location.href="/user/index?id="+res.data.id;
      				$.get("/user/index",res.data,function(res){
      					console.log(res)
      					document.write(res);
      				});
      			}else{
      				_layer.msg(msg, {icon: 2});
      			}
      		});
            return false;
        });
    };
   $(function(){
	   	init();
	});
}) 
