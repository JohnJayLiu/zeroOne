package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;
import org.omg.CosNaming.NamingContextExtPackage.StringNameHelper;

import com.sqlConnection.DBConnection;

/**
 * Servlet implementation class DeleteGoodsServlet
 */

public class DeleteGoodsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteGoodsServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String goodsID= request.getReader().readLine();
		SqlSession session=DBConnection.OpenSession();
		////根据获取到的ID删除(数据库操作)
		String studentID =(String) request.getSession().getAttribute("studentID");
		//根据studentID和goodsID
		//session.delete(arg0, arg1);
		
		System.out.println(goodsID);
		
		
		
		doGet(request, response);
	}

}
