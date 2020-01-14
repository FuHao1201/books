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
 * @since 2020-01-14
 */
public class Car implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 购物车编号
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
     * 加入数量
     */
    private Integer bookNum;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;

    /**
     * 修改时间
     */
    private LocalDateTime updateTime;

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

    public LocalDateTime getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(LocalDateTime updateTime) {
        this.updateTime = updateTime;
    }

    @Override
    public String toString() {
        return "Car{" +
        ", id=" + id +
        ", bookId=" + bookId +
        ", userId=" + userId +
        ", bookNum=" + bookNum +
        ", createTime=" + createTime +
        ", updateTime=" + updateTime +
        "}";
    }
}
