package com.fuhao.books.config;

import java.io.FileWriter;
import java.io.IOException;

/* *
 *类名：AlipayConfig
 *功能：基础配置类
 *详细：设置帐户有关信息及返回路径
 *修改日期：2017-04-05
 *说明：
 *以下代码只是为了方便商户测试而提供的样例代码，商户可以根据自己网站的需要，按照技术文档编写,并非一定要使用该代码。
 *该代码仅供学习和研究支付宝接口使用，只是提供一个参考。
 */

public class AlipayConfig {
	
//↓↓↓↓↓↓↓↓↓↓请在这里配置您的基本信息↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

	// 应用ID,您的APPID，收款账号既是您的APPID对应支付宝账号
	public static String app_id = "2016101800712218";
	
	// 商户私钥，您的PKCS8格式RSA2私钥
    public static String merchant_private_key = "MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC/HXw6OCcW4CnvXlRYCNiRBvWn5tUW0la8KusJceNCkdxuejhMQMmCDtLtVHq1yqKUm3QQPasTnEwKNaS9IFrVJmdYHj59eGbDjYxMgkFTBEMkSsvZviqyFMtubjS0lqXix+jD5fUIr8j5IB4mS9CEa617HRMKEj5gAQE8gKCxWOCyP/VYeii68Ch2AjRgTC5+AWymyN1YCEKTz/nIOOYihnJPoX/UeDPDnuXJYYp/L8MuMJfYRtR4VIqMZN4GgykB6mSUpRIrSMPj35It2xLJtjeG9obUMyLMztWKeP+ewDuXJW4bBARieP4v+m3F5/uoJIexFA9BeOmfCjRhGmhpAgMBAAECggEAIPwGx8mPPYx80FpYdkU4k3c/CLZ3SpQM8jb6D8w/K+sev1aKxuZboP3L+7gb4apSexGFa5QpJZ5RJWXyw82Ev8r8BSJbKK6SFeglMcM9YQWYTPg3zKHcnpWmMq4EnLJveP+FteHHc7NbHVwkt/lXyLMI4vm2ooNZjpo9y2Jr2Y+vZRLESlS0lYzTqTBGyuChZdbOQYGMUoywyNUlhBNXgqkPeMTS9BJwMD4xGWHgo8ekkL880Umj5E8AVDKLO/my4nREy614LNjjdhBESy++F2Gzf10m+kyfR+1nAYJTuRB8NglF5qgCtvqe3t1fq0gXpPS0ve1kMxTiDUMZrxTXAQKBgQD7eKwe8J4/IU/dU+XA/sbPBx9wzX5SzXB/YRILGm4rO8KK3w3zuf5Qn843fwYVruIO5Hv+De/uIIIOj+ovcaKzXEHQseRMCzY2hi3akJJTqXFqjneTeHFxpHzUgglpAPT/h1duczevxsBEHO0/7+iJ9SSIu4WCexsMJ3yqbgfJSQKBgQDCjo9krGn7ER5DWOJOsIuXOJezXxQLkadqtvEes2Ksdi02LulsK7xxzUf+TqKooMSnlQJmT7oeOYTuB1K/dDJNlWHMlQxqi7CuTEAdbePjbSJyXra1zz0HIJB+q3mtZhb7AM+PzjsQh2mPg4ItwNGjD3J6yq/uMtJDRCZ4XBPGIQKBgDApxI2IeEaPEsTJNM/p/Bnau2LXeMJTJqC+7r3BqigNog0G+50ammLGuLBYW8n7XMCNclIOSU3KXB594dSEZy0DFnfqGleWLiPzPwUFe4EaiuZlsvFDuDaT0nTBExxRWps2SMCWwKuh3WEuSSJdyKPjl8O4ZrG+8kc5qN7bhBJBAoGBAKEO/Ru9MzrZT/E2qpmzwssb2VFvGxv8pthLu83LeJsGdaUOLsQSbLzU0I1wsWzhMgr86vChfZS5zxZxT4oYefAKAt0mYhHttASGMOlr6CSEWujNCXn2pjG5PoTuFRt7kPiXEjyc3/5t6vAYUPLpVWIkToPiOMP6pF91Ele++cuhAoGBANzufm3/Yp2Y5lfBhz4gwqNMWjlDjNQ31hyuNjD6qW1gR9ohNltetq5McxY0PPSsnkNjlU1ryBAjKeTSXudSoEoE/AvM2Xh05gSSxdRYwZ8fCcBWmTIF+mcbxXPc1oz639HUMvChG8ynzD5UGtnV7qALLNu615SjvPOKmj099pwF";
	
	// 支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。
    public static String alipay_public_key = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAk289TOLFW/RR1qiF4JO2X/L11LfpTWAUX/2uhpx8NOfS2E7QoMDUf7yemiZDJIq0QO2+cLb26OxFA8s9tye9xcNA0+cTKWmnGMZ6kDWKzZC+bP/v+bzDvAshvr68OO6zoTzyLQXBjMY9YIpSjrSVWiOye0Y9JXnCAecmyW1mrmR3Ko9N1HPTVj76xsbPNpKgAPyO9r7p2MTbkXkyPrIWtAgOdPd+Yp/ffeYIO4PpxGjbac2m8E/vcNDXiId6uNN+CthkYnut4tEzpWRdgD+WzBaDgMpq8GCTcLdSwmFh9aMEt3zYXQRjuJbRL9eDcTveRW2lFJBvG6iN0zyE1hddpwIDAQAB";

	// 服务器异步通知页面路径  需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
	public static String notify_url = "http://localhost:8088/buy/notify_url";

	// 页面跳转同步通知页面路径 需http://格式的完整路径，不能加?id=123这类自定义参数，必须外网可以正常访问
	public static String return_url = "http://localhost:8088/buy/return_url";

	// 签名方式
	public static String sign_type = "RSA2";
	
	// 字符编码格式
	public static String charset = "utf-8";
	
	// 支付宝网关
	public static String gatewayUrl = "https://openapi.alipaydev.com/gateway.do";
	
	// 支付宝网关
	public static String log_path = "C:\\";


//↑↑↑↑↑↑↑↑↑↑请在这里配置您的基本信息↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

    /** 
     * 写日志，方便测试（看网站需求，也可以改成把记录存入数据库）
     * @param sWord 要写入日志里的文本内容
     */
    public static void logResult(String sWord) {
        FileWriter writer = null;
        try {
            writer = new FileWriter(log_path + "alipay_log_" + System.currentTimeMillis()+".txt");
            writer.write(sWord);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (writer != null) {
                try {
                    writer.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}

