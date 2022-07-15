package lecture0715;

class Shared {
	
	public synchronized void printNum() {
		
		try {
			for(int i=0; i < 10; i++) {
				Thread.sleep(1000);
				System.out.println(Thread.currentThread().getName() + " : " + i);
				notify();
				wait();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}

class ThreadEx_10 implements Runnable{
	
	private Shared shared;
	
	public ThreadEx_10(Shared shared) {
        this.shared = shared;
    }
	
	 @Override
	    public void run() {            
	        shared.printNum();
	    }        
	}

public class ThreadExam10 {
		
		public static void main(String[] args) {
			Shared obj = new Shared();
	        
	        Thread t1 = new Thread(new ThreadEx_10(obj));
	        Thread t2 = new Thread(new ThreadEx_10(obj));
	        
	        t1.setName("1번 Thread");
	        t2.setName("2번 Thread");

	        t1.start();
	        t2.start();
		}
		
	}