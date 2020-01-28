package com.fuhao.books.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.annotation.JsonView;
import com.fuhao.books.common.BaseController;
import com.fuhao.books.common.GlobalConstants;
import com.fuhao.books.domain.JsonResult;
import com.fuhao.books.domain.User;
import com.fuhao.books.service.UserService;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;
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
@RequestMapping("/user")
public class UserController extends BaseController{

	@Autowired
	private UserService userService;
	
	@GetMapping("/main")
	public ModelAndView main() {
		return view("main");
	}
	
	@GetMapping("/index")
	public ModelAndView index(ModelMap model,String id,String loginname,String status) {
		model.put("id", id);
		model.put("loginname", loginname);
		model.put("status", status);
		System.out.println(model);
		return view("index",model);
	}
	
	@GetMapping("/login_view")
	public ModelAndView login() {
		return view("login");
	}
	
	@GetMapping("/users/{html}")
	public ModelAndView views(@PathVariable String html,String id,ModelMap model) {
		if(html.equals("user_update")) {
			model.put("id", id);
	        return view("users/"+html,model);
		}
		return view("users/"+html);
	}
	
	@PostMapping("/login")
    public JsonResult<User> login1(User user) {		
		User user1 = userService.login(user);
		if (user1 != null) {
			return jr(GlobalConstants.SUCCESS,"登录成功",user1);
		}
		return jr(GlobalConstants.ERROR,"登录名或密码错误");
    }
	
	@GetMapping("/list")
	@ResponseBody
	public JsonResult<List<User>> list(User user){
		List<User> user1 = userService.list();
		if (user1 != null) { 
			return jr("0","查询成功",user1); 
			}
		return jr(GlobalConstants.ERROR,"未找到资源");	
	}
	
	@GetMapping("/get")
	@ResponseBody
	public JsonResult<User> get(String id){
		System.out.println("222"+id);
		User user1 = userService.getById(id);
		if (user1 != null) { 
			return jr("0","查询成功",user1); 
			}
		return jr(GlobalConstants.ERROR,"未找到资源");	
	}
	
	@PostMapping("/save")
	@ResponseBody
	public JsonResult<User> saveOrUpdate(User user) {
		if (user.getId() == null || user.getId() == "") {
			Date create_time = new Date();
			user.setCreateTime(create_time);
			if (userService.saveOrUpdate(user)) {
				return jr(GlobalConstants.SUCCESS, "新增成功");
			}
		} else {
			Date update_time = new Date();
			user.setUpdateTime(update_time);
			if (userService.saveOrUpdate(user)) {
				return jr(GlobalConstants.SUCCESS, "修改成功");
			}
		}
		return jr(GlobalConstants.ERROR, "保存失败");
	}
	
	@PostMapping("/remove")
	public JsonResult<User> remove(@NotNull @RequestParam(value = "ids[]") String[] ids){
		//System.out.println();
		if(userService.removeByIds(Arrays.asList(ids))) {
			return jr(GlobalConstants.SUCCESS, "删除成功");
		}
		return jr(GlobalConstants.ERROR, "删除失败");
		
	}
}
