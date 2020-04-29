layui.use(['form' ,'layer','element'], function() {
	var _form = layui.form,_layer = layui.layer,_element = layui.element; 
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
    		$("#price").val("￥"+res.data.price);
    		var d = new Date(res.data.publicationTime); 
			var year = d.getFullYear();
			var month = d.getMonth();
			month++;
			var day = d.getDate();
			month = month<10 ? "0"+month:month;
			day = day<10 ? "0"+day:day;
			var time = year+"-"+month+"-"+day;
    		var str = "";
    		str += "<li style='height: 250px;'><div class='layui-col-md2'><a title="+res.data.bookName+"><img class='bookDetail' style='cursor:pointer' id="+res.data.id+" src="+res.data.bookPictures+" alt="+res.data.bookName+"></a></div><div class='layui-col-md9'><h2><a class='bookDetail' style='color: blue; cursor: pointer;' id="+res.data.id+">"+res.data.bookName+"</a></h2><div><span>"+res.data.author+"</span><i>&nbsp;&nbsp;/&nbsp;&nbsp;</i><span title='出版时间'>"+time+"&nbsp;&nbsp;/&nbsp;&nbsp;</span><span>"+res.data.publishingHouse+"</span></div><div><span style='color: red; font-size: 26px;'>¥"+res.data.price+"</span></div><p style='height: 100px;'>"+res.data.synopsis+"</p><div><button id="+res.data.id+" class='AddCar layui-btn layui-bg-red'><i class='layui-icon layui-icon-cart'></i>加入购物车</button><button id="+res.data.id+" class='AddCollection layui-btn'><i class='layui-icon layui-icon-star'></i>收藏</button></div></div></li>";
    		_element.render('book');
    		$("#book").html(str);
    	})
    };
    $(function(){
	   	init();
	});
})