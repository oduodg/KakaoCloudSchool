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
		<h3 style="margin-top:50px">회원가입</h3>
		<div style="margin-top:20px">
			<form name="myform" id="myform" method="post">
				<input type="hidden" id="idcheckyn" value="N">
				
				<!-- 아이디 입력 -->
				<div class="input-group mb-3">
    				<input type="text" class="form-control" placeholder="아이디를 입력하세요." name="userid" id="userid">
    				<div class="input-group-append">
    					<button class="btn btn-success" id="btnIdCheck" type="button">중복체크</button>
					</div>    		
  				</div>
  				
  				<!-- 비밀번호 입력 -->
  				<div class="input-group mb-3">
    				<input type="text" class="form-control" placeholder="패스워드를 입력하세요." name="password" id="password">
				</div>
				
				<!-- 이름 입력 -->
				<div class="input-group mb-3">
    				<input type="text" class="form-control" placeholder="이름을 입력하세요." name="username" id="username">
				</div>
				
				<!-- 전화번호 입력 -->
				<div class="input-group mb-3">
    				<input type="text" class="form-control" placeholder="전화번호를 입력하세요." name="phone" id="phone">
				</div>
				
				<!-- 이메일 입력 -->
				<div class="input-group mb-3">
    				<input type="text" class="form-control" placeholder="이메일을 입력하세요." name="email" id="email">
				</div>
				
				<!-- 주소 입력 -->
				<div class="input-group mb-3">
    				<input type="text" class="form-control" placeholder="주소를 입력하세요." name="address" id="address">
				</div>
				
				<!-- 파일 첨부 -->
				<div class="input-group mb-3">
    				<input type="file" class="form-control" placeholder="선택된 파일없음" name=file" id="file">
				</div>
				
				<!-- 회원가입 버튼 -->
				<div class="input-group mb-3" style="justify-content:center">
					<button class="btn btn-success" id="btnSave" type="button">회원가입</button>
				</div>
			</form>
		</div>
	</div>
</body>
</html>
<!-- 
	ID 중복체크	idcheck.jsp
	userid 	 -> "test" 	{"result": "false"}
					그밖에 경우는 {"result": "true"}
					
					true이면 idcheckyn 필드의 값을 Y로 바꾼다.
					jquery의 경우 prop("readonly", true)
 -->
 
 <script>
 	$(() => {
 		$("#btnIdCheck").click(()=>{
 			$.ajax({
 				url: "idcheck.jsp",
 				data:{"userid":$("#userid").val()},
 				dataType:"json",
 				method:"POST"
 			})
 			.done((res) =>{
 		 		if (res.result == true){
 		 			alert("사용가능한 아이디입니다.");
 		 			$("#idcheckyn").val("Y");
 		 			$("#userid").prop("readonly", true);
 		 		} else{
 		 			alert("이미 사용중인 아이디입니다.");
 		 		}
 		 	})
 		 	.fail((jqXhr, error) => {
 				console.log(error);
 			})
 		});
 		
 		$("#btnSave").click(() => {
 			let parameter = "userid=" + $("#userid").val() + "&password=" + $("#password").val();
 			 	parameter += "&username=" + $("#username").val() 
 			 	parameter += "&phone=" + $("#phone").val();
 			 	parameter += "&email=" + $("#email").val();
 			 	parameter += "&address=" + $("#address").val();
 			 
 			console.log(parameter);
 			// form 직렬화는 form 태그에 enctype이 지정되어 있으면 직렬화 수행이 안된다. 
 			console.log("직렬화");
 			parameter = $("#myform").serialize();
 			console.log(parameter);
 			/*  
 			// enctype이 지정되어 있을 때 
 			const formData = new FormData(document.myform);
 			// 첨부파일이 있으면 첨부파일을 별도로 추가를 해야한다.
 			formData.append("upload", file.files[0])
 			
 			console.log(formData);
 			for (key of formData.keys()){
 				console.log(key, formData.get(key));
 			}
 			 */
 			$.ajax({
 				url: "save.jsp",
 				data: parameter,
 				dataType:"text",
 				method:"POST"
 			})
 			.done((res) =>{
 		 		console.log(res);
 		 		
 		 	})
 		 	.fail((jqXHR, error) => {
 				console.log(error);
 				location.href="<%=request.getContextPath()%>/index.jsp";
 			})
 		})
 	})
 </script>