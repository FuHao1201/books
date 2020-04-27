package com.fuhao.books.dao;

import com.fuhao.books.domain.User;
import com.fuhao.books.form.UserForm;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author FuHao
 * @since 2020-01-19
 */
public interface UserDao extends BaseMapper<User> {

	/**
	 * 登录
	 * @param user 参数
	 * @return 用户信息
	 */
	User login(@Param("user")User user);

	/**
	 * 用户列表
	 * @param user 查询的表单参数
	 * @param page 分页
	 * @param limit 每页的数据
	 * @return
	 */
//	List<User> listAll(@Param("user")User user, int page, int limit , int count);

	/**
	 * 
	 * @param user
	 * @return
	 */
	List<UserForm> listAll(@Param("user")UserForm user);

	UserForm getCount(@Param("user")User user);

}
