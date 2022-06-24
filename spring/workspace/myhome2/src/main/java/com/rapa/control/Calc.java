package com.rapa.control;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.rapa.common.CommonUtil;

/**
 * Servlet implementation class Calc
 */
@WebServlet("/calc")
public class Calc extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Calc() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
  		String sX = CommonUtil.nullToValue(request.getParameter("x"));
  		String sY = CommonUtil.nullToValue(request.getParameter("y"));
  		String oper = CommonUtil.nullToValue(request.getParameter("oper"), "1");
  		
  		int nX = Integer.parseInt(sX);
  		int nY = Integer.parseInt(sY);
   		String result = "";
  		if (oper.equals("1"))
  			result = String.format("%d + %d = %d", nX, nY, nX+nY);
  		else if (oper.equals("2"))
  			result = String.format("%d - %d = %d", nX, nY, nX-nY);
  		else if (oper.equals("3"))
  			result = String.format("%d * %d = %d", nX, nY, nX*nY);
  		else
  			result = String.format("%d / %d = %d", nX, nY, nX/nY);
  		
  		
   		PrintWriter out = response.getWriter();
   		out.println("<html>");
   		out.println("<body>");
   		out.println("<h1>" + result + "</h1>");
   		out.println("</body>");
   		out.println("</html>");
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}