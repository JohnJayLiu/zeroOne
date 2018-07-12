package com.servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.dao.DataOperate;
import com.models.ShoppingCar;
import com.sqlConnection.DBConnection;

public class CartServlet extends HttpServlet{
	

	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CartServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
    
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		SqlSession session=DBConnection.OpenSession();
	

		BufferedReader reader = request.getReader();
        String Msg = reader.readLine();
        String[] msgs = Msg.split(",");
        System.out.print(Msg);
		ShoppingCar sc=new ShoppingCar();
		HttpSession httpSession=request.getSession();
		sc.setStudentID((String) httpSession.getAttribute("studentID"));
		sc.setGoodsID("5675");
		sc.setCount(Integer.valueOf(msgs[1]).intValue());
		String statement="com.dao.DataOperate.insertShoppingCar";
		session.insert(statement,sc);
		session.commit();
    }
    
    
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		
	}

}
