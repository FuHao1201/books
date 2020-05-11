/** 
  * 图书详情
  */ 
layui.use(['form' ,'layer','element'], function() {
	var _form = layui.form,_layer = layui.layer,_element = layui.element; 
    var $ = layui.$;
    function init(){
    	var userId = $("#userId").val();
    	var bookId = $("#bookId").val();
    	getDetail(bookId);
    	$("#AddCar").click(function(){
    		var bookNum = $("#bookNum").html();
    		if(userId == ""){
    			_layer.msg('请登录后再操作');
    			return;
    		}
    		if(bookNum == '0'){
    			_layer.msg('库存不足 加入购物车失败',{icon: 2,});
    			return;
    		}
    		var json={
    			bookId:bookId,
    			userId:userId
    		}
    		addCar(json);
    	});
    	$("#AddCollection").click(function(){
    		if(userId == ""){
    			_layer.msg('请登录后再操作');
    			return;
    		}
    		var json={
    			bookId:bookId,
    			userId:userId
    		}
    		addCollection(json);
    	});
    	$("#share").click(function(){
    		share(bookId);
    	});
    };
    function getDetail(bookId){
    	$.get("/book/get",{id:bookId},function(res){
    		console.log(res)
    		$("#bookNum").text(res.data.bookNum);
    		if(res.data.bookNum == '0'){
//    			$("#AddCar").text("库存不足");
    			$("#AddCar").addClass("layui-btn-disabled");
    		}
    		var str = "";
    		var d = new Date(res.data.publicationTime); 
			var year = d.getFullYear();
			var month = d.getMonth();
			month++;
			var day = d.getDate();
			month = month<10 ? "0"+month:month;
			day = day<10 ? "0"+day:day;
			var time = year+"-"+month+"-"+day;
			$("#time").val(time);
			str += "<li><div class='layui-col-md2'><a title="+res.data.bookName+"><img style='height: 200px;' src="+res.data.bookPictures+" alt="+res.data.bookName+"></a></div><div class='layui-col-md9'><h2><a style='color: blue;'>"+res.data.bookName+"</a></h2><div><span>"+res.data.author+"</span><i>&nbsp;&nbsp;/&nbsp;&nbsp;</i><span title='出版时间'>"+time+"&nbsp;&nbsp;/&nbsp;&nbsp;</span><span>"+res.data.publishingHouse+"</span></div><div><span style='color: red; font-size: 26px;'>¥"+res.data.price+"</span></div><p style='height: 100px;width:750px;'>"+res.data.synopsis+"</p></div></li>";
			_element.render('book');
			$("#book").html(str);
    	})
    };
    function addCar(json){//加入购物车
    	console.log(json)
		$.post("/car/addCar",json,function(res){
			var msg=res.message;
			if(res.code == "SUCCESS"){
				_layer.msg(msg, {
					  icon: 1,
				});
			}if(res.code == "ERROR"){
				_layer.msg(msg, {
					  icon: 2,
				});
			}
		})
	};
	function addCollection(json){//收藏
		$.post("/collection/addCollection",json,function(res){
			var msg=res.message;
			if(res.code == "SUCCESS"){
				_layer.msg(msg, {
					  icon: 1,
				});
			}if(res.code == "ERROR"){
				_layer.msg(msg, {
					  icon: 2,
				});
			}
		})
	};
	function share(bookId){//分享
		_layer.open({
			title : '分享图书(复制网页地址)',
			type : 2,
			area: ['500px', '100px'],
			content : '/book/books/book_share?bookId='+bookId
		})
	};
    $(function(){
	   	init();
	});
})