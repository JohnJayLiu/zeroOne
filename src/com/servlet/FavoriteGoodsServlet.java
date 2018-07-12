package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.jasper.tagplugins.jstl.core.Out;
import org.omg.CosNaming.NamingContextExtPackage.StringNameHelper;

/**
 * Servlet implementation class FavoriteGoodsServlet
 */
public class FavoriteGoodsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FavoriteGoodsServlet() {
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
		String json ="{\"items\":[" + 
				"{\"goodsId\":\"1\",\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"12.34\"}," + 
				"{\"goodsId\":\"2\",\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"56.78\"}," + 
				"{\"goodsId\":\"3\",\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"90.00\"}," + 
				"{\"goodsId\":\"4\",\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"00.00\"}," + 
				"{\"goodsId\":\"5\",\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"00.00\"}," + 
				"{\"goodsId\":\"6\",\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"00.00\"}," + 
				"{\"goodsId\":\"7\",\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"00.00\"}," + 
				"{\"goodsId\":\"8\",\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"00.00\"}," + 
				"{\"goodsId\":\"9\",\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"00.00\"}," + 
				"{\"goodsId\":\"10\",\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"00.00\"}" + 
				"]" + 
				"}";
		response.setContentType("text/html;charset=UTF-8");

		response.getWriter().println(json);
		System.out.println(json);
		//doGet(request, response);
	}

}
