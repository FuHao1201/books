package com.fuhao.books.domain;
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
public class Car implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 购物车编号
     */
    @TableId(value = "id", type = IdType.AUTO)
    private String id;

    /**
     * 图书编号
     */
    private String bookId;

    /**
     * 用户编号
     */
    private String userId;

    /**
     * 加入数量
     */
    private Integer bookNum;

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
