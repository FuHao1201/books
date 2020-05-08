layui.use(['form' ,'layer','element'], function() {
	var _form = layui.form,_layer = layui.layer,_element = layui.element; 
    var $ = layui.$;
    function init(){
    	var userId = $("#userId").val();
    	var bookId = $("#bookId").val();
    	getDetail(bookId);
    	$("#AddCar").click(function(){
    		debugger
    	});
/*    	,function(){
    		$("#book").delegate(".AddCar","click",function(data){//加入购物车点击
        		console.log(data)
        		var userId = $("#userId").val();
        		if(userId == ""){
        			_layer.msg('请登录后再操作');
        			setTimeout(function(){//两秒后跳转
            			window.location.href="/user/login_view";
    				  },2000);
        		}
        		var json={
        			bookId:data.currentTarget.id,
        			userId:userId
        		}
        		addCar(json);
        	});
        	$("#book").delegate(".AddCollection","click",function(data){//收藏点击
        		var userId = $("#userId").val();
        		if(userId == ""){
        			_layer.msg('请登录后再操作');
        			setTimeout(function(){//两秒后跳转
            			window.location.href="/user/login_view";
    				  },2000);
        		}
        		var json={
            			bookId:data.currentTarget.id,
            			userId:userId
            	}
        		addCollection(json);
        	});
    	}*/
    };
    function getDetail(bookId){
    	$.get("/book/get",{id:bookId},function(res){
    		console.log(res)
    		debugger
    		$("#bookPictures").attr("src",res.data.bookPictures);
//    		_form.val('formData', res.data);
//    		_form.render();
    		$("#price").val("￥"+res.data.price);
    		$("#bookName").val(res.data.bookName);
    		$("#author").val(res.data.author);
    		$("#synopsis").val(res.data.synopsis);
    		$("#publishingHouse").val(res.data.publishingHouse);
    		var d = new Date(res.data.publicationTime); 
			var year = d.getFullYear();
			var month = d.getMonth();
			month++;
			var day = d.getDate();
			month = month<10 ? "0"+month:month;
			day = day<10 ? "0"+day:day;
			var time = year+"-"+month+"-"+day;
			$("#time").val(time);
    	})
    };
    function addCar(json){//加入购物车
//    	debugger
		$.post("/car/addCar",json,function(res){
//			console.log(res)
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
    $(function(){
	   	init();
	});
})