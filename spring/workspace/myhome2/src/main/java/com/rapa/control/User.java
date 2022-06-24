package com.rapa.control;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/user")
public class User extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
    public User() {
        super();
   
    }     
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    	req.setCharacterEncoding("utf-8");
    	resp.setCharacterEncoding("utf-8");
    		
  		String userid = req.getParameter("userid");
   		String username = req.getParameter("username");
   		
   		PrintWriter out = resp.getWriter();
   		out.println("<html>");
   		out.println("<meta charset='utf-8'>");
   		out.println("<body>");
   		out.println("<h1>아이디: " + userid + "</h1>");
   		out.println("<h1>이름: " + username + "</h1>");
   		out.println("</body>");
   		out.println("</html>");
   		}
        
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    	doGet(req, resp);
    }
}
