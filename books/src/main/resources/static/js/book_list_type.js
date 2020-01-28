/** 
  * 图书列表 
  */ 

layui.use(['form' ,'table' ,'layer','element'], function() { 
	var $ = layui.$; 
    var _table = layui.table,_form = layui.form,_layer= layui.layer,_element = layui.element;
    
    function init() {
    	var bookType=$("#bookType").val();
    	getBooks(bookType);
		_form.on('submit(SearchForm)', function(data){
			  var condition = {where : data.field, page : 1};
			  _table.reload('book', condition);
			  return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
		});
	};
	function getBooks(bookType){
		$.post("/book/listBytype",{bookType:bookType},function(res){
			console.log(res)
			var str = "";
			if(res.data !=null){
				for(var i = 0;i < res.data.length;i++){
					str += "<li><a>"+res.data[i].bookName+"</a></li>"                               
					_element.render('book');
				}
			}
			$("#book").html(str);
		})
	};
	function add() { //新增
		_layer.open({
			title : '新增图书',
			type : 2,
			area: ['500px', '500px'],
			content : '/book/books/book_add'
		})
	};
	function edit(id) { //编辑
		console.log(id)
		_layer.open({
			title : "编辑图书",
			type : 2,
			area: ['500px', '500px'],
			content : '/book/books/book_update?id='+ id
		});
	};
	function remove(ids) { //删除
		if(!$.isArray(ids)) {
			ids = [ids];
		}
		_layer.confirm('确认是否删除？', {
			  btn: ['确认','取消'] //按钮
			}, function(){
				$.post("/book/remove", {ids:ids}, function(res){
					var msg = res.message;
					_layer.msg(msg, {icon: 1});
//					_table.render().reload(options);
					reload();
				})
			}, function(){
				_layer.close();
			});
	};
	function removeBatch(obj) { // 批量删除
        var checkStatus = _table.checkStatus(obj.config.id)
        , data = checkStatus.data //获取选中的数据
		, ids = [];
		$.each(data, function(i,val){
			ids.push(val.id);
		});
		if(ids.length == 0) {
			_layer.msg('请选择一行', {icon: 0});
			return;
		}
		remove(ids);
	};
	function reload(condition) { // 重载列表
		_table.reload('book',{
			condition
		});
	}; 	
    $(function() {
    	
    	init();
	});
}) 
