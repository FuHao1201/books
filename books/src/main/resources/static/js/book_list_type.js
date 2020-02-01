/** 
  * 图书列表 
  */ 


layui.use(['form' ,'table' ,'layer','element', 'flow'], function() { 
	var $ = layui.$; 
    var _table = layui.table,_form = layui.form,_layer= layui.layer,_element = layui.element,_flow = layui.flow;
    _flow.lazyimg(); 
    function init() {
    	var bookType=$("#bookType").val();
    	var str = "";
    	str += "<a>主页</a><a><cite>图书分类</cite></a><a><cite>"+bookType+"</cite></a>";
    	_element.render('breadcrumb');
    	$("#breadcrumb").html(str);
    	getBooks(bookType);
    	$("#book").delegate(".AddCar","click",function(data){//加入购物车点击
    		console.log(data.currentTarget.id)
    		var json={
    			bookId:data.currentTarget.id,
    			userId:1
    		}
    		addCar(json);
    	});
    	$("#book").delegate(".AddCollection","click",function(data){//收藏点击
    		var json={
        			bookId:data.currentTarget.id,
        			userId:1
        	}
    		addCollection(json);
    	});
    	_element.on('tab(book)', function(data){
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
					//str += "<li><div class='layui-col-md2'><a title='老人与海(温暖插画纪念版)'><img src='http://image12.bookschina.com/2019/20191128/1/s7663892.jpg' alt='老人与海(温暖插画纪念版)' data-original='http://image12.bookschina.com/2019/20191128/1/s7663892.jpg' class='lazyImg'></a></div><div class='layui-col-md9'><h2><a onclick='' style='color: blue;'>老人与海(温暖插画纪念版)</a></h2><div><a>[美]厄尼斯特·海明威 著,何超/王鹏 译,宋晓宇 绘</a><i>&nbsp;&nbsp;/&nbsp;&nbsp;</i><span class='pulishTiem' title='出版时间'>2015-08-01&nbsp;&nbsp;/&nbsp;&nbsp;</span><a>石油工业出版社</a></div><div><span class='' style='color: red; font-size: 26px;'>¥34.8</span></div><p style='height: 100px;'>简介</p><div><button onclick='AddCar' class='layui-btn layui-bg-red'><i class='layui-icon layui-icon-cart'></i>加入购物车</button><button onclick='AddCollection' class='layui-btn'><i class='layui-icon layui-icon-star'></i>收藏</button></div></div></li>";                               
					if(res.data.length < 3){
						str += "<li style='height: 250px;'><div class='layui-col-md2'><a title="+res.data[i].bookName+"><img src="+res.data[i].bookPictures+" alt="+res.data[i].bookName+"></a></div><div class='layui-col-md9'><h2><a onclick='' style='color: blue;'>"+res.data[i].bookName+"</a></h2><div><span>"+res.data[i].author+"</span><i>&nbsp;&nbsp;/&nbsp;&nbsp;</i><span title='出版时间'>"+time+"&nbsp;&nbsp;/&nbsp;&nbsp;</span><span>"+res.data[i].publishingHouse+"</span></div><div><span style='color: red; font-size: 26px;'>¥"+res.data[i].price+"</span></div><p style='height: 100px;'>"+res.data[i].synopsis+"</p><div><button id="+res.data[i].id+" class='AddCar layui-btn layui-bg-red'><i class='layui-icon layui-icon-cart'></i>加入购物车</button><button id="+res.data[i].id+" class='AddCollection layui-btn'><i class='layui-icon layui-icon-star'></i>收藏</button></div></div></li>"
					}else{
						str += "<li style='height: 250px;'><div class='layui-col-md2'><a title="+res.data[i].bookName+"><img lay-src="+res.data[i].bookPictures+" alt="+res.data[i].bookName+"></a></div><div class='layui-col-md9'><h2><a onclick='' style='color: blue;'>"+res.data[i].bookName+"</a></h2><div><span>"+res.data[i].author+"</span><i>&nbsp;&nbsp;/&nbsp;&nbsp;</i><span title='出版时间'>"+time+"&nbsp;&nbsp;/&nbsp;&nbsp;</span><span>"+res.data[i].publishingHouse+"</span></div><div><span style='color: red; font-size: 26px;'>¥"+res.data[i].price+"</span></div><p style='height: 100px;'>"+res.data[i].synopsis+"</p><div><button id="+res.data[i].id+" class='AddCar layui-btn layui-bg-red'><i class='layui-icon layui-icon-cart'></i>加入购物车</button><button id="+res.data[i].id+" class='AddCollection layui-btn'><i class='layui-icon layui-icon-star'></i>收藏</button></div></div></li>"
					}
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
    $(function() {
    	init();
	});
}) 
