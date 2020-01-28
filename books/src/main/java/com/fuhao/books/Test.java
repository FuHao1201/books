package com.fuhao.books;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

import com.fuhao.books.domain.User;
import com.mysql.fabric.xmlrpc.base.Data;

public class Test {
	public static void main(String[] args) throws ParseException {
		Date date = new Date();
		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		String time= sdf.format(date);
		Date date2=sdf.parse(time);
		User user = new User();
		user.setCreateTime(date2);
		System.out.println(user.getCreateTime());

	}
}
