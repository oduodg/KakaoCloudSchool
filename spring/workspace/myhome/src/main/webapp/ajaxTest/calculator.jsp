<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
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
		
		let url = "calc.jsp?x="+ x + "&y=" + y + "&oper=" + oper;
		console.log(url);
		
		let xhttp = new XMLHttpRequest();
		xhttp.onload = function(){
			// console.log(this.responseText); 
			let data = JSON.parse(this.responseText); // 파싱작업을 해서 String -> JSON 객체로 전환
			if(data.status == "success")
				//document.getElementById("result").innerHTML = this.responseText;
				document.getElementById("result").innerHTML = "값은 " + data.value + " 입니다.";
			else
				document.getElementById("result").innerHTML = "에러발생";
		}

		xhttp.open("GET", url, true);
		xhttp.send();
	}
</script>