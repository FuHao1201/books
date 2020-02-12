package com.fuhao.books.controller;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.alipay.api.AlipayApiException;
import com.alipay.api.AlipayClient;
import com.alipay.api.AlipayObject;
import com.alipay.api.DefaultAlipayClient;
import com.alipay.api.domain.AlipayTradePagePayModel;
import com.alipay.api.internal.util.AlipaySignature;
import com.alipay.api.request.AlipayTradePagePayRequest;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.fuhao.books.common.BaseController;
import com.fuhao.books.common.GlobalConstants;
import com.fuhao.books.config.AlipayConfig;
import com.fuhao.books.domain.Address;
import com.fuhao.books.domain.Buy;
import com.fuhao.books.domain.JsonResult;
import com.fuhao.books.form.BuyForm;
import com.fuhao.books.service.BuyService;

/**
 * <p>
 *  前端控制器
 * </p>
 *
 * @author FuHao
 * @since 2020-02-02
 */
@Controller
@RequestMapping("/buy")
public class BuyController extends BaseController{

	@Autowired
	private BuyService buyService;
	
	@GetMapping("/payTest")
	public ModelAndView payTest() {
		return view("payTest");
	}
	
    public static AlipayClient alipayClient = new DefaultAlipayClient(AlipayConfig.gatewayUrl, AlipayConfig.app_id, AlipayConfig.merchant_private_key, "json", AlipayConfig.charset, AlipayConfig.alipay_public_key, AlipayConfig.sign_type);
	 /*** 调用支付*/
    @RequestMapping(value = "/paySum", produces = "text/html; charset=UTF-8")
    @ResponseBody
    public String goAlipay(String total_amount,String subject,String body) throws IOException, AlipayApiException {
        System.out.println(total_amount+subject+body);
    	//获得初始化的AlipayClient
        AlipayClient alipayClient = BuyController.alipayClient;
        // 订单模型
        String productCode = "FAST_INSTANT_TRADE_PAY";
        AlipayTradePagePayModel model = new AlipayTradePagePayModel();
        Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
//		System.out.println(sdf.format(date));
        model.setOutTradeNo(sdf.format(date)+"-"+body);
        model.setSubject(subject);
        model.setTotalAmount(total_amount);
        model.setBody(body);
        model.setProductCode(productCode);
        
        AlipayTradePagePayRequest pagePayRequest = new AlipayTradePagePayRequest();
        pagePayRequest.setReturnUrl(AlipayConfig.return_url);
        pagePayRequest.setNotifyUrl(AlipayConfig.notify_url);
        pagePayRequest.setBizModel(model);
        //请求
        String result = alipayClient.pageExecute(pagePayRequest).getBody();
        System.out.println(result);
        return result;
    }

    /*** 同步回调*/
    @RequestMapping("/return_url")
    public ModelAndView return_url(HttpServletResponse response, HttpServletRequest request) throws IOException, AlipayApiException {
    	//获取支付宝GET过来反馈信息
    	Map<String,String> params = new HashMap<String,String>();
    	Map<String,String[]> requestParams = request.getParameterMap();
    	for (Iterator<String> iter = requestParams.keySet().iterator(); iter.hasNext();) {
    		String name = (String) iter.next();
    		String[] values = (String[]) requestParams.get(name);
    		String valueStr = "";
    		for (int i = 0; i < values.length; i++) {
    			valueStr = (i == values.length - 1) ? valueStr + values[i]
    					: valueStr + values[i] + ",";
    		}
    		//乱码解决，这段代码在出现乱码时使用
    		valueStr = new String(valueStr.getBytes("ISO-8859-1"), "utf-8");
    		params.put(name, valueStr);
    	}
    	
    	boolean signVerified = AlipaySignature.rsaCheckV1(params, AlipayConfig.alipay_public_key, AlipayConfig.charset, AlipayConfig.sign_type); //调用SDK验证签名
    	//——请在这里编写您的程序（以下代码仅作参考）——
    	if(signVerified) {
    		//商户订单号
    		String out_trade_no = new String(request.getParameter("out_trade_no").getBytes("ISO-8859-1"),"UTF-8");    	
    		//支付宝交易号
    		String trade_no = new String(request.getParameter("trade_no").getBytes("ISO-8859-1"),"UTF-8");
    		//付款金额
    		String total_amount = new String(request.getParameter("total_amount").getBytes("ISO-8859-1"),"UTF-8");
    		
    		String userId = out_trade_no.substring(out_trade_no.indexOf("-")+1).trim();;
    		//String body = new String(request.getParameter("body").getBytes("ISO-8859-1"),"UTF-8");
//    		System.out.println("trade_no:"+trade_no+"<br/>out_trade_no:"+out_trade_no+"<br/>total_amount:"+total_amount);
    		ModelMap model = new ModelMap();
    		model.put("userId",userId);
    		System.out.println("用户"+userId);
    		return view("index",model);
    	}else {
    		return null;
    	}
    }

