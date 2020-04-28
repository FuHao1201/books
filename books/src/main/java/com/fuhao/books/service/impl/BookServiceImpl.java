package com.fuhao.books.service.impl;

import com.fuhao.books.domain.Book;
import com.fuhao.books.form.BookForm;
import com.fuhao.books.dao.BookDao;
import com.fuhao.books.service.BookService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author FuHao
 * @since 2020-01-19
 */
@Service
public class BookServiceImpl extends ServiceImpl<BookDao, Book> implements BookService {

	@Autowired
	private BookDao bookdao;
	
	@Override
	public List<Book> getBookType() {
		return bookdao.getBookType();
	}

	@Override
	public List<Book> listBytype(Book book) {
		return bookdao.listBytype(book);
	}

	@Override
	public List<BookForm> listAll(BookForm book) {
		BookForm book1 = bookdao.getCount(book);
		if(book1.getCount() == 0) {
			return null;
		}else {
			if (book.getPage()!= 0) {
				int page = (book.getPage()-1)*20;
				System.out.println("888"+page);
				book.setPage(page);
				List<BookForm> list = bookdao.listAll(book);
				list.get(0).setCount(book1.getCount());
				return list;
			}else {
				List<BookForm> list = bookdao.listAll(book);
				list.get(0).setCount(book1.getCount());
				return list;
			}
		}
	}

}
