package com.fuhao.books.domain;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;

import lombok.Data;

import java.util.Date;
import java.io.Serializable;
import java.math.BigDecimal;
/**
 * <p>
 * 
 * </p>
 *
 * @author FuHao
 * @since 2020-02-02
 */
@Data
public class Buy implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 结算id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private String id;

    /**
     * 用户id
     */
    private String userId;

    /**
     * 图书id
     */
    private String bookId;

    /**
     * 购买数量
     */
    private Integer bookNum;
    
    /**
     * 小计
     */
    private BigDecimal sum;

    /**
     * 结算时间
     */
    private Date createTime;

    /**
     * 逻辑删除字段
     */
    @TableLogic
    private Integer logicDeleteFlag;
}
