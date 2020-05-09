package com.fuhao.books.dao;

import com.fuhao.books.domain.Buy;
import com.fuhao.books.form.BuyForm;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author FuHao
 * @since 2020-02-02
 */
public interface BuyDao extends BaseMapper<Buy> {

	/**
	 * 结算列表查询
	 * @param buy 参数
	 * @return
	 */
	List<BuyForm> listByUserId(@Param("buy")BuyForm buy);

	/**
	 * 通过用户id删除结算数据
	 * @param buy 参数
	 * @return
	 */
	boolean removeByUserId(@Param("buy")Buy buy);

}
