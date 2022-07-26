package member.vo;

public class Member {
	
	private String id;
	private String pw;
	private String name;
	
	
	/* 기본 생성자 */
	public Member() {
		
	}
	
	/* 필드 3개를 받는 생성자 */
	public Member(String id, String pw, String name) {
		super();
		this.id = id;
		this.pw = pw;
		this.name = name;
	}


	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPw() {
		return pw;
	}
	public void setPw(String pw) {
		this.pw = pw;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	
}
