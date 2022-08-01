// event handler

/*
function myFunc(){
	// 현재 선택된 option이 무엇인지 알아봅시당
	$("#myDiv").text($("option:selected").text());
}

function printRegion() {
	// 먼저 checkbox를 찾아요!
	// 속성 선택자와 상태 선택자를 이용해서 찾아보자.
	// $("[type=checkbox]:checked + span") -> 체크된 체크박스의 바로 다음에 나오는 형제 span 태그를 선택
	//console.log($("[type=checkbox]:checked + span").text());
	
	// 선택된 checkbox를 개별적으로 처리해보자!
	// each() 안에는 콜백함수가 와요!
	$("[type=checkbox]:checked + span").each(function(idx, item){
		// idx: index를 의미하고 0부터 1씩 증가한다.
		// item: 현재 수행시키려는 문서 객체를 지정
		console.log($(item).text());
	});
}
*/

// 이렇게 하면 안돼요!!
// 아직 li가 만들어지지 않았어요!
/*
$("li").on("click", function(){
	alert("소리없는 아우성!!")
});
*/

// ready라는 event가 있는데 이 event는 로딩되어사 사용할 준비가 끝났을 때 발생하는 event
// document가 ready되면.. 다시 말해서 내용이 출력되기 위해 DOM이 생성되었다는 의미.
// $(document).on("ready", function()){}
// 축약형으로 쓰기
// $(document).ready(function(){}
// $(document).ready()를 $()로 축약해서 쓸 수 있다.
// 최종적으로 $(document).on("ready", function()){};
// -> $(document).ready(function(){};
// -> $(function(){}); 로 축약할 수 있다.
 
$(function(){
	/*
	$("li").on("click", function(){ // 이 function 자체가 event handler임.
	//alert("소리없는 아우성!!")
	// 지금 발생한 이벤트의 source(event가 발생한 객체)를 알고 싶어요!
	// this가 event handler에서 사용될 경우 this는 event가 발생한 객체를 의미한다.
	// 이 this는 event source에 대한 문서 객체가 돼요!
	// 우리는 jQuery를 하고 있고 문서객체를 jQuery객체로 변환해서 사용한다.
	alert($(this).text());
	})
	*/
	// 축약형으로 사용하기
	$("li").click(function(){
		alert($(this.text()));
	})
});




function myFunc(){
	// method를 알아보아요!
	// css() style을 변경시켜요! => repaint가 발생해요!(결과적으로 느려져요!)
	//$("#myDiv").css("color", "red");
	//$("#myDiv").css("background-color", "yellow");
	
	// 클래스로 한번만 지정하므로 렌더링이 한번만 일어난다. => 훨씬 효율적!
	//$("#myDiv").addClass("myClass"); // style 처리는 이 방식으로 처리해야 해요!
	
	// removeClass() style을 제거할 때 사용!
	
	// text() : tag 사이의 글자 가져오는 method
	// text("변경!!") : tag 사이의 글자를 변경시키는 method
	//$("#myDiv").text();
	
	// val(): 사용자 입력 양식(입력상자) 안에 들어있는 값을 가져오는 method
	// val("값을 변경해요!"): 사용자 입력 양식(입력상자)안에 값을 변경하는 method
	
	// attr(): 속성의 값을 알아오거나 혹은 수정할 때 사용해요!
	//console.log($("input[type=text]").attr("size")); // size 속성의 값을 알아와요!
	//$("input[type=text]").attr("size", "30"); // size 속성의 값을 변경
	
	// removeAttr(size"): 특정 속성을 제거
	
	// each(): 반복처리할 때 사용!
	
	// remove(): 찾은 element를 삭제
	//$("#myDiv").remove();
	
	// empty(): 삭제는 삭제인데... 찾은 element는 삭제하지 않고 그 후손들만 삭제
	// 여기까지는 모두 일단 내가 제어하길 원하는 element를 먼저 찾고 method를 적용..
	
	// 그러면 새로운 element를 추가하려면 어떻게 해야 하나요??
	// <li></li> 먼저 element부터 만들고
	// <li></li> 태그 사이에 글자를 넣어야 해요! => text() method를 활용!
	//$("<li></li>").text("강감찬"); // <li>강감찬</li>
	//let li = $("<li></li>").text("강감찬");
	
	// 원하는 element를 만들었으니 이제 원하는 위치에 붙여야 해요!
	// 화면에 element를 붙이기 위해서는 총 4개의 method가 있어요!
	
	// 1. append(): 맨 마지막 자식으로 붙여요!
	//$("ul").append(li);
	
	// 2. prepend(): 맨 처음 자식으로 붙여요!
	//$("ul").prepend(li);
	
	// 3. after(): 바로 뒤에 형제로 붙여요!
	//$("li:eq(2)").after(li); // eq는 순번을 의미한다. nth-child()와 비슷하다. 
	// eq()는 인덱스가 0부터 시작하고, nth-child()는 1부터 시작한다.
	
	// 4. before(): 형제로 바로 앞에 붙여요!
	//$("li:eq(2)").before(li);
	
	// Event 처리
	// on() method는 event를 등록하는 method(event 발생 시 실행을 지정!)
}