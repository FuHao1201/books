package com.fuhao.books.controller;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.fuhao.books.common.BaseController;
import com.fuhao.books.common.GlobalConstants;
import com.fuhao.books.domain.Car;
import com.fuhao.books.domain.JsonResult;
import com.fuhao.books.form.CarForm;
import com.fuhao.books.service.CarService;

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
	
	/**
	 * 跳转购物车有关界面
	 * @param html 界面名
	 * @param userId 用户id
	 * @param model 参数
	 * @return 界面
	 */
	@GetMapping("/cars/{html}")
	public ModelAndView views(@PathVariable String html,String userId,ModelMap model) {
		if(html.equals("car_list")) {
			userId = "1";
			model.put("userId", userId);
	        return view("cars/"+html,model);
		}
		return view("cars/"+html);
	}
	
	/**
	 * 查询购物车列表
	 * @param car 查询的表单参数
	 * @return json
	 */
	@GetMapping("/car_list")
	public JsonResult<List<CarForm>> car_list(CarForm car){
		List<CarForm> list = carService.listByUserId(car);
		if (list != null) {
			System.out.println(list);
			return jr("0","查询成功",list); 
			}
		return jr(GlobalConstants.ERROR,"未找到资源");	
	}
	
	/**
	 * 加入购物车
	 * @param car 参数
	 * @return json
	 */
	@PostMapping("/addCar")
	public JsonResult<Car> addCar(Car car){
		Date create_time = new Date();
		car.setCreateTime(create_time);
		if (carService.saveOrUpdate(car)) {
			return jr(GlobalConstants.SUCCESS, "加入购物车成功");
		}
		return jr(GlobalConstants.ERROR, "加入购物车失败");	
	}
	
	/**
	 * 删除
	 * @param car 参数
	 * @return json
	 */
	@PostMapping("/remove")
	public JsonResult<Car> remove(Car car){
		System.out.println(car);
		if(carService.removeByBookId(car)) {
			return jr(GlobalConstants.SUCCESS, "删除成功");
		}
		return jr(GlobalConstants.ERROR, "删除失败");
	}
}
