package com.fuhao.books.domain;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;
import java.io.Serializable;
/**
 * <p>
 * 
 * </p>
 *
 * @author FuHao
 * @since 2020-01-14
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
    private String bookNum;

    /**
     * 下单时间
     */
    private Date createTime;

    /**
     * 逻辑删除字段
     */
    private String logicDeleteFlag;

}
