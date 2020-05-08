package com.fuhao.books.service.impl;

import com.fuhao.books.domain.User;
import com.fuhao.books.form.UserForm;
import com.fuhao.books.dao.UserDao;
import com.fuhao.books.service.UserService;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author FuHao
 * @since 2020-01-19
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserDao, User> implements UserService {

	@Autowired
	private UserDao userdao;
	
	@Override
	public User login(User user) {
		User user1 = userdao.login(user);
		if(user1 != null) {
			if (user1.getPassword().equals(user.getPassword())) {
				return user1;
			}
		}
		return null;
	}

	@Override
	public List<UserForm> listAll(UserForm user) {
		UserForm user1 = userdao.getCount(user);
		if(user1.getCount() == 0) {
			return null;
		}else {
			int page = (user.getPage()-1)*20;
			System.out.println("888"+page);
			user.setPage(page);
			List<UserForm> list = userdao.listAll(user);
			list.get(0).setCount(user1.getCount());
			return list;
		}
	}

	@Override
	public User getByLoginName(String loginname) {
		User user = userdao.getByLoginName(loginname);
		return user;
	}

}
