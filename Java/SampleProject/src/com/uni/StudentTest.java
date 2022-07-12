package com.uni;

public class StudentTest {
	public static void main(String[] args) {
		Student arrays[] = new Student[3];
		// Student 객체를 3개 생성하여 배열에 넣는다.
		arrays[0] = new Student("홍길동", 15, 171, 81, "201101", "영문");
		arrays[1] = new Student("한사람", 13, 183, 72, "201102", "건축");
		arrays[2] = new Student("임걱정", 16, 175, 65, "201103", "무용");
		// 배열에 있는 객체 정보를 모두 출력 한다. - for문을 이용할 것
		for(Student s : arrays) {
			System.out.println(s.printInformation());
		}
	}
}

class Human { 
	protected String name;
	protected int age;
	protected int height;
	protected int weight;
	
	// 기본 생성자
	public Human() {
		
	}
	
	// 4개의 클래스 변수를 받는 생성자
	public Human(String name, int age, int height, int weight) {
		this.name = name;
		this.age = age;
		this.height = height;
		this.weight = weight;
	
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}

	public int getWeight() {
		return weight;
	}

	public void setWeight(int weight) {
		this.weight = weight;
	}

	// Human 정보를 리턴 한다.
	public String printInformation() {
		return this.name + " " + this.age + "\t" + this.height + "\t" + this.weight;
	}
}

class Student extends Human {
	private String number;
	private String major;
	
	// 기본 생성자
	public Student(){
		
	}
	
	// 6개의 클래스 변수를 받는 생성자
	public Student(String name, int age, int height, int weight, String number, String major) {
		super(name, age, height, weight);
		this.number = number;
		this.major = major;
	
	}
	
	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getMajor() {
		return major;
	}

	public void setMajor(String major) {
		this.major = major;
	}

	// Student 정보를 리턴 한다.
	public String printInformation() {
		return super.printInformation() + "\t" + this.number + "\t" + this.major;
	}
}