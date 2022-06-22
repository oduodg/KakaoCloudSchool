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
</head>
<body>
	<input type="text" name="numbers" id="numbers1" value="1"><br>
	<input type="text" name="numbers" id="numbers2" value="3"><br>
	<input type="text" name="numbers" id="numbers3" value="11"><br>
	<input type="text" name="numbers" id="numbers4" value="21"><br>
	<input type="text" name="numbers" id="numbers5" value="14"><br>
	<input type="text" name="numbers" id="numbers6" value="11"><br>
	<input type="text" name="numbers" id="numbers7" value="12"><br>
	<input type="text" name="numbers" id="numbers8" value="10"><br>
	<input type="text" name="numbers" id="numbers9" value="19"><br>
	<input type="text" name="numbers" id="numbers10" value="17"><br>
	---------------------------------------------<br>
	<div id="result"></div>
	<button id="btnAdd" type="button">합산하기</button>
	<button id="btnAdd2" type="button">합산하기2</button>
	
</body>
</html>
<script>
	$(()=>{
		$("#btnAdd").click(() => {
			let result = 0;
			$("input[type=text][name=numbers]").each(function(){
				result += parseInt($(this).val());	
			});
			$("#result").html(`<h1>name으로 합산: \${result}</h1>`);
		});
		
		$("#btnAdd2").click(() => {
			let result = 0;
			for (let i = 1; i <= 10; i++){
				result += parseInt($("#numbers"+i).val());
			};
			$("#result").html(`<h1>id로 합산: \${result}</h1>`);
		});
	});
</script>