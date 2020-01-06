package com.fuhao.books.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fuhao.books.dao.CollectionDao;
import com.fuhao.books.service.CollectionService;

@Service
public class CollectionServiceImpl implements CollectionService{

	@Autowired
	private CollectionDao collectionDao;
}
