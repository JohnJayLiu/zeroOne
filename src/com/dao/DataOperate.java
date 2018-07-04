package com.dao;

import com.models.*;
//在这里定义数据库操作的接口
public interface DataOperate {
	public Student getStudentByID(String StudentID);
	public void insertStudent(Student student);
	public void updateStudent(Student student);
}
