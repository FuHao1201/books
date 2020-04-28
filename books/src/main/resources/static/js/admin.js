/** 
  * 管理界面 
  */ 
layui.use(['form' ,'layer','element'], function() {
	var _form = layui.form,_layer = layui.layer,_element = layui.element; 
    var $ = layui.$;
    function init(){
    	var userId = $("#userId").val();
    	if(userId != ''){
    		getMine(userId , function(){	
    			$("#userInformation").click(function(){//个人资料点击监听
    				getInformation(userId);
    			});
    			$("#changePass").click(function(){//修改密码点击监听
    				changePass(userId);
    			});
    			$("#exit").click(function(){//退出点击监听
    				exit(userId);
    			});
    		});
    	}
    };
    function getMine(userId,fn){//登录后个人信息获取
    	$.get("/user/get",{id:userId},function(res){
    		console.log(res)
    		var str = "";
    		if(res.data != null){
    			str += "<li class='layui-nav-item'>\
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
    function getInformation(userId){//个人资料
    	_layer.open({
			title: '个人资料',
			type : 2,
			area: ['400px', '350px'],
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
    $(function(){
	   	init();
	   	$(document).ready(function () {
   	     if(location.href.indexOf("")==-1){
   	    	 debugger
   	        location.href=location.href;
   	        location.reload();
   	    }
   	 })
	});
})