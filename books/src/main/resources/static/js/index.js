/** 
  * 主页 
  */ 
layui.use(['form' ,'layer' ,'element'], function() { 
    var _form = layui.form,_element = layui.element;
    var $ = layui.$;
    function init() {
    	getBookType();
    };
    function getBookType(){//获取图书类型
    	$.get("/book/getBookType",{},function(res){
    		console.log(res)
    		var str = "";
			if(res.data !=null){
				for(var i = 0;i < res.data.length;i++){
					str += "<dd><a href=/book/books/book_list_type?bookType="+res.data[i].bookType+" target='main'>"+res.data[i].bookType+"</a></dd>"
					_element.render('bookType');
				}
			}
			$("#type").html(str);
    	})
    };
    $(function(){
    	var userId = $("#userId").val();
    	console.log(userId)
    	init();
    });
})