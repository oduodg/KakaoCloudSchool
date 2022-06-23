<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	String username = request.getParameter("username");
	String phone = request.getParameter("phone");
	String email = request.getParameter("email");
%>
<%=username%>
<%=phone%>
<%=email%>
