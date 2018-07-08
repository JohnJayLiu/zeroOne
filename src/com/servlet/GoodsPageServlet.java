package com.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.omg.CosNaming.NamingContextExtPackage.StringNameHelper;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.models.Orders;
import com.models.ShopStock;
import com.models.Student;
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
		/*SqlSession session=DBConnection.OpenSession();
		//response.getWriter().append("Served at: ").append(request.getContextPath())
		HttpSession hSession=request.getSession();
		List <ShopStock>goodsList=session.selectList("com.dao.DataOperate.getShopStock", "0427");*/
		Orders order=new Orders();
		String json=JSON.toJSONString(order);
		System.out.println(json);
		String orderList="{\"store\":["+
     			"{"+
     			"\"name\":\"商店1\","+
    				"\"items\":["+
    				"{\"goods\":\"纪念明信片\",\"price\":\"5\",\"amount\":\"18\",\"total\":\"90\"},"+
    				"{\"goods\":\"珞珈山\",\"price\":\"5\",\"amount\":\"18\",\"total\":\"90\"},"+
    				"{\"goods\":\"活动\",\"price\":\"5\",\"amount\":\"18\",\"total\":\"90\"}"+
    				"]"+
    			"},"+
    			"{"+
    			"\"name\":\"商店2\","+
    				"\"items\":["+
    				"{\"goods\":\"纪念明信\",\"price\":\"5\",\"amount\":\"18\",\"total\":\"90\"},"+
    				"{\"goods\":\"珞珈山\",\"price\":\"5\",\"amount\":\"18\",\"total\":\"90\"},"+
    				"{\"goods\":\"活动\",\"price\":\"5\",\"amount\":\"18\",\"total\":\"90\"}"+
    				"]"+
    			"}"+
    		"]"+
    		"}";
		System.out.println(orderList);
		JSONObject jsonObject=JSONObject.parseObject(orderList);
       Orders orders=(Orders)JSONObject.toJavaObject(jsonObject, Orders.class);
	System.out.println(orders.getStoreName(0));
	response.getWriter().println(orderList);
	
		//转化为json数据
		//String jsonString =JSON.toJSONString(goodsList);
		//System.out.println(jsonString);
		//response.getWriter().write(jsonString);
		//doGet(request, response);
	}

}
