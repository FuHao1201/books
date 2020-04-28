package com.fuhao.books.dao;

import com.fuhao.books.domain.Book;
import com.fuhao.books.form.BookForm;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author FuHao
 * @since 2020-01-19
 */
public interface BookDao extends BaseMapper<Book> {

	/**
	 * 查询图书类型
	 * @return 图书类型集合
	 */
	List<Book> getBookType();

	/**
	 * 通过图书类型查询图书列表
	 * @param book 查询的 参数
	 * @return 图书集合
	 */
	List<Book> listBytype(@Param("book")Book book);

	/**
	 * 
	 * @param book
	 * @return
	 */
	BookForm getCount(@Param("book")BookForm book);

	/**
	 * 
	 * @param book
	 * @return
	 */
	List<BookForm> listAll(@Param("book")BookForm book);

}
