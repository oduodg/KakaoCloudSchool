package lecture0725;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class TestServlet
 */
@WebServlet("/hello")
public class TestServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public TestServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1. 입력받는다.
		// 2. 로직처리한다.
		// 3. 클라이언트에게 결과를 출력한다.
		// 	  클라이언트에게 특정 문자열을 출력해야 되기 때문에 OutputStream이 필요하다.
		response.setContentType("text/html; charset=UTF-8"); // head 작성 
		PrintWriter out = new PrintWriter(response.getOutputStream()); //getOutputStream이 사용하기 불편하기 때문에 PrintWriter와 결합해서 사용한다.
		out.println("<html><head><body><h1>하이하이</h1></body></head></html>"); // Stream을 통해 문자열 내보내기
		out.close(); // Stream 닫아주기 		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
