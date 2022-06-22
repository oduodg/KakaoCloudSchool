<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<% 
	System.out.println("Server");
	String userid = request.getParameter("userid");
	String userpw = request.getParameter("userpw");
%>
<%=userid %><br/>
<%=userpw %><br/>
</body>
</html>