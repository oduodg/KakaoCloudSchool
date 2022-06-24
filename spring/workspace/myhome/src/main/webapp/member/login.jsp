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
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous">
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
	integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
	crossorigin="anonymous"></script>
</head>
<body>
<div class="container">
	<form action="/action_page.php">
  		<div class="mb-3 mt-3">
    		<label for="userid" class="form-label">ID:</label>
    		<input type="text" class="form-control" id="userid" placeholder="Enter ID">
  		</div>
  		<div class="mb-3">
    		<label for="pwd" class="form-label">Password:</label>
    		<input type="password" class="form-control" id="pwd" placeholder="Enter password">
  		</div>
  
  		<button type="button" class="btn btn-primary" id="btnLogin">Submit</button>
	</form>
</div>
</body>
</html>
<script>
$(()=> {
	$("#btnLogin").click(()=>{
		console.log($("#userid").val());
		console.log($("#pwd").val());
		$.ajax({
			url:"login_proc.jsp",
			data: {userid:$("#userid").val(), pwd:$("#pwd").val()},
			dataType: "json",
			method: "POST"
		})
		.done((res)=>{
			if(res.result=="success"){
				alert("로그인 성공");
				location.href="<%=request.getContextPath()%>/test.jsp";
			}
			else
				alert("로그인 실패");
		})
		.fail((jqXHR, error)=>{
			console.log(error);
		})
	});
})
</script>