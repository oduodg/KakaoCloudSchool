<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script src="<%=request.getContextPath()%>/js/jquery-3.6.0.min.js"></script>	
</head>
<body>
	<%=request.getContextPath()%>
	url: http://127.0.0.1:9090/myhome/jQueryPractice/sample.jsp
</body>
</html>
<script>
$(()=> {
	alert("루트부터 시작 잘될까?");
});
</script>