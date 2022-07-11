package com.kakao.test;
/*
public class Student {

	 fields (변수들) 
	// instance variable => instance 내에 공간이 생성
	String stuName; // String -> class -> reference type -> 문자
	String stuNum; // 학번 - 연산을 하지 않는 숫자는 문자열 처리가 좋다. (int가 아닌 String)
	// class(static) variable => method area 안에 class 정보 안에 공간이 생성
	// 					 class에 대한 정보가 method area에 올라갈 때 생성
	// 					 모든 instance에 의해서 공유되는 field
	static String univName;
	
	 생성자 - 인스턴스를 초기화해주는 역할 
	// 생성자는 method와 비슷하게 생겼지만 method가 아니다! 
	// Java의 method는 무조건 return type이 존재해야 한다.
	// 하지만 생성자는 return type이 없다. -> method가 아니다.
	// Java에서 생성자는 클래스명과 똑같이 생겼다.
	Student() {
		
	}
	
	 methods (함수들) 
	public String getName() { // instance method
		return this.stuName;
	}
	
	public static String getUnivName() { // class method
		return univName;
	}
	
	 method overloading: 인자에 따라서 다른 method로 구분  
	public void getScore(String k) {
		
	}
	
	public void getScore(int k) {
		
	}
	
	public static void main(String[] args) {
		// System.out.println("Hello, Java!"); // sysout
		Student stu = new Student(); // instance 생성
		// . operator (. 연산자)
		stu.stuName = "홍길동"; 
		stu.univName = "한국대학교";
		Student.univName = "미국대학교";
		stu.getName();
		stu.getUnivName();
		Student.getUnivName();
	}
}
*/
/*
public class Student { 
	static int a = staticCall("1번");
	int b = staticCall("2번");

	public static int staticCall(String msg){
		System.out.println(msg);
		return 100;
	}
	
	public Student(){
		this.b = staticCall("3번");
	}
	
	public static void main(String[] args){
		System.out.println("4번");
		int c = staticCall("5번");
		Student s = new Student();
	}
}
*/

public class Student {
	// 결론적으로 field는 특별한 이유가 없는 한 싹 다  private.
	// class 내부의 field는 보호해야 하는 정보.
	private String stuName; // information hiding
	public String stuNum;
	
	public String getStuNum() { // Source - Generate Getters and Setters
		return stuNum;
	}

	public void setStuNum(String stuNum) {
		this.stuNum = stuNum;
	}

	public String getStuName() { // getter
		return this.stuName;
	}
	
	public void setStuName(String stuName) { // setter
		this.stuName = stuName;
	}
	
	public Student(){
		
	}
	// method는 행위를 하는 작업이기 때문에 특별한 이유가 없는 한
	// 외부에서 사용할 수 없도록 public으로 설정.
}
