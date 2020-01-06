package com.fuhao.books.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fuhao.books.dao.OrderDao;
import com.fuhao.books.service.OrderSevice;

@Service
public class OrderServiceImpl implements OrderSevice{

	@Autowired
	private OrderDao orderDao;
}
