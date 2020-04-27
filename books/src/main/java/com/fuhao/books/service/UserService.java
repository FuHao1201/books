package com.fuhao.books.service;

import com.fuhao.books.domain.User;
import com.fuhao.books.form.UserForm;

import java.util.List;

import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
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

	/**
	 * 用户列表
	 * @param user 查询的表单参数
	 * @param page 分页
	 * @return
	 */
	List<UserForm> listAll(UserForm user);

}
