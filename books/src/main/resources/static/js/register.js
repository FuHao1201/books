/** 
  * 注册 
  */ 
layui.use(['form' ,'layer'], function() {
	var _form = layui.form,_layer = layui.layer; 
    var $ = layui.$;
    function init(){
    	_form.verify({//自定义验证
    		password: [
    		    /^[\S]{6,12}$/
    		    ,'密码必须6到12位，且不能出现空格'
    		  ]
    	});
    	_form.on("submit(register)",function (data){//注册点击监听
    		console.log(data.field)
    		if(data.field.password != data.field.password_confirm){
    			_layer.msg('两次输入的密码不一致', {icon: 2});
    			return false;
    		}
    		else{
    			$.get("/user/getByLoginName",{loginname : data.field.loginname},function(res){
    				console.log(res)
    				if(res.code == 'SUCCESS'){
    					_layer.msg('登录名已被使用', {icon: 2});
    					return false;
    				}else{
    					$.post("/user/save",data.field,function(res){
    						console.log(res)
    						if(res.code == 'SUCCESS'){
    							_layer.msg('注册成功', {icon: 1});
    							setTimeout(function(){//两秒后跳转
    		            			window.location.href="/user/login_view";
    							  },2000);
    						}else{
    							_layer.msg('注册失败', {icon: 2});
    						}
    					})
    				}
    			})
    		}
    		return false;
    	});
    };
    $(function(){
	   	init();
	});
})