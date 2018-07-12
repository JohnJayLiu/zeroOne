package com.servlet;


import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;
import org.omg.CosNaming.NamingContextExtPackage.StringNameHelper;

import com.alibaba.fastjson.JSON;
import com.models.Shop;
import com.models.ShopStock;
import com.sqlConnection.DBConnection;
import com.sun.javafx.scene.control.SelectedCellsMap;

/**
 * Servlet implementation class SearchServlet
 */
@WebServlet("/doSearch")
public class SearchServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SearchServlet() {
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
		String keyword;
		if((keyword=request.getReader().readLine())==null) {
			String key=(String) request.getSession().getAttribute("searchKeyword");
			String[]strings =key.split("");
			key="%";
			for (String s:strings)
				key=key+s+"%";
			
			List<ShopStock>shopStocks=DBConnection.OpenSession().selectList("com.dao.DataOperate.searchGoods", key);
			List<Shop>shops=DBConnection.OpenSession().selectList("com.dao.DataOperate.searchShop", key);
			String jsonShops=JSON.toJSONString(shops);
			String jsonShopStock=JSON.toJSONString(shopStocks);
			String json="["+jsonShops+","+jsonShopStock+"]";
			System.out.println(key);
			System.out.println(json);
			response.setContentType("text/html;charset=UTF-8");
			response.getWriter().println(json);
		}
		else 
		{
			request.getSession().setAttribute("searchKeyword", keyword);
			System.out.println("key:"+keyword);
		}
		
		//实现简单的模糊搜索
		
		//session.selectList(arg0)
		//response.getWriter().println(x);
		//doGet(request, response);
	}

}
