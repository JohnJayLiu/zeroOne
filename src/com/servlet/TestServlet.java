package com.servlet;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSONObject;
import com.models.Student;

/**
 * Servlet implementation class TestServlet
 */
@WebServlet("/area/test")
public class TestServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TestServlet() {
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
		request.setCharacterEncoding("UTF-8");

        /**
         * 接收json
         */
		System.out.println("json");
		
        BufferedReader reader = request.getReader();
        String json = reader.readLine();
        System.out.println(json);
        reader.close();
        JSONObject jsonObject=JSONObject.parseObject(json);
        Student stu=(Student)JSONObject.toJavaObject(jsonObject, Student.class);
        System.out.println(stu.getStudentID());
        String json2="{\"store\":["+
                                 			"{"+
                                				"\"items\":["+
                                				"{\"goods\":\"纪念明信片\",\"price\":\"5\",\"amount\":\"18\",\"total\":\"90\"},"+
                                				"{\"goods\":\"珞珈山\",\"price\":\"5\",\"amount\":\"18\",\"total\":\"90\"},"+
                                				"{\"goods\":\"活动\",\"price\":\"5\",\"amount\":\"18\",\"total\":\"90\"}"+
                                				"]"+
                                			"},"+
                                			"{"+
                                				"\"items\":["+
                                				"{\"goods\":\"纪念明信\",\"price\":\"5\",\"amount\":\"18\",\"total\":\"90\"},"+
                                				"{\"goods\":\"珞珈山\",\"price\":\"5\",\"amount\":\"18\",\"total\":\"90\"},"+
                                				"{\"goods\":\"活动\",\"price\":\"5\",\"amount\":\"18\",\"total\":\"90\"}"+
                                				"]"+
                                			"}"+
                                		"]"+
                                		"};";

        response.getWriter().write(json2);
		doGet(request, response);
		
	}

}
