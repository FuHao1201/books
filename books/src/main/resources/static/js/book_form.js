/**
 * 新增修改图书信息
 */
layui.use(['form','layer'], function() {
	var _form = layui.form,_layer = layui.layer;
    var $ = layui.$; 
	function init(){
//		debugger
	    getForm();
	    _form.render();
	    _form.on('submit',function(data){
	  	  console.log(data)
				$.post("/book/save", data.field.loginname, function(res) {
					var msg = res.message;
					layer.msg(msg, {
						  icon: 1,
						})
					_form.val('formData', res.data);
					_layer.close();
				});
			});
	};
	function getForm(){
		var id = $("#id").val();
		if(id == "") return;
		$.get("/book/get", {id:id}, function(res) {
			_form.val('formData', res.data);
		});
	};
	$(function(){
		init();
	});
}) 