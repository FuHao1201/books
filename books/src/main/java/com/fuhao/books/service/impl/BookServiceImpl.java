package com.fuhao.books.service.impl;

import com.fuhao.books.dao.BookDao;
import com.fuhao.books.domain.Book;
import com.fuhao.books.service.BookService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author FuHao
 * @since 2020-01-14
 */
@Service
public class BookServiceImpl extends ServiceImpl<BookDao, Book> implements BookService {

}
