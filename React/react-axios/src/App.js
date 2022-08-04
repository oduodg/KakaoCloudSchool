import './App.css';
import axios from 'axios';

function App() {

  const option = {
    url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",
    method:  "get",
    params: {
      key: '83779bbd15a6ec888a41e5e2d2a60404',
      targetDt: '20220801'
    },
    responseType: 'json'
  };

  const callAjax = () => {
    axios(option)
    .then(function(response){ // 성공하면 수행
      console.log(response.data);
    })
    .catch(function(){ // 실패하면 수행
      console.log("error!!!");
    })
    .finally(() => { // 성공, 실패 여부와 관계없이 무조건 수행
      console.log("무조건 출력");
    })
  }

  return (
    <div>
      <button onClick={callAjax}>서버 호출!!</button>
    </div>
  );
}

export default App;
