package com.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.omg.CosNaming.NamingContextExtPackage.StringNameHelper;

import com.alibaba.fastjson.JSON;
import com.models.Orders;
import com.models.ShopStock;
import com.sqlConnection.DBConnection;

/**
 * Servlet implementation class GoodsPageServlet
 */
public class GoodsPageServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GoodsPageServlet() {
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
		SqlSession session=DBConnection.OpenSession();
		
		HttpSession hSession=request.getSession();
		List <ShopStock>goodsList=session.selectList("com.dao.DataOperate.getShopStock", "0427");
		String  studentID=(String) hSession.getAttribute("studentID");
		
		//查询用户订单
		Orders order=new Orders();//session.selectlist(,).....
		String json=JSON.toJSONString(order);
		System.out.println(json);
		response.getWriter().println(json);
	
		//doGet(request, response);
	}

}
