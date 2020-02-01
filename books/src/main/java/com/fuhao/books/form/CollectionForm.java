package com.fuhao.books.form;

import java.math.BigDecimal;
import java.util.Date;

import com.fuhao.books.domain.Collection;

import lombok.Data;

@Data
public class CollectionForm extends Collection{

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
    
    /**
     * 作者
     */
    private String author;
    
    /**
     * 简介
     */
    private String synopsis;

}
