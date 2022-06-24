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
	<form name="form">
	<input type="hidden" name="cmd" id="cmd">
	<%List<GuestbookDto> dataList = (List<GuestbookDto>)request.getAttribute("dataList"); %>
	
	<table>
	<%
		for(int i = 0; i < dataList.size(); i++){
			GuestbookDto dto = dataList.get(i);
	%>
		<tr>
			<td><%=dto.getId()%></td>
			<td><a href="<%=request.getContextPath()%>/guest.do?cmd=view&id=<%=dto.getId()%>"><%=dto.getTitle()%></a></td>
			<td><%=dto.getWriter()%></td>
			<td><%=dto.getWdate()%></td>
			<td><%=dto.getHit()%></td>
		</tr>
	<%} %>	
	</table>
	
	<button type="button" id="btnWrite">글쓰기</button>
	</form>
</body>
</html>
<script>
window.onload = function(){
	document.getElementById("btnWrite").addEventListener("click", function(){
		let frm = document.form;
		frm.cmd.value = "write";
		frm.action="/myhome2/guest.do";
		frm.method="get";
		frm.submit();
	})
}
</script>