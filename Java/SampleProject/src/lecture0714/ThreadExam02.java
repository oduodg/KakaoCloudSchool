package lecture0714;

// Daemon Thread에 대해 알아보아요!
public class ThreadExam02 implements Runnable {
	
	static boolean autoSave = false;
	
	public static void main(String[] args) {
		Thread t = new Thread(new ThreadExam02());
		
		t.setDaemon(true);
		
		t.start();
		
		// 1초마다 잤다 깨면서 i 찍
		for(int i=0; i<10; i++) {
			try {
				Thread.sleep(1000); // main thread가 sleep한다.
			} catch(Exception e) {
				
			}
			System.out.println(i);
			
			if(i == 5) {
				autoSave =true;
			}
		}
	}
	
	@Override
	public void run() {
		while(true) {
			try {
				Thread.sleep(1000); // t thread가 sleep한다.
			} catch(InterruptedException e) {
				
			}
			
			// 5초가 되는 순간 실행
			if(autoSave) {
				System.out.println("자동저장되었어요!");
			}
		}
	} 
}
