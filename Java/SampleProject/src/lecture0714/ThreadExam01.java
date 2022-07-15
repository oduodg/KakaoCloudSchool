package lecture0714;

class ThreadEx_01_1 extends Thread {
	@Override
	public void run() {
		for(int i=0; i<5; i++) {
			System.out.println(getName());
		}
	}
}

class ThreadEx_01_2 extends Thread {
	@Override
	public void run() {
		for(int i=0; i<5; i++) {
			System.out.println(Thread.currentThread().getName());
		}
	}
}

public class ThreadExam01 {
	
	public static void main(String[] args) {
		
		ThreadEx_01_1 t1 = new ThreadEx_01_1();
		
		ThreadEx_01_2 r = new ThreadEx_01_2();
		Thread t2 = new Thread(r);
		
		// thread에 우선순위 할당 -> single core에서만 의미가 있다.
		// multi-core 환경에서는 우선순위의 의미가 없다.
//		t1.setPriority(10);
//		t2.setPriority(2);
		
		t1.start();
		t2.start();
		
		System.out.println("main thread 종료");
	}
}