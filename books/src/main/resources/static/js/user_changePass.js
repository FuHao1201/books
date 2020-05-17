/**
 * 修改密码
 */
layui.use(['form','layer'], function() {
	var _form = layui.form,_layer = layui.layer;
    var $ = layui.$; 
	function init(){
		$("#password_old").on("input",function(e){
		    //获取input输入的值
		    console.log(e.delegateTarget.value);
			if(e.delegateTarget.value != ''){
				$("#eye_old").css('display','block');
			}else{
				$("#eye_old").css('display','none');
			}
		  });
		$("#password_new").on("input",function(e){
		    //获取input输入的值
		    console.log(e.delegateTarget.value);
			if(e.delegateTarget.value != ''){
				$("#eye_new").css('display','block');
			}else{
				$("#eye_new").css('display','none');
			}
		  });
		$("#password_confirm").on("input",function(e){
		    //获取input输入的值
		    console.log(e.delegateTarget.value);
			if(e.delegateTarget.value != ''){
				$("#eye_confirm").css('display','block');
			}else{
				$("#eye_confirm").css('display','none');
			}
		  });
		$("#eye_old").click(function(){
			if($("#password_old").attr("type") == "password"){
				$("#password_old").attr("type","text");
			}else{
				$("#password_old").attr("type","password");
			}
		  });
		$("#eye_new").click(function(){
			if($("#password_new").attr("type") == "password"){
				$("#password_new").attr("type","text");
			}else{
				$("#password_new").attr("type","password");
			}
		  });
		$("#eye_confirm").click(function(){
			if($("#password_confirm").attr("type") == "password"){
				$("#password_confirm").attr("type","text");
			}else{
				$("#password_confirm").attr("type","password");
			}
		  });
		_form.verify({//自定义验证
    		password: [
    		    /^[\S]{6,12}$/
    		    ,'密码必须6到12位，且不能出现空格'
    		  ]
    	});
	    _form.on('submit',function(data){//修改密码点击监听
	    	//console.log(data.field.password_new)
	    	var password_old = data.field.password_old;
	    	var password_new = data.field.password_new;
	    	var password_confirm = data.field.password_confirm;
	    	console.log(password_old)
	    	console.log(password_new)
	    	console.log(password_confirm)
	    	if(password_new != password_confirm){
	    		_layer.msg("两次新密码输入不一致",{
	    			icon: 2,
	    		});
	    	}else{
	    		var userId = $("#id").val();
	    		console.log(userId)
	    		var json = {
	    			id : userId ,
	    			password : password_old
	    		};
	    		$.post("/user/comparePass", json, function(res){
	    			var code = res.code;
	    			if(code == "ERROR"){
	    				_layer.msg("原密码输入错误",{
	    	    			icon: 2,
	    	    		});
	    			}
	    			if(code == "SUCCESS"){
	    				var json = {
	    					id : userId , 
	    					password : password_new
	    				}
	    				$.post("/user/save",json, function(res){
	    					_layer.msg("密码修改成功",{
		    	    			icon: 1,
		    	    		});
	    					$(".layui-input").val("");
	    				})
	    			}
	    		});
	    	}
	    	return false;
		});
	};
	$(function(){
		init();
	});
}) 