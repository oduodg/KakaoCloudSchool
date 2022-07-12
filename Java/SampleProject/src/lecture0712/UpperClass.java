package lecture0712;

// 추상 클래스(abstract class)
public abstract class UpperClass {
	// field
	String name;
	int age;
	
	// method
	public abstract void printAll(); // abstract method
}

class subClass extends UpperClass{
	
	@Override
	public void printAll() {
		// TODO Auto-generated method stub
		
	}
}