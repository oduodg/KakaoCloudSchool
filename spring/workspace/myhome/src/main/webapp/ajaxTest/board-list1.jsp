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
	<div class = "container">
		<h2>테이블</h2>
		<p></p>
		<table class="table" id="mytable">
			<thead class="thead-dark">
				<th>번호</th>
				<th>제목</th>
				<th>작성자</th>
				<th>조회수</th>
			</thead>
			<tbody id="tbody">
			</tbody>
		</table>
		<p></p>
		<ul id="bookList">
		</ul>
	</div>
</body>
</html>
<script>
	window.onload = function(){
		init();
	}
	
	function init(){
		let url = "json2.jsp";
		console.log(url);
		let xhttp = new XMLHttpRequest();
		
		xhttp.onload = function(){
			let result = JSON.parse(this.responseText);
			console.log(result);
			let totalCnt = result.totalCnt;
			let data = result.data;
			
			let tbody = document.getElementById("tbody");
			data.forEach((item) => {
				let row = tbody.insertRow(tbody.rows.length);
				row.insertCell(0).innerHTML = item.id;
				row.insertCell(1).innerHTML = item.title;
				row.insertCell(2).innerHTML = item.writer;
				row.insertCell(3).innerHTML = item.hit;
			});
		}
		
		xhttp.open("GET", url, true);
		xhttp.send();
	}
</script>