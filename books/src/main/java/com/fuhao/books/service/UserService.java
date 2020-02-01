package com.fuhao.books.service;

import com.fuhao.books.domain.User;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author FuHao
 * @since 2020-01-19
 */
public interface UserService extends IService<User> {

	/**
	 * 登录
	 * @param user 查询的表单参数
	 * @return 用户信息
	 */
	User login(User user);

}
