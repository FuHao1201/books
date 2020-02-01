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

	/**
	 * 通过用户id查询购物车列表
	 * @param car 查询的参数
	 * @return 购物车集合
	 */
	List<CarForm> listByUserId(@Param("car")CarForm car);

	/**
	 * 通过图书id删除
	 * @param car 参数
	 * @return
	 */
	boolean removeByBookId(@Param("car")Car car);

}
