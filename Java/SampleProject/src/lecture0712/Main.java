package lecture0712;

public class Main {
	public static void main(String[] args) { // main의 parameter인 arg는 지역변수.(method의 parameter는 무조건 지역변수임)
		InstanceTest test; // 지역변수 선언(method 내에서 선언됐으므로 "지역변수"), 이 시점에 instanceTest 클래스가 Method Area로 올라감.
		System.out.println("3번");
		int k = InstanceTest.myCall("4번");
		test = new InstanceTest();
		test.printMsg("5번");
	}
}
