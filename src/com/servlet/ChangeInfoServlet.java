package com.servlet;

import java.io.BufferedReader;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;

import com.alibaba.fastjson.JSONObject;
import com.models.Student;
import com.sqlConnection.DBConnection;

/**
 * Servlet implementation class ChangeInfoServlet
 */
@WebServlet("/ChangeInfo")
public class ChangeInfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ChangeInfoServlet() {
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

		SqlSession session=DBConnection.OpenSession();	 
		//response.getWriter().append("Served at: ").append(request.getContextPath());
		BufferedReader reader = request.getReader();
        String json = reader.readLine();
        JSONObject jsonObject=JSONObject.parseObject(json);
        Student stu=(Student)JSONObject.toJavaObject(jsonObject, Student.class);
        if (stu.getPassword()==null) {
        	stu.setPassword(((Student) session.selectList("com.dao.DataOperate.getStudentByID", stu.getStudentID()).get(0)).getPassword());
        }
        reader.close();
       // session.update(arg0, stu)
		doGet(request, response);
	}

}
