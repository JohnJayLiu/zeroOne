package com.servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.ibatis.session.SqlSession;
import com.alibaba.fastjson.JSONObject;
import com.models.Student;
import com.sqlConnection.DBConnection;
public class RegisterServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;
	
	 public RegisterServlet() {
	        super();
	        // TODO Auto-generated constructor stub
	    }
	 
	 protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			// TODO Auto-generated method stub
			SqlSession session=DBConnection.OpenSession();	 
			//response.getWriter().append("Served at: ").append(request.getContextPath());
			BufferedReader reader = request.getReader();
	        String json = reader.readLine();
	        JSONObject jsonObject=JSONObject.parseObject(json);
	        Student stu=(Student)JSONObject.toJavaObject(jsonObject, Student.class);
	        reader.close();
			
				String statement = "com.dao.DataOperate.insertStudent";
				if(session.selectList("com.dao.DataOperate.getStudentByID", stu.getStudentID())!=null) {
					PrintWriter out= response.getWriter();
					out.print("<script language='javaScript'> alert('用户ID已经存在!');</script>");
					response.setHeader("refresh", "0;url=注册.html");
					}
				else {
					session.insert(statement,stu);
					session.commit();
					response.sendRedirect("登录.html");
					}
				}
		
		
	 
	 protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			// TODO Auto-generated method stub
			doGet(request, response);
		}
}
