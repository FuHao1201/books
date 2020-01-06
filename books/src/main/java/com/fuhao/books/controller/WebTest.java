package com.fuhao.books.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebTest {

	@RequestMapping(value = "/")
	public String homePage() {
	return "index";
	}
}
