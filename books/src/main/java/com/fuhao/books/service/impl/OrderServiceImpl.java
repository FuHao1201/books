package com.fuhao.books.service.impl;

import com.fuhao.books.domain.Order;
import com.fuhao.books.dao.OrderDao;
import com.fuhao.books.service.OrderService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author FuHao
 * @since 2020-01-19
 */
@Service
public class OrderServiceImpl extends ServiceImpl<OrderDao, Order> implements OrderService {

}
