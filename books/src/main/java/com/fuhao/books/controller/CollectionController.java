package com.fuhao.books.controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.fuhao.books.common.BaseController;
import com.fuhao.books.common.GlobalConstants;
import com.fuhao.books.domain.Collection;
import com.fuhao.books.domain.JsonResult;
import com.fuhao.books.service.CollectionService;

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
@RequestMapping("/collection")
public class CollectionController extends BaseController{

	@Autowired
	private CollectionService collectionService;
	
	@PostMapping("/addCollection")
	public JsonResult<Collection> addCollection(Collection collection){
		Date create_time = new Date();
		collection.setCreateTime(create_time);
		if (collectionService.saveOrUpdate(collection)) {
			return jr(GlobalConstants.SUCCESS, "收藏成功");
		}
		return jr(GlobalConstants.ERROR, "收藏失败");	
	}
}
