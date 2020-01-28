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
public class User implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 用户编号
     */
    @TableId(value = "id", type = IdType.AUTO)
    private String id;

    /**
     * 用户头像
     */
    private String head;

    /**
     * 用户登录名
     */
    private String loginname;

    /**
     * 用户姓名
     */
    private String name;

    /**
     * 用户密码
     */
    private String password;

    /**
     * 用户身份
     */
    private String status;

    /**
     * 用户性别
     */
    private String sex;

    /**
     * 身份证号
     */
    private String identity;

    /**
     * 电话号码
     */
    private String phone;

    /**
     * 逻辑删除字段
     */
    @TableLogic
    private Integer logicDeleteFlag;

    /**
     * 创建时间
     */
    private Date createTime;

    /**
     * 修改时间
     */
    private Date updateTime;
}
