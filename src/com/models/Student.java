package com.models;

import org.omg.CosNaming.NamingContextExtPackage.StringNameHelper;

public class Student {
	private String studentName;
	private String studentID;
	private String password;
	private String address;
	private String phone;
	private String email;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email=email;
	}
	public void setStudentName(String studentName){
		this.studentName=studentName;
	}
	public String getStudentName() {
		return studentName;
	}
	public void setStudentID(String studentID) {
		this.studentID=studentID;
	}
	public String getStudentID() {
		return studentID;
	}
	public void setPassword(String password) {
		this.password=password;
	}
	public String getPassword() {
		return password;
	}
	public void setAddress(String address) {
		this.address=address;
	}
	public String getAddress() {
		return address;
	}
	public void setPhone (String phone ) {
		this.phone=phone;
		
	}
	public String getPhone () {
		return phone;
	}
}
