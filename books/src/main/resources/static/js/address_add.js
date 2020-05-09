/**
 * 新增地址信息
 */
layui.use(['form','layer'], function() {
	var _form = layui.form,_layer = layui.layer;
    var $ = layui.$; 
	function init(){
	    _form.on('submit',function(data){
	  	  console.log(data.field)
				$.post("/address/save", data.field, function(res) {
					var msg = res.message;
					_layer.msg(msg, {
						  icon: 1,
						})
					_form.val('formData', res.data);
					parent.layui.layer.closeAll();
					parent.layui.table.reload('address');//重载父页表格，参数为表格ID
				});
			});
	};
	$(function(){
		init();
	});
}) 