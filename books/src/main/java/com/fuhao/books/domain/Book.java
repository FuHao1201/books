package com.fuhao.books.domain;
import java.math.BigDecimal;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;

import lombok.Data;

import java.util.Date;
import java.io.Serializable;
/**
 * <p>
 * 
 * </p>
 *
 * @author FuHao
 * @since 2020-01-19
 */
@Data
public class Book implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 图书编号
     */
    @TableId(value = "id", type = IdType.AUTO)
    private String id;

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
     * 图书数量
     */
    private Integer bookNum;

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
    
    /**
     * 出版时间
     */
    private Date publicationTime;
    
    /**
     * 简介
     */
    private String synopsis;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 修改时间
     */
    private Date updateTime;

    /**
     * 逻辑删除字段
     */
    @TableLogic
    private Integer logicDeleteFlag;
}
