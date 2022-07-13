package lecture0713;

import java.util.*;
//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.List;
//import java.util.Map;

public class Main {
	public static void main(String[] args) {
		// 배열과 비슷한 놈이다! 단, 동적으로 크기가 늘거나 줄일 수 있다!
		// 저장은 무조건 객체 형태로만 저장된다!
		// 다양한 형태의 객체를 저장할 수 있다!
		List list = new ArrayList<>();
		list.add("Hello");
		list.add("홍길동");
		list.add(100); // 3번째 칸에 숫자(int 100)이 저장된 것 같이 보여요!
		list.add(new Student());
		
		//List를 만들어서 사용할 거에요.
		// 같은 데이터 타입을 이용하는 경우가 사실 대부분.
		List<String> list1 = new ArrayList<String>(); // 꺽쇠 안에 데이터 타입을 명시 
		list1.add("홍길동");
//		list1.add(100); // error
		
		// Map
		Map<String, String> map = new HashMap<String, String>();
		map.put("1", "홍길동");
		map.put("2", "Hello");
		// API Reference를 참조해서 각 collection의 이용방법을 찾아서 써 보아요!
		
	}
}

/*public class Main {
	public static void main(String[] args) {
		String str1 = "Hello";
		String str2 = "Hello";
		String str3 = new String("Hello");
		
		System.out.println(str1 == str2); //true
		System.out.println(str1 == str3); //false
		// == 은 메모리 주소값을 비교한다.
		System.out.println(str1.equals(str3)); //true
		// 문자열 내용을 비교하려면 equals()를 써야한다.
		// 문자열 내용이 같은지 확인할 때 == 사용하지 말아요!
	}
}
*/

class Student {
	private String name;
	private int age;
	
	public Student() {
		
	}
		
	public Student(String name, int age) {
		super();
		this.name = name;
		this.age = age;
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
	
	@Override
	public boolean equals(Object obj) {
		Student tmp = (Student)obj;
		boolean result = false;
		if((this.name == tmp.name) && (this.age == tmp.age)) {
			result = true;
		}
		return result;
	}
	
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return this.name + " " + this.age;
	}
}
/*
public class Main {
	public static void main(String[] args) {
		
		Student s1 = new Student("홍길동", 20);
		Student s2 = new Student("홍길동", 20);
		
//		System.out.println(s1 == s2);  // false
//		System.out.println(s1.equals(s2)); // false -> true
		System.out.println(s1); // s1.toString()으로 자동으로 toString()이 붙는다. lecture0713.Student@1eb44e46 -> 홍길동 20
	}
}
*/

/*
class Human {
	
}

interface MyInterface {
	
}

interface Animal {
	int weight = 10;
	public static final int age = 20;
	
	public void printName();
	public abstract void printAge();
}

abstract class MyClass extends Human implements Animal, MyInterface {
// MyClass는 Human을 상속받고 Animal과 MyInterface를 다중 구현한다.
	@Override
	public void printName() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void printAge() {
		// TODO Auto-generated method stub
		
	}
}
*/