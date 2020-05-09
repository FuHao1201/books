package com.fuhao.books.service;

import com.fuhao.books.domain.Order;
import com.fuhao.books.form.OrderForm;

import java.util.List;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author FuHao
 * @since 2020-05-09
 */
public interface OrderService extends IService<Order> {

	/**
	 * 新增订单
	 * @param order 参数
	 * @return
	 */
	boolean addOrder(Order order);

	/**
	 *根据用户id查询订单
	 * @param order 参数
	 * @return
	 */
	List<OrderForm> listByUserId(OrderForm order);

}
