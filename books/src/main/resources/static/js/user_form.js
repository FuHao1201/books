/**
 * 新增修改用户信息
 */
layui.use(['form','layer'], function() {
	var _form = layui.form,_layer = layui.layer;
    var $ = layui.$; 
	function init(){
	    getForm();
	    _form.render();
    	_form.verify({//自定义验证
    		password: [
    		    /^[\S]{6,12}$/
    		    ,'密码必须6到12位，且不能出现空格'
    		  ]
    	});
	    _form.on('submit',function(data){//保存点击监听
	  	  console.log(data)
	  	  var loginnameOld = $("#loginnameOld").val();
	  	  if(data.field.loginname == loginnameOld){
	  		$.post("/user/save",data.field,function(res){
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
				_form.val('formData', res.data);
	  		})
	  	  }else{
	  		$.get("/user/getByLoginName",{loginname : data.field.loginname},function(res){
				console.log(res)
				if(res.code == 'SUCCESS'){
					_layer.msg('用户名已被使用', {icon: 2});
					return false;
				}else{
					$.post("/user/save",data.field,function(res){
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
						_form.val('formData', res.data);
					})
				}
			})
	  	  }
		});
	  	  
	};
	function getForm(){//根据id获取用户信息
		var id = $("#id").val();
		if(id == "") return;
		$.get("/user/get", {id:id}, function(res) {
			_form.val('formData', res.data);
			$("#loginnameOld").val(res.data.loginname);	
		});
	};
	$(function(){
		init();
	});
}) 