package com.dao;

import com.models.*;
//�����ﶨ�����ݿ�����Ľӿ�
public interface DataOperate {
	public Student getStudentByID(String studentID);
	public void insertStudent(Student student);
	public void updateStudent(Student student);
}
