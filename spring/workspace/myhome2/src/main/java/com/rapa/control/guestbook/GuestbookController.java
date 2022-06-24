package com.rapa.control.guestbook;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.rapa.common.CommonUtil;

/**
 * Servlet implementation class GuestbookController
 */
@WebServlet("/guest.do")
public class GuestbookController extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	GuestbookDao dao = new GuestbookDao();
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GuestbookController() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		String cmd = CommonUtil.nullToValue(request.getParameter("cmd"),"list");
		if(cmd.equals("list"))
			doList(request, response);
		else if(cmd.equals("view"))
			doView(request, response);
		else if(cmd.equals("write"))
			doWrite(request, response);
		else if(cmd.equals("save"));
			doSave(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

	void doList(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setAttribute("dataList", dao.getlist());
		
		RequestDispatcher rd = request.getRequestDispatcher("/guestbook/guest_list.jsp");
		rd.forward(request, response);
	}
	
	void doView(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String id = request.getParameter("id");
		System.out.println(id);
		
		request.setAttribute("dataView", dao.getView(Integer.parseInt(id)-1));
		
		RequestDispatcher rd = request.getRequestDispatcher("/guestbook/guest_view.jsp");
		rd.forward(request, response);
	}
	
	void doWrite(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		RequestDispatcher rd = request.getRequestDispatcher("/guestbook/guest_write.jsp");
		rd.forward(request, response);		
	}
	
	void doSave(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		GuestbookDto dto = new GuestbookDto();
		dto.setTitle(request.getParameter("title"));
		dto.setContents(request.getParameter("contents"));
		dto.setWriter(request.getParameter("writer"));
		dto.setWdate("2022-06-24");
		
		dao.insert(dto);
		
		response.sendRedirect(request.getContextPath() + "/guest.do?cmd=list");
	}
}
