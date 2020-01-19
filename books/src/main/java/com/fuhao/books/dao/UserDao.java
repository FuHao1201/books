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
 * @since 2020-01-14
 */
public interface UserDao extends BaseMapper<User> {

	User login(@Param("user")User user);

}
