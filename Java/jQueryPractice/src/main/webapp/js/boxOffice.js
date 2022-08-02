function getData() {
	// 서버프로그램을 호출해서 결과를 받아와서 화면처리해요!
	// 비동기 방식으로 처리
	// AJAX를 이용해서 처리해 보아요!
	$.ajax({
		async: true, // AJAX 기본 동작방식(비동기 방식)
		url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json", // 요청할 url
		type: 'GET', // 요청 방식
		data: { // 서버쪽 URL에 붙여서 보낼 데이터
			key: '83779bbd15a6ec888a41e5e2d2a60404',
			targetDt: $("#searchDate").val().replace(/-/g, '') // 2022-07-30 => '-' 제거
		},
		timeout: 3000, // 1000분의 1초 단위. 이 시간내에 서버로부터 결과가 안오면 실패로 간주한다.
		dataType: "json",
		success: function(result) { //success 뒤에 익명함수가 붙는다. 
			// 만약 서버 호출이 성공하면 이 함수가 호출된다.
			// result는 서버가 전달해 준 JSON에 대한 JavaScript 객체
			//console.log(result);
			// 얻어온 값을 jQuery를 이용해서 tag를 만들어야 해요!
			// 그리고 DOM에 붙어요! 

			//<tr>
			//<td>1</td>
			//<td>poster</td>
			//<td>data</td>
			//<td>placeholder</td>
			//<td>text</td>
			//</tr>
			
			$('tbody').empty(); //tbody 안에 기본적으로 들어가있던 내용 삭제

			let movieList = result['boxOfficeResult']['dailyBoxOfficeList'];
			for(let i =0; i<movieList.length; i++){
				movieRank = result['boxOfficeResult']['dailyBoxOfficeList'][i]['rank'];
				movieName = result['boxOfficeResult']['dailyBoxOfficeList'][i]['movieNm'];
				movieCd = result['boxOfficeResult']['dailyBoxOfficeList'][i]['movieCd'];
				
				let posterTd = $("<td></td>");
				posterTd.attr('width', '3em');
				let posterImg = $("<img />");
				
				let actorTd = $("<td></td>");

				$.ajax({
					url: "https://dapi.kakao.com/v2/search/image",
					type: "GET",
					headers: {
						"Authorization": "KakaoAK ca931585a58486996129aef4f89fcf6b"
					},
					data: {
						query: movieName + "포스터"
					},
					timeout: 3000,
					dataType: "json",
					success: function(imgResult) {

						moviePoster = imgResult["documents"][0]["image_url"];

						posterImg.attr('src', moviePoster);
						posterImg.attr('width', '200px');
						posterImg.attr('referrerpolicy', "no-referrer");
					},
					error: function() {
						console.log("kakao api error");
					}
				});
				
				$.ajax({
					url: " http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json",
					type: "GET",
					data: {
						key: "83779bbd15a6ec888a41e5e2d2a60404",
						movieCd: movieCd
					},
					timeout: 3000,
					dataType: "json",
					success: function(actorResult){
						//console.log(actorResult);
						movieActor = actorResult["movieInfoResult"]["movieInfo"]["actors"];
						if (movieActor.length == 0){
							movieActor = "no actor";
						} else {
							movieActor = movieActor[0]["peopleNm"];
						}
						actorTd.text(movieActor);
					},
					error: function(){
						console.log("actor api error");
					}
				})	

				let tr = $("<tr></tr>"); // <tr></tr>
				// 순위
				let orderTd = $("<td></td>").text(movieRank); // <td>1</td>
				orderTd.attr('valign', 'middle');
				tr.append(orderTd); // <tr>1</tr>
				// 포스터
				posterTd.append(posterImg)
				tr.append(posterTd);
				// 제목
				let titleTd = $("<td></td>").text(movieName); // <td>한산:용의 대첩</td>
				titleTd.attr('valign', 'middle');
				tr.append(titleTd);
				// 배우
				actorTd.attr('valign', 'middle');
				tr.append(actorTd);
				//삭제
				let deleteTd = $("<td></td>");
				deleteTd.attr('valign', 'middle');
				let deleteBtn = $("<button></button>").text("delete");
				deleteBtn.attr('type', 'button');
				deleteBtn.addClass("btn btn-danger");
				deleteBtn.click(function() {
					$(this).closest('tr').remove();
				});
				deleteTd.append(deleteBtn);
				tr.append(deleteTd);
				
				$('tbody').attr('vertical-align', 'center');
				$('tbody').append(tr); // tbody에 tr 붙이기
			}
			
		},
		error: function() {
			// 만약 서버 호출이 실패하면 이 함수가 호출된다.
			alert('먼가 이상해요!!');
		}
	});
}
