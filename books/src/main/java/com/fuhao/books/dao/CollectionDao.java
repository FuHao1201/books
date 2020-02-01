package com.fuhao.books.dao;

import com.fuhao.books.domain.Collection;
import com.fuhao.books.form.CollectionForm;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author FuHao
 * @since 2020-01-19
 */
public interface CollectionDao extends BaseMapper<Collection> {

	/**
	 * 通过用户id查询收藏列表
	 * @param collection 查询的参数
	 * @return 收藏集合
	 */
	List<CollectionForm> listByUserId(@Param("collection")CollectionForm collection);

	/**
	 * 通过图书id删除收藏信息
	 * @param collection 参数
	 * @return
	 */
	boolean removeByBookId(@Param("col")Collection collection);

}
