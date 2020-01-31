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

	List<CarForm> listByUserId(CarForm car);

	boolean removeByBookId(Car car);

}
