/*
 * 订单
 */		
layui.use(['form' ,'layer','table'], function() {
	var _form = layui.form,_layer = layui.layer,_table = layui.table; 
    var $ = layui.$;
    function init(){
    	var userId = $("#userId").val();
/*    	getOrder(userId);*/
    	// 工具栏监听
	    _table.on('tool(order)', function(obj){
            var event = obj.event;
	    	var data = obj.data;
            if(event == 'reload') {
            	obj = {page: 1}; //查询从首页开始
            	reload();
            }
            if(event == 'detail'){
            	detail(data.id);
            }
            if(event == 'remove'){
            	remove(data.id);
            }
	    });
	    _table.on('tool(recovery)', function(obj){
            var event = obj.event;
	    	var data = obj.data;
            if(event == 'reload') {
            	obj = {page: 1}; //查询从首页开始
            	reload();
            }
            if(event == 'reBack'){
            	reBack(data.id);
            }
	    });
	  //表头排序监听
		_table.on('sort(order)',function(obj){   
            reload();
        });
		_form.on('submit(SearchForm)', function(data){
			  var condition = {where : data.field, page : 1};
			  _table.reload('order',{
				  page: false
		  		  ,where: {
		  			  bookName : data.field.bookName,
		  		  	}
		  		  });
			  return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
		});
		$("#recoveryShow").click(function(){
			$("#orderList").hide();
			$("#recoveryList").show(); 
		});
    };
/*    function getOrder(userId){
    	$.get("/order/listByUserId",{userId : userId},function(res){
    		console.log(res)
    	})
    }; */
	function remove(id) { //单个删除
		_layer.confirm('确认是否删除？', {
			  btn: ['确认','取消'] //按钮
			}, function(){
				$.post("/order/remove", {id : id}, function(res){
					var msg = res.message;
					if(res.code == "SUCCESS"){
						_layer.msg(msg, {icon: 1});
						_table.reload('order');
						_table.reload('recovery');
					}
					if(res.code == "ERROR"){
						_layer.msg(msg, {icon: 2});
					}
				})
			}, function(){
				_layer.close();
			});
	};
	function reBack(id) { //还原
		_layer.confirm('确认是否还原？', {
			  btn: ['确认','取消'] //按钮
			}, function(){
				$.post("/order/reBack", {id : id}, function(res){
					var msg = res.message;
					if(res.code == "SUCCESS"){
						_layer.msg(msg, {icon: 1});
						_table.reload('order');
						_table.reload('recovery');
					}
					if(res.code == "ERROR"){
						_layer.msg(msg, {icon: 2});
					}
				})
			}, function(){
				_layer.close();
			});
	};
	function detail(id) { //详情
		_layer.open({
			title : "订单详情",
			type : 2,
			area: ['500px', '400px'],
			content : '/order/orders/order_detail?id='+ id
		});
	};
    $(function(){
    	var userId=$("#userId").val();
    	_table.init('order', {
    		url:'/order/listByUserId/?userId='+userId
    		});
    	_table.init('recovery', {
    		url:'/order/recoveryList/?userId='+userId
    		});
	   	init();
	});
})
//时间转换函数
function showTime(tempDate)
{
	if(tempDate == null){
		return '';
	}
		var d = new Date(tempDate); 
		var year = d.getFullYear();
		var month = d.getMonth();
		month++;
		var day = d.getDate();
		var hours = d.getHours();
		var minutes = d.getMinutes();
		var seconds = d.getSeconds();
		month = month<10 ? "0"+month:month;
		day = day<10 ? "0"+day:day;
		hours = hours<10 ? "0"+hours:hours;
		minutes = minutes<10 ? "0"+minutes:minutes;
		seconds = seconds<10 ? "0"+seconds:seconds;
		var time = year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
		return time;
};