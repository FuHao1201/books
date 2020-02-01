package com.fuhao.books.dao;

import com.fuhao.books.domain.User;

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
public interface UserDao extends BaseMapper<User> {

	/**
	 * 登录
	 * @param user 参数
	 * @return 用户信息
	 */
	User login(@Param("user")User user);

}
