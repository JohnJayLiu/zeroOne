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

import com.alibaba.fastjson.JSON;
import com.models.Student;
import com.sqlConnection.DBConnection;

/**
 * Servlet implementation class RequestInfoServlet
 */
@WebServlet("/requestInfo")
public class RequestInfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RequestInfoServlet() {
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
		HttpSession hSession=request.getSession();
		
		String studentID=(String) hSession.getAttribute("studentID");
		
		System.out.println("requstInfo"+studentID);
		SqlSession session=DBConnection.OpenSession();
		List<Student>students=session.selectList("com.dao.DataOperate.getStudentByID", studentID);
		String jsonString =JSON.toJSONString(students.get(0));
		response.getWriter().println(jsonString);
		//doGet(request, response);
	}

}
