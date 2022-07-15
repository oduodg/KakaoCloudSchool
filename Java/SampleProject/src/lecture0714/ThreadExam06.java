package lecture0714;

class ThreadEx_06 implements Runnable {
	
	volatile boolean suspended = false;
	volatile boolean stopped = false;
	
	@Override
	public void run() {
		while(!stopped) {
			if(!suspended) {
				System.out.println(Thread.currentThread().getName());
				try {
					Thread.sleep(1000);
				} catch (Exception e) {
					// TODO: handle exception
				}
			}
		}
	}
	
	public void suspend() {
		suspended = true;
	}
	
	public void resume() {
		suspended = false;
	}
	
	public void stop() {
		stopped = true;
	}
}
public class ThreadExam06 {
	
	public static void main(String[] args) {
		ThreadEx_06 r1 = new ThreadEx_06();
		ThreadEx_06 r2 = new ThreadEx_06();
		ThreadEx_06 r3 = new ThreadEx_06();
		
		Thread t1 = new Thread(r1, "*"); // 두번째 인자는 Thread의 이름.
		Thread t2 = new Thread(r2, "**"); // 두번째 인자는 Thread의 이름.
		Thread t3 = new Thread(r3, "***"); // 두번째 인자는 Thread의 이름.

		t1.start();
		t2.start();
		t3.start();
		
		try {
			Thread.sleep(2000);
			t1.suspend(); // t1을 일시 중지 
			Thread.sleep(2000);
			t2.suspend(); // t2를 일시 중지
			Thread.sleep(2000); 
			t1.resume(); // t1이 다시 동작하도록 설정 
			Thread.sleep(2000);
			t1.stop();
			t2.stop();
			Thread.sleep(2000);
			t3.stop();
			} catch (Exception e) {
			
		}	
	}
}
