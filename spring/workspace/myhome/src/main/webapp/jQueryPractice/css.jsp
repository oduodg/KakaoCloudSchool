<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"
	integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
	crossorigin="anonymous"></script>
<style>
.blue {
	color: blue;
}
.backgroundYellow{
	padding: 10px;
	background-color: #ffff00;
}
</style>
</head>
<body>
	<h1>클래스를 추가해보자</h1>
	<h1>나도</h1>
	<p>p태그에도 추가해보자</p>
	<h2>나도</h2>
	
	<button id="btnAdd" type="button">클래스 추가</button>
	<button id="btnDel" type="button">클래스 삭제</button>
</body>
</html>
<script>
$(()=>{
	$("#btnAdd").click(()=>{
		$("h1, h2, p").addClass("blue backgroundYellow");
	});
	$("#btnDel").click(()=>{
		$("h1, h2, p").removeClass("blue backgroundYellow");
	});
});
</script>