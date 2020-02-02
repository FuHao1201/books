/**
 * 新增修改图书信息
 */
layui.use(['form','layer'], function() {
	var _form = layui.form,_layer = layui.layer;
    var $ = layui.$; 
	function init(){
	    getForm();
	    _form.render();
	    _form.on('submit',function(data){
	  	  console.log(data)
				$.post("/address/save", data.field, function(res) {
					console.log(res)
					var msg = res.message;
					_layer.msg(msg, {icon: 1});
					_form.val('formData', res.data);
					parent.layui.layer.closeAll();
					parent.layui.table.reload('address');//重载父页表格，参数为表格ID
				});
			});
	};
	function getForm(){//根据id获取图书信息
		var id = $("#id").val();
		if(id == "") return;
		$.get("/address/get", {id:id}, function(res) {
			_form.val('formData', res.data);
		});
	};
	$(function(){
		init();
	});
}) 