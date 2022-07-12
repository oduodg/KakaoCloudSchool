package com.kakao.test;

public class Account {
	private String accountHolder; // 예금주 
	private String accountNum; // 계좌번호
	private int balance; // 잔액
	
	Account(String accountHolder, String accountNum, int balance){
		this.accountHolder =accountHolder;
		this.accountNum = accountNum;
		this.balance = balance;
	}
	
	public String getAccountHolder() {
		return accountHolder;
	}

	public void setAccountHolder(String accountHolder) {
		this.accountHolder = accountHolder;
	}

	public String getAccountNum() {
		return accountNum;
	}

	public void setAccountNum(String accountNum) {
		this.accountNum = accountNum;
	}

	public int getBalance() {
		return balance;
	}
	
	public void setBalance(int balance) {
		this.balance = balance;
	}

	public void AccountInfo() {
		System.out.println("계좌 " + this.accountNum + " (예금주: " + this.accountHolder + ")");
		System.out.println("잔액: " + this.balance + "원");
	}
	
	public void deposit(int cash) { // 입금
		System.out.println(cash + "원 입금합니다.");
		balance += cash;
		System.out.println("잔액: " + this.balance + "원");
	}
	
	public void withdraw(int cash) { // 출금
		System.out.println(cash + "원 출금합니다.");
		balance -= cash;
		System.out.println("잔액: " + this.balance + "원");
		
	}
	
	public static void main(String[] args) {
		Account test = new Account("홍길동", "123-456789", 10000); // instance 생성
		test.AccountInfo();
		test.deposit(20000);
		test.withdraw(45000);	
	}
}
