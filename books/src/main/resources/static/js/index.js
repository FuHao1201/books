/** 
  * 主页 
  */ 
layui.use(['form' ,'layer' ,'element'], function() { 
    var _form = layui.form,_element = layui.element,_layer = layui.layer;
    var $ = layui.$;
    function init() {
        var userId = $("#userId").val();
    	console.log(userId)
    	if(userId != ''){
    		getMine(userId , function(){
    			console.log($("#user_information")[0])
    			$("#user_information").click(function(){
    				debugger
    			});
    		});
    	}
    	getBookType();
    };
    function getMine(userId,fn){
    	$.get("/user/get",{id:userId},function(res){
    		console.log(res)
    		var str = "";
    		if(res.data != null){
    			str += "<li class='layui-nav-item'><a class='layui-icon layui-icon-cart' href='/car/cars/car_list' target='main'>购物车</a></li>\
		      <li class='layui-nav-item'><a class='layui-icon layui-icon-star' href='/collection/collections/collection_list' target='main'>收藏</a></li>\
		      <li class='layui-nav-item'>\
		        <a href='javascript:;'>\
		          <img src='http://t.cn/RCzsdCq' class='layui-nav-img'>\
		          "+res.data.loginname+"</a>\
		        <dl class='layui-nav-child'>\
		          <dd><a href='javascript:;' id='user_information'>个人资料</a></dd>\
		          <dd><a href='javascript:;' id='changePass'>修改密码</a></dd>\
		        </dl>\
		      </li>\
		      <li class='layui-nav-item'><a href='/user/login_view'>退出</a></li>";
    		}
    		_element.render('mine');
    		$("#mine").html(str);
    		fn && fn();
    	})
    };
    function getInformation(){
    	debugger
        var userId = $("#userId").val();
    	_layer.open({
			title: '个人资料',
			type : 2,
			area: ['750px', '500px'],
			content: '/user/users/user_information/?id='+userId,
		});
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
    	init();
    	$(document).ready(function () {

    	     if(location.href.indexOf("")==-1){
    	        location.href=location.href;
    	        location.reload();
    	    }
    	 })
    });
})