package com.fuhao.books.controller;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fuhao.books.common.BaseController;
import com.fuhao.books.common.GlobalConstants;
import com.fuhao.books.domain.JsonResult;
import com.fuhao.books.domain.User;
import com.fuhao.books.service.UserService;

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
	
	/**
	 * 跳转显示界面
	 * @return 显示界面
	 */
	@GetMapping("/main")
	public ModelAndView main() {
		return view("main");
	}
	
	/**
	 * 跳转主页
	 * @param model 参数
	 * @param id 用户id
	 * @param loginname 登录名
	 * @param status 身份
	 * @return 主页
	 */
	@GetMapping("/index")
	public ModelAndView index(ModelMap model,String id,String loginname,String status) {
		model.put("id", id);
		model.put("loginname", loginname);
		model.put("status", status);
		System.out.println(model);
		return view("index",model);
	}
	
	/**
	 * 跳转登录界面
	 * @return 登录界面
	 */
	@GetMapping("/login_view")
	public ModelAndView login_view() {
		return view("login");
	}
	
	/**
	 * 跳转用户有关的界面
	 * @param html 界面名
	 * @param id 用户id
	 * @param model 参数
	 * @return 界面
	 */
	@GetMapping("/users/{html}")
	public ModelAndView views(@PathVariable String html,String id,ModelMap model) {
		if(html.equals("user_update")) {
			model.put("id", id);
	        return view("users/"+html,model);
		}if(html.equals("user_information")) {
			model.put("id", id);
	        return view("users/"+html,model);
		}
		return view("users/"+html);
	}
	
	/**
	 * 登录
	 * @param user 查询参数
	 * @return json
	 */
	@PostMapping("/login")
    public JsonResult<User> login(User user) {		
		User user1 = userService.login(user);
		if (user1 != null) {
			return jr(GlobalConstants.SUCCESS,"登录成功",user1);
		}
		return jr(GlobalConstants.ERROR,"登录名或密码错误");
    }
	
	/**
	 * 用户查询
	 * @param user 查询的表单参数
	 * @return json
	 */
	@GetMapping("/list")
	@ResponseBody
	public JsonResult<List<User>> list(User user){
		List<User> list = userService.list();
		if (list != null) { 
			return jr("0","查询成功",list); 
			}
		return jr(GlobalConstants.ERROR,"未找到资源");	
	}
	
	/**
	 * 获取用户信息
	 * @param id 用户id
	 * @return json
	 */
	@GetMapping("/get")
	@ResponseBody
	public JsonResult<User> get(String id){
		User user1 = userService.getById(id);
		if (user1 != null) { 
			return jr("0","查询成功",user1); 
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
	
	/**
	 * 删除
	 * @param ids 用户id
	 * @return json
	 */
	@PostMapping("/remove")
	public JsonResult<User> remove(@NotNull @RequestParam(value = "ids[]") String[] ids){
		//System.out.println();
		if(userService.removeByIds(Arrays.asList(ids))) {
			return jr(GlobalConstants.SUCCESS, "删除成功");
		}
		return jr(GlobalConstants.ERROR, "删除失败");
		
	}
}
