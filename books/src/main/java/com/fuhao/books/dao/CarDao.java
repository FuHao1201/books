package com.fuhao.books.dao;

import com.fuhao.books.domain.Car;
import com.fuhao.books.form.CarForm;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author FuHao
 * @since 2020-01-19
 */
public interface CarDao extends BaseMapper<Car> {

	List<CarForm> listByUserId(@Param("car")CarForm car);

	boolean removeByBookId(@Param("car")Car car);

}
