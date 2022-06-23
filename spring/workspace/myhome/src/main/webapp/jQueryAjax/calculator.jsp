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
	x: <input type="text" name="x" id="x"> <br>
	y: <input type="text" name="y" id="y"> <br>
	<button id="btn1" type="button">Add</button>
	<button id="btn2" type="button">Sub</button>
	<button id="btn3" type="button">Mul</button>
	<button id="btn4" type="button">Div</button>
	<div id="result"></div>
</body>
</html>
<script>
	window.onload = function(){
		for(i=1; i<=4; i++)
			document.getElementById("btn"+i).addEventListener("click", add);
	}
	
	function add(event){
		let x = parseInt(document.getElementById("x").value);
		let y = parseInt(document.getElementById("y").value);
		let oper = event.target.id;
		
		$.ajax({ // method를 지정하지 않으면 default로 GET이 지정됨.
			url: "calc.jsp",
			data: {x:x, y:y, oper:oper},
			dataType:"json" // dataType이 json이면 parsing이 필요없다.
		})
		.done((res) => {
			if(res.result === "success"){
				$("#result").html(res.value);
			}
			else {
				$("#result").html("error");
			}
		})
		.fail((jx, msg) => {
		})
	}
</script>