    /*** 异步回调*/
    @ResponseBody
    @PostMapping(value = "/notify_url")
    public String notify_url(HttpServletResponse response, HttpServletRequest request) throws IOException, AlipayApiException {
    	//获取支付宝POST过来反馈信息
    	Map<String,String> params = new HashMap<String,String>();
    	Map<String,String[]> requestParams = request.getParameterMap();
    	for (Iterator<String> iter = requestParams.keySet().iterator(); iter.hasNext();) {
    		String name = (String) iter.next();
    		String[] values = (String[]) requestParams.get(name);
    		String valueStr = "";
    		for (int i = 0; i < values.length; i++) {
    			valueStr = (i == values.length - 1) ? valueStr + values[i]
    					: valueStr + values[i] + ",";
    		}
    		//乱码解决，这段代码在出现乱码时使用
    		valueStr = new String(valueStr.getBytes("ISO-8859-1"), "utf-8");
    		params.put(name, valueStr);
    	}    	
    	boolean signVerified = AlipaySignature.rsaCheckV1(params, AlipayConfig.alipay_public_key, AlipayConfig.charset, AlipayConfig.sign_type); //调用SDK验证签名

    	//——请在这里编写您的程序（以下代码仅作参考）——
    	
    	/* 实际验证过程建议商户务必添加以下校验：
    	1、需要验证该通知数据中的out_trade_no是否为商户系统中创建的订单号，
    	2、判断total_amount是否确实为该订单的实际金额（即商户订单创建时的金额），
    	3、校验通知中的seller_id（或者seller_email) 是否为out_trade_no这笔单据的对应的操作方（有的时候，一个商户可能有多个seller_id/seller_email）
    	4、验证app_id是否为该商户本身。
    	*/
    	if(signVerified) {//验证成功
    		//商户订单号
    		String out_trade_no = new String(request.getParameter("out_trade_no").getBytes("ISO-8859-1"),"UTF-8");
    	
    		//支付宝交易号
    		String trade_no = new String(request.getParameter("trade_no").getBytes("ISO-8859-1"),"UTF-8");
    	
    		//交易状态
    		String trade_status = new String(request.getParameter("trade_status").getBytes("ISO-8859-1"),"UTF-8");
    		
    		String body = new String(request.getParameter("body").getBytes("ISO-8859-1"),"UTF-8");
    		
    		if(trade_status.equals("TRADE_FINISHED")){
    			//判断该笔订单是否在商户网站中已经做过处理
    			//如果没有做过处理，根据订单号（out_trade_no）在商户网站的订单系统中查到该笔订单的详细，并执行商户的业务程序
    			//如果有做过处理，不执行商户的业务程序
    				
    			//注意：
    			//退款日期超过可退款期限后（如三个月可退款），支付宝系统发送该交易状态通知
    		}else if (trade_status.equals("TRADE_SUCCESS")){
    			//判断该笔订单是否在商户网站中已经做过处理
    			//如果没有做过处理，根据订单号（out_trade_no）在商户网站的订单系统中查到该笔订单的详细，并执行商户的业务程序
    			//如果有做过处理，不执行商户的业务程序
    			
    			//注意：
    			//付款完成后，支付宝系统发送该交易状态通知
    		}
    		 return "success";
    		
    	}else {//验证失败
    		return "fail";
    		//调试用，写文本函数记录程序运行情况是否正常
    		//String sWord = AlipaySignature.getSignCheckContentV1(params);
    		//AlipayConfig.logResult(sWord);
    	}
    }
	
	@GetMapping("/buys/{html}")
	public ModelAndView views(@PathVariable String html,String userId,ModelMap model) {
		if(html.equals("buy_list")) {
			model.put("userId", userId);
	        return view("buys/"+html,model);
		}
		return view("buys/"+html);
	}
	
	@PostMapping("/addBuy")
	public JsonResult<Buy> addBuy(Buy buy){
		Date create_time = new Date();
		buy.setCreateTime(create_time);
		if (buyService.saveOrUpdate(buy)) {
			return jr(GlobalConstants.SUCCESS, "添加结算清单成功");
		}
		return jr(GlobalConstants.ERROR, "添加结算清单失败");	
	}
	
	@GetMapping("/buy_list")
	public JsonResult<List<BuyForm>> buy_list(BuyForm buy){
		List<BuyForm> list = buyService.listByUserId(buy);
		if (list != null) {
			return jr("0","查询成功",list); 
			}
		return jr(GlobalConstants.ERROR,"未找到资源");	
	}
	
	@PostMapping("/removeByUserId")
	public JsonResult<Buy> removeByUserId(Buy buy){
		if(buyService.removeByUserId(buy)) {
			return jr(GlobalConstants.SUCCESS, "删除成功");
		}
		return jr(GlobalConstants.ERROR, "删除失败");
	}
	
}
