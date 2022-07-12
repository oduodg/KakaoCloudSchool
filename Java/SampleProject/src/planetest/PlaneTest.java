package planetest;

public class PlaneTest {
	public static void main(String[] args) {
		// Airplane과 Cargoplane 객체 생성
		Airplane airplane = new Airplane("L747", 1000);
		Cargoplane cargoplane = new Cargoplane("C40", 1000);
		
		// 생성된 객체의 정보 출력
		System.out.println("Plane" + "\t" + "fuelSize");
		System.out.println("----------------");
		System.out.println(airplane.planeName + "\t" + airplane.fuelSize);
		System.out.println(cargoplane.planeName + "\t" + cargoplane.fuelSize);
		
		// Airplane과 Cargoplane 객체에 100씩 운항
		airplane.flight(100);
		cargoplane.flight(100);
		
		// 운항 후 객체의 변경된 정보 출력
		System.out.println();
		System.out.println("100 운항");
		System.out.println("Plane" + "\t" + "fuelSize");
		System.out.println("----------------");
		System.out.println(airplane.planeName + "\t" + airplane.fuelSize);
		System.out.println(cargoplane.planeName + "\t" + cargoplane.fuelSize);
		
		// Airplane과 Cargoplane 객체에 200씩 주유
		airplane.refuel(200);
		cargoplane.refuel(200);
		
		// 주유 후 객체의 변경된 정보 출력 
		System.out.println();
		System.out.println("200 주유");
		System.out.println("Plane" + "\t" + "fuelSize");
		System.out.println("----------------");
		System.out.println(airplane.planeName + "\t" + airplane.fuelSize);
		System.out.println(cargoplane.planeName + "\t" + cargoplane.fuelSize);
	}
}

abstract class Plane {
	String planeName;
	int fuelSize;
	
	// 기본 생성자 
	public Plane() {
		
	}
	
	// 2개의 클래스 변수를 받는 생성자
	public Plane(String planeName, int fuelSize) {
		this.planeName = planeName;
		this.fuelSize = fuelSize;
	}
	
	// 일정 양의 연료 주입, 기존 연료가 증가됨
	public void refuel(int fuel) {
		this.fuelSize += fuel;
	}
	
	// 일정 거리 만큼 운항, 연료 감소
	// 추상 함수 하위 객체에서 반드시 구현해야 함.
	public abstract void flight(int distance);
}

class Airplane extends Plane{
	
	// 기본 생성자
	public Airplane() {
		
	}
	
	// 2개의 클래스 변수를 받는 생성자
	public Airplane(String planeName, int fuelSize) {
		super(planeName, fuelSize);
	}

	@Override
	public void flight(int distance) {
		if(distance >= 10) {
			fuelSize -= (distance/10) * 30;
		}
	}
}

class Cargoplane extends Plane{
	
	// 기본 생성자
	public Cargoplane() {
		
	}
	
	// 2개의 클래스 변수를 받는 생성자
	public Cargoplane(String planeName, int fuelSize) {
		super(planeName, fuelSize);
	}
	
	@Override
	public void flight(int distance) {
		if(distance >= 10) {
			fuelSize -= (distance/10) * 50;
		}
	}
}