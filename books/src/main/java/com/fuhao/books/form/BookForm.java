package com.fuhao.books.form;

import com.fuhao.books.domain.Book;

import lombok.Data;

@Data
public class BookForm extends Book{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	/**
	 * 数量
	 */
	private long count;
	
	/**
	 * 每页数量
	 */
	private int size;
	
	/**
	 * 页码
	 */
	private int page;

}
