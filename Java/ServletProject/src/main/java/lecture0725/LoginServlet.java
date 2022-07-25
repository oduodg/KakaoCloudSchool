package lecture0725;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/login")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1. 입력받고	
		// 한가지 주의해야 할 점은 ... 입력을 받을 때 사용되는 Stream의 encoding이 ISO-8859-1
		// servlet으로 넘어올 때 영문/숫자는 잘 받아오지만 한글은 제대로 못받아온다.
		// 만약 한글 데이터를 전달받으려면 약간의 처리를 해주어야 한다.
		// - GET방식인 경우 Tomcat의 입력 Stream의 encoding을 UTF-8로 변경
		// - POST방식인 경우 request.setCharacterEncoding("EUC-KR");
		String email = request.getParameter("userEmail");
		String pw = request.getParameter("userPassword");
		
		System.out.println(email + ", " + pw);
		// 2. 로직처리
		// 입력된 email과 password가 database table에 존재하는지 확인
		// JDBC code (데이터베이스 연결하기)
		String jdbcURL = "jdbc:mysql://localhost:3306/sqldb?characterEncoding=UTF-8&serverTimezone=UTC&useSSL=false";
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		boolean loginStatus = false; // 로그인 가능한지 여부 
		
		try {
			con = DriverManager.getConnection(jdbcURL, "root", "20170520");
			String sql = "SELECT * FROM tmpuser where email=? and password=?"; // 쿼리문 작성
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1,  email);
			pstmt.setString(2,  pw);
			
			rs = pstmt.executeQuery(); // 쿼리 실행
			
			if (rs.next()) { // 가져올 데이터가 있다면(email과 pw에 매칭이 되는지)
				loginStatus = true;
			}
		} catch (Exception e) {
			// TODO: handle exception
		} finally {
			// close 처리 진행!
		}
		
		// 3. 출력처리
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = new PrintWriter(response.getOutputStream()); // Stream 열기
		
		if(loginStatus) { // 로그인 가능하다면
			System.out.println("환영합니다.");
			out.println("환영합니다.");
		} else {
			System.out.println("로그인 실패");
			out.println("로그인에 실패했습니다.");
		}
		
		out.close();
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// - POST방식인 경우
		//request.setCharacterEncoding("EUC-KR");
	}

}
