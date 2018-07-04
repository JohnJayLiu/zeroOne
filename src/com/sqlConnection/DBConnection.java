package com.sqlConnection;

import java.io.Reader;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

public class DBConnection {
	private static SqlSessionFactory sqlSessionFactory;
	private static Reader reader;
    	static {
    		
    	}
    	public static SqlSessionFactory getSession() {
    		return sqlSessionFactory;
    	}
    	public static SqlSession OpenSession() {
    		try {
    			reader =Resources.getResourceAsReader("config/Configure.xml");
    			sqlSessionFactory=new SqlSessionFactoryBuilder().build(reader);
    		}catch (Exception e) {
				// TODO: handle exception
    			e.printStackTrace();
			}
    		return sqlSessionFactory.openSession();
    	}
}
