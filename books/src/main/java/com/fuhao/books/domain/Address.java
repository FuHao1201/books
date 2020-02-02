package com.fuhao.books.domain;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;

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
 * @since 2020-01-19
 */
@Data
public class Address implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 收获地址id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private String id;

    /**
     * 用户id
     */
    private String userId;

    /**
     * 收件人
     */
    private String name;
    
    /**
     * 邮政编码
     */
    private String postCode;

    /**
     * 收件人电话
     */
    private String phone;

    /**
     * 收货地址
     */
    private String address;

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
