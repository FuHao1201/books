package com.fuhao.books.service;

import com.fuhao.books.domain.Collection;
import com.fuhao.books.form.CollectionForm;

import java.util.List;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author FuHao
 * @since 2020-01-19
 */
public interface CollectionService extends IService<Collection> {

	/**
	 * 根据用户id查询收藏
	 * @param collection 查询的表单参数
	 * @return 收藏集合
	 */
	List<CollectionForm> listByUserId(CollectionForm collection);

	/**
	 * 根据图书id删除收藏信息
	 * @param collection 参数
	 * @return
	 */
	boolean removeByBookId(Collection collection);

}
