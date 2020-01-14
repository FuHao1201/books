package com.fuhao.books.domain;
import java.math.BigDecimal;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import java.time.LocalDateTime;
import java.sql.Blob;
import java.io.Serializable;
/**
 * <p>
 * 
 * </p>
 *
 * @author FuHao
 * @since 2020-01-14
 */
public class Book implements Serializable {

    private static final long serialVersionUID = 1L;

    /**
     * 图书编号
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 图书名
     */
    private String bookName;

    /**
     * 图书图片
     */
    private Blob bookPictures;

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
     * 简介
     */
    private String synopsis;

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

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public Blob getBookPictures() {
        return bookPictures;
    }

    public void setBookPictures(Blob bookPictures) {
        this.bookPictures = bookPictures;
    }

    public String getBookType() {
        return bookType;
    }

    public void setBookType(String bookType) {
        this.bookType = bookType;
    }

    public Integer getBookNum() {
        return bookNum;
    }

    public void setBookNum(Integer bookNum) {
        this.bookNum = bookNum;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getSynopsis() {
        return synopsis;
    }

    public void setSynopsis(String synopsis) {
        this.synopsis = synopsis;
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
        return "Book{" +
        ", id=" + id +
        ", bookName=" + bookName +
        ", bookPictures=" + bookPictures +
        ", bookType=" + bookType +
        ", bookNum=" + bookNum +
        ", price=" + price +
        ", author=" + author +
        ", synopsis=" + synopsis +
        ", createTime=" + createTime +
        ", updateTime=" + updateTime +
        "}";
    }
}
