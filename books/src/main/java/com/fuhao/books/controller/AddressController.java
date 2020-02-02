package com.fuhao.books.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fuhao.books.common.BaseController;
import com.fuhao.books.common.GlobalConstants;
import com.fuhao.books.domain.Address;
import com.fuhao.books.domain.JsonResult;
import com.fuhao.books.domain.User;
import com.fuhao.books.service.AddressService;

import java.util.Date;
import java.util.List;

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
@RequestMapping("/address")
public class AddressController extends BaseController{

	@Autowired
	private AddressService addressService;
	
	@GetMapping("/addresses/{html}")
	public ModelAndView views(@PathVariable String html,String userId,String id,ModelMap model) {
		if(html.equals("address_add")) {
			model.put("userId", userId);
	        return view("addresses/"+html,model);
		}
		if(html.equals("address_update")) {
			model.put("id", id);
	        return view("addresses/"+html,model);
		}
		return view("addresses/"+html);
	}
	
	@GetMapping("address_list")
	public JsonResult<List<Address>> address_list(Address address){
		List<Address> list = addressService.listByUserId(address);
		if(list.get(0)!=null) {
			return jr("0","查询成功",list);
		}
		return jr(GlobalConstants.ERROR,"未找到资源");
	}
	
	@PostMapping("/remove")
	public JsonResult<Address> remove(String id){
		if(addressService.removeById(id)) {
			return jr(GlobalConstants.SUCCESS, "删除成功");
		}
		return jr(GlobalConstants.ERROR, "删除失败");
	}
	
	/**
	 * 获取收件人信息
	 * @param id 用户id
	 * @return json
	 */
	@GetMapping("/get")
	@ResponseBody
	public JsonResult<Address> get(String id){
		Address Address1 = addressService.getById(id);
		if (Address1 != null) { 
			return jr("0","查询成功",Address1); 
			}
		return jr(GlobalConstants.ERROR,"未找到资源");	
	}
	
	/**
	 * 保存
	 * @param user 表单参数
	 * @return json
	 */
	@PostMapping("/save")
	@ResponseBody
	public JsonResult<Address> saveOrUpdate(Address address) {
		if (address.getId() == null || address.getId() == "") {
			Date create_time = new Date();
			address.setCreateTime(create_time);
			if (addressService.saveOrUpdate(address)) {
				return jr(GlobalConstants.SUCCESS, "新增成功");
			}
		} else {
			Date update_time = new Date();
			address.setUpdateTime(update_time);
			if (addressService.saveOrUpdate(address)) {
				return jr(GlobalConstants.SUCCESS, "修改成功");
			}
		}
		return jr(GlobalConstants.ERROR, "保存失败");
	}
}
