package com.fuhao.books.service.impl;

import com.fuhao.books.domain.Address;
import com.fuhao.books.dao.AddressDao;
import com.fuhao.books.service.AddressService;
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
public class AddressServiceImpl extends ServiceImpl<AddressDao, Address> implements AddressService {

	@Autowired
	private AddressDao addressDao;

	@Override
	public List<Address> listByUserId(Address address) {
		return addressDao.listByUserId(address);
	}
}
