package com.fuhao.books.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fuhao.books.common.BaseController;
import com.fuhao.books.common.GlobalConstants;
import com.fuhao.books.domain.JsonResult;
import com.fuhao.books.domain.User;
import com.fuhao.books.service.UserService;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author FuHao
 * @since 2020-01-14
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
	public String index() {
		return "index";
	}
	@GetMapping("/login_view")
	public String login() {
		return "login";
	}
	
	@GetMapping("/users/{html}")
	public ModelAndView views(@PathVariable String html,String id,ModelMap model) {
		if(html == "user_update") {
			model.put("id", id);
			System.out.println(id);
	        return view("users/"+html,model);
		}
		return view("users/"+html);
	}
	
	@PostMapping("/login")
    public String login(HttpServletResponse response, User user) {
		User user1 = userService.login(user);
		if(user1 != null) {
			if (user1.getPassword().equals(user.getPassword())) {
				System.out.println("111");
				return "redirect:index";
			}
		}
		return "login";
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
}
