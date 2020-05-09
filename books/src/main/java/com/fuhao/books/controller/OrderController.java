package com.fuhao.books.controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fuhao.books.common.BaseController;
import com.fuhao.books.common.GlobalConstants;
import com.fuhao.books.domain.Address;
import com.fuhao.books.domain.JsonResult;
import com.fuhao.books.domain.Order;
import com.fuhao.books.service.OrderService;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

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
	 * 保存
	 * @param user 表单参数
	 * @return json
	 */
	@PostMapping("/save")
	@ResponseBody
	public JsonResult<Order> saveOrUpdate(Order order) {
		if (order.getId() == null || order.getId() == "") {
			Date create_time = new Date();
			order.setCreateTime(create_time);
			if (orderService.saveOrUpdate(order)) {
				return jr(GlobalConstants.SUCCESS, "新增成功");
			}
		} else {
			Date update_time = new Date();
			order.setUpdateTime(update_time);
			if (orderService.saveOrUpdate(order)) {
				return jr(GlobalConstants.SUCCESS, "修改成功");
			}
		}
		return jr(GlobalConstants.ERROR, "保存失败");
	}
}
