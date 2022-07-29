function myFunc(){
	// jQuery를 사용해 보아요!
	
	// 1. 내가 원하는 Element를 찾아서 jQuery 객체로 변환
	// HTML Element를 referencing하는 jQuery 객체를 생성해 보아요!
	// selector를 이용하면 돼요!
	
	// 1-1. 전체 선택자(universal selector)
	// $("문자열 형태로 selector를 명시")
	// 기호로 "*"
	//$("*").css("color", "red"); // 모든 element의 color를 red로 바꾸세요.
	// $("*")는 모든 Element를 지칭한다.
	// css 함수는 스타일을 변환시키기 위한 함수
	
	// 1-2. 태그 선택자(tag selector)
	//alert($("div").text());
	// $("div")는 div 태그만 선택
	// text 함수는 text값을 가져온다. 여기서 말하는 text는(열린)태그와 (닫힌)태그 사이에 있는 text를 말한다. 
	// text 함수에 인자를 전달하면 해당 인자로 text값을 바꾼다.
	//$("div").text("Hi");
	
	// 1-3. 아이디 선택자(ID selector)
	// 기호로 "#"
	//$("#myLi").remove();
	// remove 함수는 해당 element를 삭제한다.
	
	// 1-4. 클래스 선택자(class selector)
	// 기호로 "."
	//$(".haha").css("background-color", "yellow");
	// class가 haha인 element의 background-color를 yellow로 바꾼다.
	
	// 1-5. 구조 선택자
	// 기호로 ">"(자식 선택자)
	// 기호로 " "(후손 선택자) (공백을 나타낸다.)
	//$("div li").css("color", "blue");
	// div 태그의 후손(자식부터 자식의 자식의 자식.. ~ 까지 전부)인 li를 선택한다.
	
	//$("ul.myclass > li").css("color", "orange");
	// 클래스가 myclass인 ul태그의 자식 태그인 li의 color를 orange로 바꾼다. 
	
	// 기호로 "+" (바로 다음에 나오는 형제)
	// 기호로 "~" (다음에 나오는 형제 전부)
	
	//$("#seoul + li").remove();
	// id가 seoul인 element의 바로 다음에 나오는 형제인 li 태그를 선택한다.
	//$("#seoul ~ li").remove();
	// id가 seoul인 element의 형제 li 태그 전부를 선택한다.	
	
	// (참고) 특수 선택자
	// 기호로 :
	//$("ul.myclass > li:first + li").css("color", "green");
	// class가 myclass인 ul태그의 자식인 li태그 중 첫번째(first) element의 바로 다음에 나오는 형제인 li를 선택한다.
	
	//$("ul.myclass > li:last").css("color", "purple");
	// class가 myclass인 ul태그의 자식인 li태그 중 마지막(last) element를 선택한다.
	
	//$("ul.myclass > li:nth-child(2)").remove();
	// class가 myclass인 ul태그의 자식인 li태그 중 2번째 element를 선택한다.
	
	// 1-6. 속성 선택자
	// 기호로 "[]"
	//alert($("[size]").val());
	// size 속성을 가지고 있는 element 선택
	//val은 사용자가 입력한 값을 가지고 온다.
	//$("[size=30]").val("값을 변경해요!");
	// size 속성을 가지고 있고 그 값이 30인 element를 선택
	// val 함수에 인자를 전달하면 그 인자로 해당 값을 변경한다.
}