package com.fuhao.books.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.fuhao.books.common.BaseController;
import com.fuhao.books.common.GlobalConstants;
import com.fuhao.books.domain.Book;
import com.fuhao.books.domain.JsonResult;
import com.fuhao.books.form.BookForm;
import com.fuhao.books.service.BookService;

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
@RequestMapping("/book")
public class BookController extends BaseController{

	@Autowired
	private BookService bookService;
	
	/**
	 * 跳转图书有关的界面
	 * @param html 界面名
	 * @param id 图书id
	 * @param bookType 图书类型
	 * @param model 参数
	 * @return 界面
	 */
	@GetMapping("/books/{html}")
	public ModelAndView views(@PathVariable String html,String id,String bookId,String userId,String bookType,ModelMap model) {
		if(html.equals("book_update")) {
			model.put("id", id);
	        return view("books/"+html,model);
		}if (html.equals("book_list_type")) {
			model.put("bookType", bookType);
			System.out.println(model);
			return view("books/"+html,model);
		}if (html.equals("book_detail")) {
			model.put("bookId", bookId);
			model.put("userId", userId);
			return view("books/"+html,model);
		}
		return view("books/"+html);
	}
	
	/**
	 * 查询所有的图书信息
	 * @param book 查询的表单参数
	 * @return json
	 */
	@GetMapping("/list")
	@ResponseBody
	public JsonResult<List<BookForm>> list(BookForm book){
		List<BookForm> list = bookService.listAll(book);
		if (list != null) { 
			return jr("0","查询成功",list); 
			}
		return jr(GlobalConstants.ERROR,"未找到资源");	
	}
	
	/**
	 * 查询图书信息
	 * @param id 图书id
	 * @return json
	 */
	@GetMapping("/get")
	@ResponseBody
	public JsonResult<Book> get(String id){
		Book book = bookService.getById(id);
		if (book != null) { 
			return jr("0","查询成功",book); 
			}
		return jr(GlobalConstants.ERROR,"未找到资源");	
	}
	
	/**
	 * 保存
	 * @param book 表单参数
	 * @return json
	 */
	@PostMapping("/save")
	@ResponseBody
	public JsonResult<Book> saveOrUpdate(Book book) {
		if (book.getId() == null || book.getId() == "") {
			Date create_time = new Date();
			book.setCreateTime(create_time);
			if (bookService.saveOrUpdate(book)) {
				return jr(GlobalConstants.SUCCESS, "新增成功");
			}
		} else {
			Date update_time = new Date();
			book.setUpdateTime(update_time);
			if (bookService.saveOrUpdate(book)) {
				return jr(GlobalConstants.SUCCESS, "修改成功");
			}
		}
		return jr(GlobalConstants.ERROR, "保存失败");
	}
	
	/**
	 * 删除
	 * @param ids 图书id
	 * @return json
	 */
	@PostMapping("/remove")
	public JsonResult<Book> remove(@NotNull @RequestParam(value = "ids[]") String[] ids){
		//System.out.println();
		if(bookService.removeByIds(Arrays.asList(ids))) {
			return jr(GlobalConstants.SUCCESS, "删除成功");
		}
		return jr(GlobalConstants.ERROR, "删除失败");
	}
	
	/**
	 * 查询图书类型
	 * @return json
	 */
	@GetMapping("/getBookType")
	public JsonResult<List<Book>> getBookType(){
		List<Book> list = bookService.getBookType();
		if (list != null) { 
			return jr(GlobalConstants.SUCCESS,"查询成功",list); 
			}
		return jr(GlobalConstants.ERROR,"未找到资源");	
	}
	
	/**
	 * 根据图书类型查询图书列表
	 * @param book 查询的表单参数
	 * @return json
	 */
	@PostMapping("/listBytype")
	@ResponseBody
	public JsonResult<List<Book>> listBytype(Book book){
		List<Book> book1 = bookService.listBytype(book);
		if (book1 != null) { 
			return jr(GlobalConstants.SUCCESS,"查询成功",book1); 
			}
		return jr(GlobalConstants.ERROR,"未找到资源");	
	}
}
