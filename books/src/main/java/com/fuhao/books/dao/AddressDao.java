package com.fuhao.books.dao;

import com.fuhao.books.domain.Address;

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
public interface AddressDao extends BaseMapper<Address> {

	List<Address> listByUserId(@Param("address")Address address);

}
