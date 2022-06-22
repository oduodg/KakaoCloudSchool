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
<style>
	body {
		margin: 20px 20px;
	}
	li {
		list-style:none;
	}
	label {
		float: left;
		width: 50px;
	}
</style>
</head>
<body>
	<ul>
		<li>
			<label for="name">name</label>
			<input type="text" id="name">
		</li>
		<li>
			<label for="kor">kor</label>
			<input type="text" id="kor">
		</li>
		<li>
			<label for="eng">eng</label>
			<input type="text" id="eng">
		</li>
		<li>
			<label for="math">math</label>
			<input type="text" id="math">
		</li>
	</ul>
	<br>
	<button type="button" id="addScore"
	>add</button>
	<div class = "container">
		<p></p>
		<table class="table" id="scoreTable">
			<thead class="thead-dark">
				<th>name</th>
				<th>kor</th>
				<th>eng</th>
				<th>math</th>
				<th>avg</th>
			</thead>
			<tbody id="tbody">
			</tbody>
		</table>
	</div>
</body>
</html>
<script>
	$(() => {
		$("#addScore").click(() => {
			let total = parseInt($("#kor").val()) + parseInt($("#eng").val()) + parseInt($("#math").val());
			let avg = total/3;
			console.log(total);
			console.log(avg);
			let item = "<tr>"
			item += "<td>" + $("#name").val() + "</td>";
			item += "<td>" + $("#kor").val() + "</td>";
			item += "<td>" + $("#eng").val() + "</td>";
			item += "<td>" + $("#math").val() + "</td>";
			item += "<td>" + avg + "</td>";
			
			$("#scoreTable").append(item);
		});
	});
</script>