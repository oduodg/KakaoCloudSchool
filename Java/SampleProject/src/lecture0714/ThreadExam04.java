package lecture0714;

import javax.swing.JOptionPane;

class ThreadEx_04 extends Thread {
	@Override
	public void run() {
		int i = 10;
		
		while(i != 0 && !isInterrupted()) {
			System.out.println(--i);
			 try {
				Thread.sleep(3000);
			} catch (Exception e) {
				// 여기서 Interrupt가 발생해서 false로 초기화된다.
				// sleep 상태에서 interrupt가 발생하면 true로 바뀌지 않는다.
				// 방법은?! 현재 catch구문에서 interrupt를 다시 걸어준다.
				interrupt();
			}
			 
			//for(long k=0; k<2500000000L; k++); // 시간지연
			
		}
		System.out.println("카운트가 종료되었어요!");
	}
}

public class ThreadExam04 {
	
	public static void main(String[] args) {
		
		Thread t = new ThreadEx_04();
		
		t.start();
		
		String input = JOptionPane.showInputDialog("값을 입력하세요!");
		System.out.println("입력값은 : " + input);
		
		t.interrupt();
		// Thread t의 interrupted 상태가 true가 된다!
		System.out.println("Thread 상태값은 : " + t.isInterrupted());
	}
}
