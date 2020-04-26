layui.use(['form' ,'layer'], function() {
	var _form = layui.form,_layer = layui.layer; 
    var $ = layui.$;
    function init(){
    	var userId = $("#userId").val();
    	var bookId = $("#bookId").val();
    	getDetail(bookId);
    };
    function getDetail(bookId){
    	$.get("/book/get",{id:bookId},function(res){
    		console.log(res)
    		$("#bookPictures").attr("src",res.data.bookPictures);
    		_form.val('formData', res.data);
    		_form.render();
//    		var str = "";
//    		str += "<li style='height: 250px;'><div class='layui-col-md2'><a title="+res.data[i].bookName+"><img class='bookDetail' style='cursor:pointer' id="+res.data[i].id+" src="+res.data[i].bookPictures+" alt="+res.data[i].bookName+"></a></div><div class='layui-col-md9'><h2><a class='bookDetail' style='color: blue; cursor: pointer;' id="+res.data[i].id+">"+res.data[i].bookName+"</a></h2><div><span>"+res.data[i].author+"</span><i>&nbsp;&nbsp;/&nbsp;&nbsp;</i><span title='出版时间'>"+time+"&nbsp;&nbsp;/&nbsp;&nbsp;</span><span>"+res.data[i].publishingHouse+"</span></div><div><span style='color: red; font-size: 26px;'>¥"+res.data[i].price+"</span></div><p style='height: 100px;'>"+res.data[i].synopsis+"</p><div><button id="+res.data[i].id+" class='AddCar layui-btn layui-bg-red'><i class='layui-icon layui-icon-cart'></i>加入购物车</button><button id="+res.data[i].id+" class='AddCollection layui-btn'><i class='layui-icon layui-icon-star'></i>收藏</button></div></div></li>";
    	})
    };
    $(function(){
	   	init();
	});
})