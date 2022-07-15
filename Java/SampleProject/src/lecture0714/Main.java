package lecture0714;





class MyThread extends Thread { // 직접 상속 
	
	@Override
	public void run() { // 독립적인 실행 흐름의 시작이 바로 run()
		System.out.println("Hello");
	}
}

class MyThread2 implements Runnable {
	
	@Override
	public void run() {
		// TODO Auto-generated method stub
		System.out.println("이것도 실행되요!");
	}
}

public class Main {
	
	public static void main(String[] args) {
		
		MyThread t = new MyThread(); // thread 1개 
		t.start();
		
		MyThread2 a = new MyThread2(); // thread 2개 
		Thread t1 = new Thread(); // thread 3개 
		t1.start();
		
		System.out.println("안녕하세요!");
	}
}

/* Exception (try ~ catch ~ finally)
public class Main {
	
	public static void main(String[] args) {
		System.out.println("프로그램 시작!");
		
		try { // exception이 발생할 여지가 있는 코드
			Object obj = null;
			System.out.println(obj.toString()); // 오류가 발생 -> NullPointerException
			int result = 10/ 0; // 오류가 발생 -> ArithmeticException
		} catch (ArithmeticException aaa) {// aaa라는 ArithmeticException타입의 객체를 잡을거에요!(catch)
			// exception을 처리할거에요! 처리 코드를 적어준다.
			System.out.println("Arithmetic 오류가 발생했어요!");
		} catch (NullPointerException e) {
			System.out.println("NullPointer 오류가 발생했어요!");
		} catch (Exception a) { // 최상위 Exception 객체를 사용(is-A 관계에 의해)
			// 모든 Exception이 잡힌다. 
			// catch문은 위에서 아래로 순차적으로 잡는다.
			// 따라서 catch문에서는 하위 exception -> 상위 exception 순서로 적는다. 
		} finally { // 오류가 있건 없건간에 무!조!건! 실행되는 구문
			
			
		}
//		int result = 10/ 0; // 오류가 발생
		
		System.out.println("프로그램 종료..");
	}
}
*/