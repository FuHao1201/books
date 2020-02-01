/**
 * 新增修改用户信息
 */
layui.use(['form','layer'], function() {
	var _form = layui.form,_layer = layui.layer;
    var $ = layui.$; 
	function init(){
	    getForm();
	    _form.render();
	    _form.on('submit',function(data){
	  	  console.log(data)
				$.post("/user/save", data.field, function(res) {
					var msg = res.message;
					layer.msg(msg, {
						  icon: 1,
						})
					_form.val('formData', res.data);
					_layer.close();
				});
			});
	};
	function getForm(){//根据id获取用户信息
		var id = $("#id").val();
		if(id == "") return;
		$.get("/user/get", {id:id}, function(res) {
			_form.val('formData', res.data);
		});
	};
	$(function(){
		init();
	});
}) 