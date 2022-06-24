<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="com.rapa.control.guestbook.GuestbookDto" %>
<%@ page import="java.util.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
label {
	float: left;
	width: 50px;
}
</style>
</head>
<body>
	<h1>방명록</h1>
	
	<form name="form">
	<label for="title">제목: </label>
	<input type="text" name="title" id="title"><br>
	<label for="writer">작성자: </label>
	<input type="text" name="writer" id="writer"><br>
	<label for="contents">내용: </label>
	<textarea name="contents" name="contents" id="contents" rows="5" cols="80"></textarea><br>
	
	<button type="button" id="btnSend">등록</button>
	</form>
	
</body>
</html>
<script>
window.onload = function(){
	document.getElementById("btnSend").addEventListener("click", function(){
		let frm = document.form;
		frm.action = "/myhome2/guest.do?cmd=save";
		frm.method = "post";
		frm.submit();
	})
}
</script>