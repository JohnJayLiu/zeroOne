package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.Reader;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import com.dao.DataOperate;
import com.models.Student;
import com.sqlConnection.DBConnection;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		SqlSession session=DBConnection.OpenSession();
		String studentID=request.getParameter("username");
		String password=request.getParameter("password");
		List<Student>students;
		HttpSession hSession=request.getSession();
		students=session.selectList("com.dao.DataOperate.getStudentByID", studentID);
		if (students.size()==0) {
			PrintWriter out= response.getWriter();
			out.print("<script language='javaScript'> alert('用户名或密码输入错误');</script>");
			response.setHeader("refresh", "0;url=登陆.html");
		}
		else if (students.get(0).getPassword().equals(password)) {
			response.sendRedirect("index.html");
			hSession.setAttribute("studentID", students.get(0).getStudentID());
			}
		else {
			PrintWriter out= response.getWriter();
			out.print("<script language='javaScript'> alert('用户名或密码输入错误');</script>");
			response.setHeader("refresh", "0;url=登陆.html");
			}
		
	}
		
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
		
	}
}
