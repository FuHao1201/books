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
import com.fuhao.books.domain.Collection;
import com.fuhao.books.domain.JsonResult;
import com.fuhao.books.form.CollectionForm;
import com.fuhao.books.service.CollectionService;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author FuHao
 * @since 2020-01-19
 */
@Controller
@RequestMapping("/collection")
public class CollectionController extends BaseController{

	@Autowired
	private CollectionService collectionService;
	
	/**
	 * 跳转与收藏有关的界面
	 * @param html 界面名
	 * @param userId 用户id
	 * @param model 参数
	 * @return 界面
	 */
	@GetMapping("/collections/{html}")
	public ModelAndView views(@PathVariable String html,String userId,ModelMap model) {
		if (html.equals("collection_list")) {
			userId = "1";
			model.put("userId", userId);
			return view("collections/"+html,model);
		}
		return view("collections/"+html);
	}
	
	/**
	 * 添加收藏
	 * @param collection 参数
	 * @return json
	 */
	@PostMapping("/addCollection")
	public JsonResult<Collection> addCollection(Collection collection){
		Date create_time = new Date();
		collection.setCreateTime(create_time);
		if (collectionService.saveOrUpdate(collection)) {
			return jr(GlobalConstants.SUCCESS, "收藏成功");
		}
		return jr(GlobalConstants.ERROR, "收藏失败");	
	}
	
	/**
	 * 收藏查询
	 * @param collection 查询的表单参数
	 * @return json
	 */
	@GetMapping("/collection_list")
	public JsonResult<List<CollectionForm>> collection_list(CollectionForm collection){
//		System.out.println(collection.getUserId());
		List<CollectionForm> list = collectionService.listByUserId(collection);
		if (list != null) {
			return jr("0","查询成功",list); 
		}
		return jr(GlobalConstants.ERROR,"未找到资源");	
	}
	
	/**
	 * 删除
	 * @param collection 参数
	 * @return json
	 */ 
	@PostMapping("/remove")
	public JsonResult<Collection> remove(Collection collection){
		if(collectionService.removeByBookId(collection)) {
			return jr(GlobalConstants.SUCCESS, "删除成功");
		}
		return jr(GlobalConstants.ERROR, "删除失败");
	}
}
