package com.fuhao.books.service;

import com.fuhao.books.domain.Book;

import java.util.List;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author FuHao
 * @since 2020-01-19
 */
public interface BookService extends IService<Book> {

	/**
	 * 查询图书类型
	 * @return 图书类型集合
	 */
	List<Book> getBookType();

	/**
	 * 根据图书类型查询图书列表
	 * @param book 查询的表单参数
	 * @return 图书集合
	 */
	List<Book> listBytype(Book book);

}
