package com.fuhao.books.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.fuhao.books.common.BaseController;
import com.fuhao.books.common.GlobalConstants;
import com.fuhao.books.domain.Book;
import com.fuhao.books.domain.Car;
import com.fuhao.books.domain.JsonResult;
import com.fuhao.books.form.CarForm;
import com.fuhao.books.service.CarService;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;

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
	
	@GetMapping("/cars/{html}")
	public ModelAndView views(@PathVariable String html,String id,String bookType,ModelMap model) {
		if(html.equals("car_list")) {
			String userId = "1";
			model.put("userId", userId);
	        return view("cars/"+html,model);
		}
		return view("cars/"+html);
	}
	
	@GetMapping("/car_list")
	public JsonResult<List<CarForm>> car_list(CarForm car){
		car.setUserId(1);
		List<CarForm> list = carService.listByUserId(car);
		if (list != null) {
			System.out.println(list);
			return jr("0","查询成功",list); 
			}
		return jr(GlobalConstants.ERROR,"未找到资源");	
	}
	
	@PostMapping("/addCar")
	public JsonResult<Car> addCar(Car car){
		Date create_time = new Date();
		car.setCreateTime(create_time);
		if (carService.saveOrUpdate(car)) {
			return jr(GlobalConstants.SUCCESS, "加入购物车成功");
		}
		return jr(GlobalConstants.ERROR, "加入购物车失败");	
	}
	
	@PostMapping("/remove")
	public JsonResult<Car> remove(Car car){
		System.out.println(car);
		if(carService.removeByBookId(car)) {
			return jr(GlobalConstants.SUCCESS, "删除成功");
		}
		return jr(GlobalConstants.ERROR, "删除失败");
	}
}
