package member.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import member.service.MemberService;
import member.vo.Member;

/**
 * Servlet implementation class LoginController
 */
@WebServlet("/login")
public class LoginController extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginController() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 1. 입력 -> Servlet이 담당
		String id = request.getParameter("userID");
		String pw = request.getParameter("userPW");
		
		// 2. 로직처리 -> service()가 담당
		// 로직처리하기 위해서 service 객체를 생성(service class가 필요)
		// 클라이언트에서 입력받은 데이터를 service에 전달하기 위해 VO가 필요!
		// VO를 만들기 위해 class가 있어야 한다!
		Member member = new Member();
		member.setId(id);
		member.setPw(pw);
		
		MemberService service = new MemberService();
		member = service.login(member);
		
		// 3. 출력
		// 로그인에 성공하면 VO 객체 안에 로그인한 사람의 이름이 들어가 있어요!
		if (member != null) {
			// 로그인에 성공하면 JSP를 이용해서 출력해야 해요!!
			// 사용자의 이름은 member 객체에 들어가 있다.
			// member VO객체를 JSP에게 전달해야 한다!
			// 즉 controller servlet이 request를 전달해서 다른 서블릿(JSP)을 호출
			RequestDispatcher rd = request.getRequestDispatcher("/member/loginSuccess.jsp");
			request.setAttribute("member", member);
			rd.forward(request, response);
			
		} else {
			response.sendRedirect("/book/member/loginFail.html");
		}
	}

}
