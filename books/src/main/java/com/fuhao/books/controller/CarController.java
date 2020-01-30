package com.fuhao.books.controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.fuhao.books.common.BaseController;
import com.fuhao.books.common.GlobalConstants;
import com.fuhao.books.domain.Car;
import com.fuhao.books.domain.JsonResult;
import com.fuhao.books.service.CarService;

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
@RequestMapping("/car")
public class CarController extends BaseController{

	@Autowired
	private CarService carService;
	
	@PostMapping("/addCar")
	public JsonResult<Car> addCar(Car car){
		Date create_time = new Date();
		car.setCreateTime(create_time);
		if (carService.saveOrUpdate(car)) {
			return jr(GlobalConstants.SUCCESS, "加入购物车成功");
		}
		return jr(GlobalConstants.ERROR, "加入购物车失败");	
	} 
}
