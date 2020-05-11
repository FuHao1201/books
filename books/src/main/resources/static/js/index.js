/** 
  * 主页 
  */ 
layui.use(['form' ,'layer' ,'element'], function() { 
    var _form = layui.form,_element = layui.element,_layer = layui.layer,_flow = layui.flow,_util = layui.util;
    _flow.lazyimg(); 
    var $ = layui.$;
    function init() {
    	 _util.fixbar({//返回顶部
             top: true
             ,css: {right: 15, bottom: 35}
             ,bgcolor: '#393D49'
           });
        var userId = $("#userId").val();
        getSuggestion();
    	console.log(userId)
    	if(userId != ''){
    		getMine(userId , function(){	
    			$("#userInformation").click(function(){//个人资料点击监听
    				getInformation(userId);
    			});
    			$("#changePass").click(function(){//修改密码点击监听
    				changePass(userId);
    			});
    			$("#car").click(function(){//购物车点击监听
    				carList(userId);
    			});
    			$("#collection").click(function(){//收藏点击监听
    				collectionList(userId);
    			});
    			$("#order").click(function(){//订单点击监听
    				orderList(userId);
    			});
    			$("#exit").click(function(){//退出点击监听
    				exit(userId);
    			});
    		});
    	}
    	getBookType(function(){
    		$(".bookType").click(function(data){//图书类型点击监听
        		console.log(data.delegateTarget.id)
        		var bookType = data.delegateTarget.id;
        		var str = "";
            	str += "<a><cite>图书分类</cite></a><a><cite>"+bookType+"</cite></a>";
            	_element.render('breadcrumb');
            	$("#breadcrumb").html(str);
            	getBooks(bookType);
    		});
    		$("#book").delegate(".AddCar","click",function(data){//加入购物车点击
        		console.log(data.currentTarget.id)
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
        	$("#book").delegate(".bookDetail","click",function(data){//图书点击监听
        		console.log(data)
        		console.log(data.currentTarget.id)
        		var json={
            			bookId:data.currentTarget.id,
            			userId:userId
            	}
        		getDetail(json);
        	});
    	});
    	$("#search").click(function(data){//搜索点击监听
//    		debugger
    		var text = $("#search_text").val();
    		var select = $("#search_select").val();
    		if(text == ''){
    			_layer.msg("请输入你想搜索的内容", {
					  icon: 2,
				});
    			return;
    		}
    		if(select == "bookName"){
    			var json = {
    					bookName : text,
        		};
    		}else if(select == "author"){
    			var json = {
    					author : text,
        		};
    		}else if(select == "publishingHouse"){
    			var json = {
    					publishingHouse : text,
        		};
    		}
    		$("#breadcrumb").html("");
    		searchBook(json);
    		console.log(json)
		});
    };
    function getMine(userId,fn){//登录后个人信息获取
    	$.get("/user/get",{id:userId},function(res){
    		console.log(res)
    		var str = "";
    		if(res.data != null){
    			str += "<li class='layui-nav-item'>\<a class='layui-icon layui-icon-cart' id='car' href='javascript:;'>购物车</a></li>\
		      <li class='layui-nav-item'><a class='layui-icon layui-icon-star' id='collection' href='javascript:;'>收藏</a></li>\
    		  <li class='layui-nav-item'><a class='layui-icon layui-icon-list' id='order' href='javascript:;'>订单</a></li>\
		      <li class='layui-nav-item'>\
		        <a href='javascript:;'>\
		          <img src="+res.data.head+" class='layui-nav-img'>\
		          "+res.data.loginname+"</a>\
		        <dl class='layui-nav-child'>\
		          <dd><a href='javascript:;' id='userInformation'>个人资料</a></dd>\
		          <dd><a href='javascript:;' id='changePass'>修改密码</a></dd>\
		        </dl>\
		      </li>\
		      <li class='layui-nav-item'><a href='javascript:;' id='exit'>退出</a></li>";
    		}
    		_element.render('mine');
    		$("#mine").html(str);
    		fn && fn();
    	})
    };
    function getSuggestion(){//推荐图书
    	var bookType = '计算机';
    	$.post("/book/listBytype",{bookType:bookType},function(res){
    		console.log(res)
    		var str = "";
    		str += "<h2 style='margin-left:100px;color:red;'>今日推荐</h2><br/>"
    		for(var i = 0;i < res.data.length;i++){
    			str += "<div class='layui-col-md3' style='text-align:center;height:300px;'><a title="+res.data[i].bookName+"><img class='bookDetail' style='cursor:pointer;height:200px;' id="+res.data[i].id+" src="+res.data[i].bookPictures+" alt="+res.data[i].bookName+"></a><br/><a style='color: blue; cursor: pointer;' id="+res.data[i].id+">"+res.data[i].bookName+"</a><br/><span style='color: red; font-size: 26px;'>¥"+res.data[i].price+"</span></div>";
    			_element.render('book');
    		}
    		$("#book").html(str);
    	});
    };
    function getInformation(userId){//个人资料
    	_layer.open({
			title: '个人资料',
			type : 2,
			area: ['500px', '400px'],
			content: '/user/users/user_information?id='+userId,
		});
    };
    function changePass(userId){//密码修改
    	_layer.open({
			title: '密码修改',
			type : 2,
			area: ['480px', '300px'],
			content: '/user/users/user_changePass?id='+userId,
		});
    };
    function exit(){//退出
    	_layer.confirm('确认退出当前账号？', {
			  btn: ['确认','取消'] //按钮
			}, function(){
				window.location.href="/user/login_view";
			}, function(){
				_layer.close();
			});
    };
    function getBookType(fn){//获取图书类型
    	$.get("/book/getBookType",{},function(res){
    		console.log(res)
    		var str = "";
			if(res.data !=null){
				for(var i = 0;i < res.data.length;i++){
					str += "<dd style='width:75px;'><a href='javascript:;' id="+res.data[i].bookType+" class='bookType'>"+res.data[i].bookType+"</a></dd>";
					_element.render('bookType');
				}
			}
			$("#type").html(str);
			fn && fn();
    	})
    };
    function carList(userId){//购物车列表
    	_layer.open({
			title: '购物车',
			type : 2,
			area: ['1000px', '550px'],
			content: '/car/cars/car_list?userId='+userId,
		});
    };
    function collectionList(userId){//收藏列表
    	_layer.open({
			title: '收藏',
			type : 2,
			area: ['1000px', '550px'],
			content: '/collection/collections/collection_list?userId='+userId,
		});
    };
    function orderList(userId){//订单列表
    	_layer.open({
			title: '订单',
			type : 2,
			area: ['1200px', '550px'],
			content: '/order/orders/order_list?userId='+userId,
		});
    };
    function getBooks(bookType){//根据图书类型获取图书列表
		$.post("/book/listBytype",{bookType:bookType},function(res){
			console.log(res)
			var str = "";
			if(res.data !=null){
				for(var i = 0;i < res.data.length;i++){
					var d = new Date(res.data[i].publicationTime); 
					var year = d.getFullYear();
					var month = d.getMonth();
					month++;
					var day = d.getDate();
					month = month<10 ? "0"+month:month;
					day = day<10 ? "0"+day:day;
					var time = year+"-"+month+"-"+day;
					if(res.data[i].bookNum == '0'){
						if(res.data.length < 3){
							str += "<li style='height: 250px;'><div class='layui-col-md2'><a title="+res.data[i].bookName+"><img class='bookDetail' style='cursor:pointer' id="+res.data[i].id+" src="+res.data[i].bookPictures+" alt="+res.data[i].bookName+"></a></div><div class='layui-col-md9'><h2><a class='bookDetail' style='color: blue; cursor: pointer;' id="+res.data[i].id+">"+res.data[i].bookName+"</a></h2><div><span>"+res.data[i].author+"</span><i>&nbsp;&nbsp;/&nbsp;&nbsp;</i><span title='出版时间'>"+time+"&nbsp;&nbsp;/&nbsp;&nbsp;</span><span>"+res.data[i].publishingHouse+"</span></div><div><span style='color: red; font-size: 26px;'>¥"+res.data[i].price+"</span></div><p style='height: 100px;'>"+res.data[i].synopsis+"</p><div><button id="+res.data[i].id+" class='layui-btn layui-bg-red'><i class='layui-icon layui-icon-cart layui-btn-disabled'></i>库存不足</button><button id="+res.data[i].id+" class='AddCollection layui-btn'><i class='layui-icon layui-icon-star'></i>收藏</button></div></div></li>"
						}else{
							str += "<li style='height: 250px;'><div class='layui-col-md2'><a title="+res.data[i].bookName+"><img class='bookDetail' style='cursor:pointer' id="+res.data[i].id+" lay-src="+res.data[i].bookPictures+" alt="+res.data[i].bookName+"></a></div><div class='layui-col-md9'><h2><a class='bookDetail' style='color: blue; cursor: pointer;' id="+res.data[i].id+">"+res.data[i].bookName+"</a></h2><div><span>"+res.data[i].author+"</span><i>&nbsp;&nbsp;/&nbsp;&nbsp;</i><span title='出版时间'>"+time+"&nbsp;&nbsp;/&nbsp;&nbsp;</span><span>"+res.data[i].publishingHouse+"</span></div><div><span style='color: red; font-size: 26px;'>¥"+res.data[i].price+"</span></div><p style='height: 100px;'>"+res.data[i].synopsis+"</p><div><button id="+res.data[i].id+" class='layui-btn layui-bg-red  layui-btn-disabled'><i class='layui-icon layui-icon-cart'></i>库存不足</button><button id="+res.data[i].id+" class='AddCollection layui-btn'><i class='layui-icon layui-icon-star'></i>收藏</button></div></div></li>"
						}
					}else{
						if(res.data.length < 3){
							str += "<li style='height: 250px;'><div class='layui-col-md2'><a title="+res.data[i].bookName+"><img class='bookDetail' style='cursor:pointer' id="+res.data[i].id+" src="+res.data[i].bookPictures+" alt="+res.data[i].bookName+"></a></div><div class='layui-col-md9'><h2><a class='bookDetail' style='color: blue; cursor: pointer;' id="+res.data[i].id+">"+res.data[i].bookName+"</a></h2><div><span>"+res.data[i].author+"</span><i>&nbsp;&nbsp;/&nbsp;&nbsp;</i><span title='出版时间'>"+time+"&nbsp;&nbsp;/&nbsp;&nbsp;</span><span>"+res.data[i].publishingHouse+"</span></div><div><span style='color: red; font-size: 26px;'>¥"+res.data[i].price+"</span></div><p style='height: 100px;'>"+res.data[i].synopsis+"</p><div><button id="+res.data[i].id+" class='AddCar layui-btn layui-bg-red'><i class='layui-icon layui-icon-cart'></i>加入购物车</button><button id="+res.data[i].id+" class='AddCollection layui-btn'><i class='layui-icon layui-icon-star'></i>收藏</button></div></div></li>"
						}else{
							str += "<li style='height: 250px;'><div class='layui-col-md2'><a title="+res.data[i].bookName+"><img class='bookDetail' style='cursor:pointer' id="+res.data[i].id+" lay-src="+res.data[i].bookPictures+" alt="+res.data[i].bookName+"></a></div><div class='layui-col-md9'><h2><a class='bookDetail' style='color: blue; cursor: pointer;' id="+res.data[i].id+">"+res.data[i].bookName+"</a></h2><div><span>"+res.data[i].author+"</span><i>&nbsp;&nbsp;/&nbsp;&nbsp;</i><span title='出版时间'>"+time+"&nbsp;&nbsp;/&nbsp;&nbsp;</span><span>"+res.data[i].publishingHouse+"</span></div><div><span style='color: red; font-size: 26px;'>¥"+res.data[i].price+"</span></div><p style='height: 100px;'>"+res.data[i].synopsis+"</p><div><button id="+res.data[i].id+" class='AddCar layui-btn layui-bg-red'><i class='layui-icon layui-icon-cart'></i>加入购物车</button><button id="+res.data[i].id+" class='AddCollection layui-btn'><i class='layui-icon layui-icon-star'></i>收藏</button></div></div></li>"
						}
					}
					//str += "<li><div class='layui-col-md2'><a title='老人与海(温暖插画纪念版)'><img src='http://image12.bookschina.com/2019/20191128/1/s7663892.jpg' alt='老人与海(温暖插画纪念版)' data-original='http://image12.bookschina.com/2019/20191128/1/s7663892.jpg' class='lazyImg'></a></div><div class='layui-col-md9'><h2><a onclick='' style='color: blue;'>老人与海(温暖插画纪念版)</a></h2><div><a>[美]厄尼斯特·海明威 著,何超/王鹏 译,宋晓宇 绘</a><i>&nbsp;&nbsp;/&nbsp;&nbsp;</i><span class='pulishTiem' title='出版时间'>2015-08-01&nbsp;&nbsp;/&nbsp;&nbsp;</span><a>石油工业出版社</a></div><div><span class='' style='color: red; font-size: 26px;'>¥34.8</span></div><p style='height: 100px;'>简介</p><div><button onclick='AddCar' class='layui-btn layui-bg-red'><i class='layui-icon layui-icon-cart'></i>加入购物车</button><button onclick='AddCollection' class='layui-btn'><i class='layui-icon layui-icon-star'></i>收藏</button></div></div></li>";                               
					_element.render('book');
				}
			}
			$("#book").html(str);
		})
	};
	function addCar(json){//加入购物车
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
	function getDetail(json){//图书详情
		console.log(json.userId)
		_layer.open({
			title: '图书详情',
			type : 2,
			area: ['800px', '550px'],
			content: '/book/books/book_detail?userId='+json.userId+'&bookId='+json.bookId,
		});
	};
	function searchBook(json){//搜索图书
		$.get("/book/list",json,function(res){
			console.log(res)
			var str = "";
			if(res.data !=null){
				str +="共找到<a style='color:red'>"+res.data.length+"</a>本图书<br/>";
				_element.render('book');
				for(var i = 0;i < res.data.length;i++){
					var d = new Date(res.data[i].publicationTime); 
					var year = d.getFullYear();
					var month = d.getMonth();
					month++;
					var day = d.getDate();
					month = month<10 ? "0"+month:month;
					day = day<10 ? "0"+day:day;
					var time = year+"-"+month+"-"+day;
					//str += "<li><div class='layui-col-md2'><a title='老人与海(温暖插画纪念版)'><img src='http://image12.bookschina.com/2019/20191128/1/s7663892.jpg' alt='老人与海(温暖插画纪念版)' data-original='http://image12.bookschina.com/2019/20191128/1/s7663892.jpg' class='lazyImg'></a></div><div class='layui-col-md9'><h2><a onclick='' style='color: blue;'>老人与海(温暖插画纪念版)</a></h2><div><a>[美]厄尼斯特·海明威 著,何超/王鹏 译,宋晓宇 绘</a><i>&nbsp;&nbsp;/&nbsp;&nbsp;</i><span class='pulishTiem' title='出版时间'>2015-08-01&nbsp;&nbsp;/&nbsp;&nbsp;</span><a>石油工业出版社</a></div><div><span class='' style='color: red; font-size: 26px;'>¥34.8</span></div><p style='height: 100px;'>简介</p><div><button onclick='AddCar' class='layui-btn layui-bg-red'><i class='layui-icon layui-icon-cart'></i>加入购物车</button><button onclick='AddCollection' class='layui-btn'><i class='layui-icon layui-icon-star'></i>收藏</button></div></div></li>";                               
					if(res.data.length < 3){
						str += "<li style='height: 250px;'><div class='layui-col-md2'><a title="+res.data[i].bookName+"><img class='bookDetail' style='cursor:pointer' id="+res.data[i].id+" src="+res.data[i].bookPictures+" alt="+res.data[i].bookName+"></a></div><div class='layui-col-md9'><h2><a class='bookDetail' style='color: blue; cursor: pointer;' id="+res.data[i].id+">"+res.data[i].bookName+"</a></h2><div><span>"+res.data[i].author+"</span><i>&nbsp;&nbsp;/&nbsp;&nbsp;</i><span title='出版时间'>"+time+"&nbsp;&nbsp;/&nbsp;&nbsp;</span><span>"+res.data[i].publishingHouse+"</span></div><div><span style='color: red; font-size: 26px;'>¥"+res.data[i].price+"</span></div><p style='height: 100px;'>"+res.data[i].synopsis+"</p><div><button id="+res.data[i].id+" class='AddCar layui-btn layui-bg-red'><i class='layui-icon layui-icon-cart'></i>加入购物车</button><button id="+res.data[i].id+" class='AddCollection layui-btn'><i class='layui-icon layui-icon-star'></i>收藏</button></div></div></li>"
					}else{
						str += "<li style='height: 250px;'><div class='layui-col-md2'><a title="+res.data[i].bookName+"><img class='bookDetail' style='cursor:pointer' id="+res.data[i].id+" lay-src="+res.data[i].bookPictures+" alt="+res.data[i].bookName+"></a></div><div class='layui-col-md9'><h2><a class='bookDetail' style='color: blue; cursor: pointer;' id="+res.data[i].id+">"+res.data[i].bookName+"</a></h2><div><span>"+res.data[i].author+"</span><i>&nbsp;&nbsp;/&nbsp;&nbsp;</i><span title='出版时间'>"+time+"&nbsp;&nbsp;/&nbsp;&nbsp;</span><span>"+res.data[i].publishingHouse+"</span></div><div><span style='color: red; font-size: 26px;'>¥"+res.data[i].price+"</span></div><p style='height: 100px;'>"+res.data[i].synopsis+"</p><div><button id="+res.data[i].id+" class='AddCar layui-btn layui-bg-red'><i class='layui-icon layui-icon-cart'></i>加入购物车</button><button id="+res.data[i].id+" class='AddCollection layui-btn'><i class='layui-icon layui-icon-star'></i>收藏</button></div></div></li>"
					}
					_element.render('book');
				}
			}
			else{
				str += "<div style='text-align:center;'><span  style=' font-size:60px;text-align:center;'>未找到该图书</span></div>";
				_element.render('book');
			}
			$("#book").html(str);
		});
	};
    $(function(){
    	init();
    	$(document).ready(function () {
    	     if(location.href.indexOf("")==-1){
    	        location.href=location.href;
    	        location.reload();
    	    }
    	 })
    });
})