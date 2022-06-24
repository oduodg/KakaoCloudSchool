<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
String userid=request.getParameter("userid");
Boolean useYn;
if(userid.equals("test"))
	useYn=false;
else
	useYn=true;
%>
{"result":<%=useYn%>}