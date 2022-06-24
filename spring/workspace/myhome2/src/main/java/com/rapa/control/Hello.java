package com.rapa.control;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Hello
 */

// http://127.0.0.1:9090/myhome2/hello
@WebServlet("/hello") // tomcat7부터 바뀜
public class Hello extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Hello() {
        super(); // 부모 생성자(사용안함) 
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    // GET 방식으로 전달될때 doGet 함수가 호출된다.
    // request - 클라이언트(브라우저)의 요청을 받아오는 객체 , was가 만들어준다.
    // response - 서버쪽에서 클라이언트(브라우저)에게 응답을 보낼 때 사용하는 객체이다.
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("utf-8"); // 한글 깨짐방지
		response.setCharacterEncoding("utf-8"); // 한글 깨짐방지
		System.out.println("print doget console");
		PrintWriter out = response.getWriter();
		
		out.print("<html>");
		out.print("<meta charset='utf-8'>"); // 한글 깨짐방지 
		out.print("<body>");
		out.print("<h1>Hello</h1>");
		out.print("<h1>안녕하세요</h1>");
		out.print("</body>");
		out.print("</html>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	// POST 방식으로 전달될때 doPost 함수가 호출된다.
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("print dopost console");
		doGet(request, response); // doGet을 호출해서 특별한 사항이 아니면 GET으로 오든 POST로 오든 처리함.
	}

}
