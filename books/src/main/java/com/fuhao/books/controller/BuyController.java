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
import com.fuhao.books.domain.Buy;
import com.fuhao.books.domain.JsonResult;
import com.fuhao.books.form.BuyForm;
import com.fuhao.books.service.BuyService;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author FuHao
 * @since 2020-02-02
 */
@Controller
@RequestMapping("/buy")
public class BuyController extends BaseController{

	@Autowired
	private BuyService buyService;
	
	@GetMapping("/buys/{html}")
	public ModelAndView views(@PathVariable String html,String userId,ModelMap model) {
		if(html.equals("buy_list")) {
			model.put("userId", userId);
	        return view("buys/"+html,model);
		}
		return view("buys/"+html);
	}
	
	@PostMapping("/addBuy")
	public JsonResult<Buy> addBuy(Buy buy){
		Date create_time = new Date();
		buy.setCreateTime(create_time);
		if (buyService.saveOrUpdate(buy)) {
			return jr(GlobalConstants.SUCCESS, "添加结算清单成功");
		}
		return jr(GlobalConstants.ERROR, "添加结算清单失败");	
	}
	
	@GetMapping("/buy_list")
	public JsonResult<List<BuyForm>> buy_list(BuyForm buy){
		List<BuyForm> list = buyService.listByUserId(buy);
		if (list.get(0).getBookName() != "") {
			return jr("0","查询成功",list); 
			}
		return jr(GlobalConstants.ERROR,"未找到资源");	
	}
	
}
