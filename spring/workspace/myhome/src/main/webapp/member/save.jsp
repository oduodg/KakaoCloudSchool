<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String userid=request.getParameter("userid");
	String password=request.getParameter("password");
	String username=request.getParameter("username");
	String phone=request.getParameter("phone");
	String email=request.getParameter("email");
	String address=request.getParameter("address");
%>
<%=userid%>
<%=password%>
<%=username%>
<%=phone%>
<%=email%>
<%=address%>