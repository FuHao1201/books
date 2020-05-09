package com.fuhao.books.domain;
import java.math.BigDecimal;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import lombok.Data;

import java.util.Date;
import java.io.Serializable;
/**
 * <p>
 * 
 * </p>
 *
 * @author FuHao
 * @since 2020-05-09
 */
@Data
public class Order implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 订单编号
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
     * 数量
     */
    private Integer bookNum;

    /**
     * 小计
     */
    private BigDecimal sum;

    /**
     * 收货人信息id
     */
    private Integer addressId;

    /**
     * 下单时间
     */
    private Date createTime;

    /**
     * 退订时间
     */
    private Date updateTime;

    /**
     * 逻辑删除字段
     */
    private Integer logicDeleteFlag;
}
