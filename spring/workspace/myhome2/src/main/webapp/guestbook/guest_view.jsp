<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="com.rapa.control.guestbook.*" %>
<%@ page import="java.util.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>방명록</h1>
	
	<%GuestbookDto data = (GuestbookDto)request.getAttribute("dataView"); %>
	
	<%=data.getId()%><br>
	<%=data.getTitle()%><br>
	<%=data.getWriter()%><br>
	<%=data.getWdate()%><br>
	<%=data.getContents()%><br>
	
</body>
</html>