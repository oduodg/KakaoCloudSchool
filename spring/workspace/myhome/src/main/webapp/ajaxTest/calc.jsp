<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
int x = Integer.parseInt(request.getParameter("x"));
int y = Integer.parseInt(request.getParameter("y"));
String oper = request.getParameter("oper");
int result=0;
if(oper.equals("btn1"))
	result = x + y;
else if (oper.equals("btn2"))
	result = x - y;
else if (oper.equals("btn3"))
	result = x * y;
else
	result = x / y;
%>
<%-- <h3>결과는 <%=result%> 입니다.</h3> --%>
{"status":"success", "value":<%=result%>}