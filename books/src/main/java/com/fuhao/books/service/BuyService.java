package com.fuhao.books.service;

import com.fuhao.books.domain.Buy;
import com.fuhao.books.form.BuyForm;

import java.util.List;

import com.baomidou.mybatisplus.extension.service.IService;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author FuHao
 * @since 2020-02-02
 */
public interface BuyService extends IService<Buy> {

	/**
	 * 结算列表查询
	 * @param buy 参数
	 * @return
	 */
	List<BuyForm> listByUserId(BuyForm buy);

	/**
	 * 通过用户id删除结算数据
	 * @param buy 参数
	 * @return
	 */
	boolean removeByUserId(Buy buy);

}
