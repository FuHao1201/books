package com.fuhao.books.form;

import com.fuhao.books.domain.User;

import lombok.Data;

@Data
public class UserForm extends User{

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
	private int current;
	
	/**
	 * 总数
	 */
	private int total;
}
