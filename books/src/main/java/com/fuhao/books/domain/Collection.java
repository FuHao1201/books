package com.fuhao.books.domain;
import com.baomidou.mybatisplus.annotation.IdType;
import java.time.LocalDateTime;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;

import lombok.Data;

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
public class Collection implements Serializable {

	private static final long serialVersionUID = 1L;

    /**
     * 收藏id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 图书id
     */
    private Integer bookId;

    /**
     * 用户id
     */
    private Integer userId;

    /**
     * 创建时间
     */
//    @DateTimeFormat(pattern="yyyy-MM-dd")//页面写入数据库时格式化
//    @JSONField(format="yyyy-MM-dd")//数据库导出页面时json格式化
    private Date createTime;
    
    /**
     * 逻辑删除字段
     */
    @TableLogic
    private Integer logicDeleteFlag;
}
