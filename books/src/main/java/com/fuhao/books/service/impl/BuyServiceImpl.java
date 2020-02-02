package com.fuhao.books.service.impl;

import com.fuhao.books.domain.Buy;
import com.fuhao.books.form.BuyForm;
import com.fuhao.books.dao.BuyDao;
import com.fuhao.books.service.BuyService;
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
 * @since 2020-02-02
 */
@Service
public class BuyServiceImpl extends ServiceImpl<BuyDao, Buy> implements BuyService {

	@Autowired
	private BuyDao buyDao;
	
	@Override
	public List<BuyForm> listByUserId(BuyForm buy) {
		return buyDao.listByUserId(buy);
	}

}
