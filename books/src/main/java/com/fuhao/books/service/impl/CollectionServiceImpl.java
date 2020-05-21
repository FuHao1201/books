package com.fuhao.books.service.impl;

import com.fuhao.books.domain.Collection;
import com.fuhao.books.form.CollectionForm;
import com.fuhao.books.dao.CollectionDao;
import com.fuhao.books.service.CollectionService;
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
public class CollectionServiceImpl extends ServiceImpl<CollectionDao, Collection> implements CollectionService {

	@Autowired
	private CollectionDao collectionDao;
	
	@Override
	public List<CollectionForm> listByUserId(CollectionForm collection) {
		return collectionDao.listByUserId(collection);
	}

	@Override
	public boolean removeByBookId(Collection collection) {
		return collectionDao.removeByBookId(collection);
	}

}
