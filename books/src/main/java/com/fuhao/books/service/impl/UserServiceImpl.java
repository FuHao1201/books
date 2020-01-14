package com.fuhao.books.service.impl;

import com.fuhao.books.dao.UserDao;
import com.fuhao.books.domain.User;
import com.fuhao.books.service.UserService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author FuHao
 * @since 2020-01-14
 */
@Service
public class UserServiceImpl extends ServiceImpl<UserDao, User> implements UserService {

}
