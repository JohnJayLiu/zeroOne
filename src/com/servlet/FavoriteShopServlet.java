package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.omg.CosNaming.NamingContextExtPackage.StringNameHelper;

/**
 * Servlet implementation class FavoriteShopServlet
 */

public class FavoriteShopServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FavoriteShopServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String json ="{\"store\":[" + 
				"{" + 
				"\"storeId\":\"1\"," + 
				"\"name\":\"名字有两行（暂定）店\"," + 
				"\"logo\":\"\"," + 
				"\"link\":\"#\"," + 
				"\"info\":\"店铺简介：卖家很懒，什么都没说\"," + 
				"\"items\":[" + 
				"{\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"12.34\"}," + 
				"{\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"56.78\"}," + 
				"{\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"90.00\"}" + 
				"]" + 
				"}," + 
				"{" + 
				"\"storeId\":\"2\"," + 
				"\"name\":\"零一\"," + 
				"\"logo\":\"\"," + 
				"\"link\":\"#\"," + 
				"\"info\":\"店铺简介：卖家很懒，什么都没说。卖家很懒，什么都没说\"," + 
				"\"items\":[" + 
				"{\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"00.00\"}," + 
				"{\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"00.00\"}," + 
				"{\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"00.00\"}" + 
				"]" + 
				"}," + 
				"{" + 
				"\"storeId\":\"3\"," + 
				"\"name\":\"名字有两行（暂定）店\"," + 
				"\"logo\":\"\"," + 
				"\"link\":\"#\"," + 
				"\"info\":\"店铺简介：卖家很懒，什么都没说\"," + 
				"\"items\":[" + 
				"{\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"00.00\"}," + 
				"{\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"00.00\"}," + 
				"{\"picture\":\"img/item1.jpg\",\"link\":\"#\",\"description\":\"日韩护眼纸16K加厚胶套本B5超厚大笔记本子16开软抄本学生练习本\",\"price\":\"00.00\"}" + 
				"]" + 
				"}" + 
				"]" + 
				"}";
		System.out.println(json);
		response.setContentType("text/html;charset=UTF-8");

		response.getWriter().println(json);
		
		//doGet(request, response);
	}

}
