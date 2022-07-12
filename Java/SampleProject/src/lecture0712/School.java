package lecture0712;

class Person extends Object{
	public Person() {
		
	}
	
	public Person(String name) {
		this.name = name;
		System.out.println("AA");
	}
	
	String name; // 이름 
	String mobile; // 전화번호
	
	public void printAll() {
		System.out.println("모두 출력!!");
	}
}


// tightly coupled -> 상속 관계에 있으면 두 클래스가 강하게 결합된다.
class Student extends Person{
	/*
	public Student() {
		super("홍길동"); // 상위 클래스의 생성자를 쓰지 않으면(default constructor라면) super()가 자동으로 삽입된다.
		// 상위 클래스의 생성자를 작성했다면 그에 맞춰서 super()에 인자를 주어야한다.
		System.out.println("BB");
	}
	 */
	String name; // field 재정의 -> overriding이라는 표현은 쓰지않는다.(overriding은 method에 국한)
	String dept; // 학과
	
	//default constructor
	public Student() {
		this("홍길동");
	}
	
	public Student(String name) {
		this.name = name;
	}
	
	
	public void printAll() { // method overriding
		System.out.println("모두 출력!!");
	}
}

public class School {
	public static void main(String[] args) {
		 Student s = new Student();
		// Person s = new Student();
		// Object s = new Student();
		// is-a relationship
		// subclass is a superclass
	}
}