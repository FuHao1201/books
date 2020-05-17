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
				$.post("/book/save", data.field, function(res) {
					var msg = res.message;
					_layer.msg(msg, {icon: 1});
					_form.val('formData', res.data);
//					parent.layui.layer.closeAll();
//					parent.layui.table.reload('book');//重载父页表格，参数为表格ID
				});
			});
	};
	function getForm(){//根据id获取图书信息
		var id = $("#id").val();
		if(id == "") return;
		$.get("/book/get", {id:id}, function(res) {
			_form.val('formData', res.data);
			var d = new Date(res.data.publicationTime); 
			var year = d.getFullYear();
			var month = d.getMonth();
			month++;
			var day = d.getDate();
			month = month<10 ? "0"+month:month;
			day = day<10 ? "0"+day:day;
			var time = year+"-"+month+"-"+day;
			$("#publicationTime").val(time);
		});
	};
	$(function(){
		init();
	});
}) 