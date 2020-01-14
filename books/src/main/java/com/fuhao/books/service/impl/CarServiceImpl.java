package com.fuhao.books.service.impl;

import com.fuhao.books.dao.CarDao;
import com.fuhao.books.domain.Car;
import com.fuhao.books.service.CarService;
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
public class CarServiceImpl extends ServiceImpl<CarDao, Car> implements CarService {

}
