layui.use(['form' ,'layer'], function() {
	var _form = layui.form,_layer = layui.layer; 
    var $ = layui.$;
    function init(){
    	_form.verify({
    		loginname: function(value){
    			/*console.log(value)
    			$.get("/user/getByLoginName",{loginname : value},function(res){
    				console.log(res)
    				debugger
    				if(res.code == 'SUCCESS'){
    					return '用户名已被使用';
    				}
    			})*/
    		}
    		,password: [
    		    /^[\S]{6,12}$/
    		    ,'密码必须6到12位，且不能出现空格'
    		  ]
    	});
    	_form.on("submit(register)",function (data){
    		console.log(data.field)
    		if(data.field.password != data.field.password_confirm){
    			_layer.msg('两次输入的密码不一致', {icon: 2});
    			return false;
    		}
    		else{
    			$.get("/user/getByLoginName",{loginname : data.field.loginname},function(res){
    				console.log(res)
    				if(res.code == 'SUCCESS'){
    					_layer.msg('用户名已被使用', {icon: 2});
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