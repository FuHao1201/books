package com.fuhao.books.dao;

import com.fuhao.books.domain.Book;

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

	List<Book> getBookType();

	List<Book> listBytype(@Param("book")Book book);

}
