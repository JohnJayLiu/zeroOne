package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.alibaba.fastjson.JSON;
import com.models.Orders;

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
		/*SqlSession session=DBConnection.OpenSession();
		//response.getWriter().append("Served at: ").append(request.getContextPath())
		HttpSession hSession=request.getSession();
		List <ShopStock>goodsList=session.selectList("com.dao.DataOperate.getShopStock", "0427");*/
		Orders order=new Orders();
		String json=JSON.toJSONString(order);
		System.out.println(json);
		response.getWriter().println(json);
	
		//doGet(request, response);
	}

}
