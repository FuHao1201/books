package com.fuhao.books.service.impl;

import com.fuhao.books.domain.Car;
import com.fuhao.books.form.CarForm;
import com.fuhao.books.dao.CarDao;
import com.fuhao.books.service.CarService;
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
 * @since 2020-01-19
 */
@Service
public class CarServiceImpl extends ServiceImpl<CarDao, Car> implements CarService {

	@Autowired
	private CarDao carDao;
	
	@Override
	public List<CarForm> listByUserId(CarForm car) {
		return carDao.listByUserId(car);
	}

	@Override
	public boolean removeByBookId(Car car) {
		return carDao.removeByBookId(car);
	}

}
