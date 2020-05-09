package com.fuhao.books.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fuhao.books.common.BaseController;
import com.fuhao.books.common.GlobalConstants;
import com.fuhao.books.domain.JsonResult;
import com.fuhao.books.domain.Order;
import com.fuhao.books.form.BuyForm;
import com.fuhao.books.form.OrderForm;
import com.fuhao.books.service.OrderService;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author FuHao
 * @since 2020-01-19
 */
@Controller
@RequestMapping("/order")
public class OrderController extends BaseController{

	@Autowired
	private OrderService orderService;

	/**
	 * 跳转与订单有关的界面
	 * @param html 界面名
	 * @param userId 用户id
	 * @param model 参数
	 * @return 界面
	 */
	@GetMapping("/orders/{html}")
	public ModelAndView views(@PathVariable String html,String userId,ModelMap model) {
		if (html.equals("order_list")) {
			model.put("userId", userId);
			return view("orders/"+html,model);
		}
		return view("orders/"+html);
	}
	
	/**
	 * 新增订单
	 * @param user 表单参数
	 * @return json
	 */
	@PostMapping("/addOrder")
	@ResponseBody
	public JsonResult<Order> addOrder(Order order) {
		Date create_time = new Date();
		order.setCreateTime(create_time);
		System.out.println("ccc"+order);
		if (orderService.addOrder(order)) {
			return jr(GlobalConstants.SUCCESS, "新增成功");
		}
		return jr(GlobalConstants.ERROR, "保存失败");
	}
	
	/**
	 * 根据用户id查询订单
	 * @param order 参数
	 * @return json
	 */
	@GetMapping("/listByUserId")
	public JsonResult<List<OrderForm>> buy_list(OrderForm order){
		List<OrderForm> list = orderService.listByUserId(order);
		if (list != null) {
			return jr("0","查询成功",list); 
			}
		return jr(GlobalConstants.ERROR,"未找到资源");	
	}
}
