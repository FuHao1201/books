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
					parent.layui.layer.closeAll();
					parent.layui.table.reload('user');//重载父页表格，参数为表格ID
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