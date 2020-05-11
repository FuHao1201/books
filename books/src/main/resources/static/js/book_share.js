/*
 * 图书分享
 */
layui.use(['form' ,'layer'], function() {
	var _form = layui.form,_layer = layui.layer; 
    var $ = layui.$;
    function init(){
    	var bookId = $("#bookId").val();
    	$("#shareWeb").val("http://localhost:8088/book/books/book_detail?bookId="+bookId);
    };
    $(function(){
	   	init();
	});
})