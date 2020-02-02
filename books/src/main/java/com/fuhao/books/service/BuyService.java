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

	List<BuyForm> listByUserId(BuyForm buy);

}
