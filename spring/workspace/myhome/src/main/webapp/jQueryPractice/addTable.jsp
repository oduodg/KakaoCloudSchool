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
	let data = [
		{id:1, title:"그리고 아무도 없었다", writer:"아가사크리스티", hit:5},
		{id:2, title:"네개의 서명", writer:"아서 코난 도일", hit:450},
		{id:3, title:"바스커빌가의 개", writer:"아서 코난 도일", hit:50},
		{id:4, title:"앵무새 죽이기", writer:"하퍼 리", hit:5000},
		{id:5, title:"나의 라임오렌나무", writer:"JM 바스콘셀레스", hit:1500}
	];
	
	$(()=>{
		init();
		/* $("#mytable > tbody:last")
		.append('<tr><td>1</td><td>제목</td><td>작성자</td><td>10</td></tr>') */
	});
	
	function init(){
		data.forEach((item) => {
			let tmp = "<tr>"
			tmp += "<td>" + item.id + "</td>";
			tmp += "<td>" + item.title + "</td>";
			tmp += "<td>" + item.writer + "</td>";
			tmp += "<td>" + item.hit + "</td>";
			tmp += "</tr>";
			//$("#mytable > tbody:last").append(tmp);
			$("#tbody:last").append(tmp);
		});
		
		data.forEach((item) => {
			$("#bookList").append("<li>"+item.title+"</li>");
		});
	};
</script>