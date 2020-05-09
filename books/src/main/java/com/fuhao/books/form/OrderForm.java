package com.fuhao.books.form;

import java.math.BigDecimal;

import com.fuhao.books.domain.Order;

import lombok.Data;

@Data
public class OrderForm extends Order{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

    /**
     * 收件人姓名
     */
    private String name;

    /**
     * 邮政编码
     */
    private Integer postCode;

    /**
     * 收件人电话
     */
    private String phone;

    /**
     * 收货地址
     */
    private String address;
    
    /**
     * 图书名
     */
    private String bookName;
    
    /**
     * 图书图片
     */
    private String bookPictures;
    
    /**
     * 图书类型
     */
    private String bookType;
    
    /**
     * 图书单价
     */
    private BigDecimal price;
    
    /**
     * 作者
     */
    private String author;
    
    /**
     * 出版社
     */
    private String publishingHouse;
}
