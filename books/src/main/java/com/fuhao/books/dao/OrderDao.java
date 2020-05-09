package com.fuhao.books.dao;

import com.fuhao.books.domain.Order;
import com.fuhao.books.form.OrderForm;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author FuHao
 * @since 2020-05-09
 */
public interface OrderDao extends BaseMapper<Order> {

	/**
	 * 新增订单
	 * @param order 参数
	 * @return
	 */
	boolean addOrder(@Param("order")Order order);

	/**
	 * 根据用户id查询订单
	 * @param order 参数
	 * @return
	 */
	List<OrderForm> listByUserId(@Param("order")OrderForm order);

}
