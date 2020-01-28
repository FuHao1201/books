package com.fuhao.books.domain;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.time.LocalDateTime;
import java.io.Serializable;
/**
 * <p>
 * 
 * </p>
 *
 * @author FuHao
 * @since 2020-01-19
 */
public class Order implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 订单编号
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 图书编号
     */
    private Integer bookId;

    /**
     * 用户编号
     */
    private Integer userId;

    /**
     * 数量
     */
    private Integer bookNum;

    /**
     * 下单时间
     */
    private LocalDateTime createTime;

    /**
     * 逻辑删除字段
     */
    private Integer logicDeleteFlag;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getBookId() {
        return bookId;
    }

    public void setBookId(Integer bookId) {
        this.bookId = bookId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getBookNum() {
        return bookNum;
    }

    public void setBookNum(Integer bookNum) {
        this.bookNum = bookNum;
    }

    public LocalDateTime getCreateTime() {
        return createTime;
    }

    public void setCreateTime(LocalDateTime createTime) {
        this.createTime = createTime;
    }

    public Integer getLogicDeleteFlag() {
        return logicDeleteFlag;
    }

    public void setLogicDeleteFlag(Integer logicDeleteFlag) {
        this.logicDeleteFlag = logicDeleteFlag;
    }

    @Override
    public String toString() {
        return "Order{" +
        ", id=" + id +
        ", bookId=" + bookId +
        ", userId=" + userId +
        ", bookNum=" + bookNum +
        ", createTime=" + createTime +
        ", logicDeleteFlag=" + logicDeleteFlag +
        "}";
    }
}
