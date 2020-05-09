package com.fuhao.books.service.impl;

import com.fuhao.books.domain.Order;
import com.fuhao.books.form.OrderForm;
import com.fuhao.books.dao.OrderDao;
import com.fuhao.books.service.OrderService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author FuHao
 * @since 2020-05-09
 */
@Service
public class OrderServiceImpl extends ServiceImpl<OrderDao, Order> implements OrderService {

	@Autowired
	private OrderDao orderDao;

	@Override
	public boolean addOrder(Order order) {
		return orderDao.addOrder(order);
	}

	@Override
	public List<OrderForm> listByUserId(OrderForm order) {
		return orderDao.listByUserId(order);
	}
}
