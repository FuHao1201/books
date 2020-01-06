package com.fuhao.books.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fuhao.books.dao.CarDao;
import com.fuhao.books.service.CarService;

@Service
public class CarServiceImpl implements CarService{

	@Autowired
	private CarDao carDao;
}
