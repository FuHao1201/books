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

	List<Book> getBookType();

	List<Book> listBytype(Book book);

}
