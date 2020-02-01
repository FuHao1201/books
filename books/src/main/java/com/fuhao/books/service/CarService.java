package com.fuhao.books.service;

import com.fuhao.books.domain.Car;
import com.fuhao.books.form.CarForm;

import java.util.List;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author FuHao
 * @since 2020-01-19
 */
public interface CarService extends IService<Car> {

	/**
	 * 根据用户id查询购物车列表
	 * @param car 查询的表单参数
	 * @return 购物车集合
	 */
	List<CarForm> listByUserId(CarForm car);

	/**
	 * 删除
	 * @param car 参数
	 * @return
	 */
	boolean removeByBookId(Car car);

}
