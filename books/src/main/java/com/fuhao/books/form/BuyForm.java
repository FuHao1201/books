package com.fuhao.books.form;

import java.math.BigDecimal;

import com.fuhao.books.domain.Buy;

import lombok.Data;

@Data
public class BuyForm extends Buy{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;	
	
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
}
