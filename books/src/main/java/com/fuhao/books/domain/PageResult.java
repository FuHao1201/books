package com.fuhao.books.domain;

import java.io.Serializable;
import java.util.List;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
public class PageResult<T> implements Serializable{

	   private static final long serialVersionUID = -5110055108252942454L;

	    /**总页数*/
	    private long total;

	    /**数据*/
	    private List<T> data;

	    /**状态码*/
	    private Object code;

	    /**错误信息*/
	    private String message;

//	    public PageResult(IPage<T> page){
//	        this("SUCCESS", page);
//	    }
//
//	    public PageResult(Object code, IPage<T> page){
//	        this(code, "", page);
//	    }
//
//	    public PageResult(Object code, String message, IPage<T> page){
//	        this.total = page.getTotal();
//	        this.data = page.getRecords();
//	        this.code = code;
//	        this.message = message;
//	    }
}
