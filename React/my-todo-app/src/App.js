import React, { useState } from 'react'
import "./App.css";

// render() method가 존재하지 않아요!
// 우리 함수의 return 값이 JSX
export default function App() {

  // todoData는 변수 이름이면서 getter 역할을 한다.
  // setTodoData는 setter 이다.
  // useState라는 react hook을 이용
  // useState의 인자는 초기값을 넣어준다.
  const [todoData, setTodoData ] = useState([
    {
      id: "1",
      title: "운동하기",
      completed: false
    },
  ]
  );

  const [value, setValue] = useState("");

  /* const를 붙여서 상수화 시킨다. */
  const btnStyle = {
    backgroundColor: "white",
    color: "Red",
    border: "none",
    padding: "5px 9px",
    borderRadius: "6px",
    cursor: "pointor",
    float: "right",
  }
  
  const getStyle = (completed) => {
    return {
      padding: "20px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through": "none",
      fontSize: "14pt"
    }
  }

  /* 삭제하기 */
  const deleteClick = (id) => {
    const newTodoData = todoData.filter(data => data.id !== id);
    setTodoData(newTodoData);
  }

  /* 새로운 할 일 입력 */
  const handleChange = (e) => {
    setValue(e.target.value);
  }

  /* 새로운 할 일 목록 추가 */
  const handleSubmit = (e) => {
    e.preventDefault();

    // 새로운 할 일 목록을 객체로 만들어보자.
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false
    }

    // 생성한 새로운 할 일을 추가해보자.
    setTodoData([...todoData, newTodo]);
    setValue("");
  }

  /* 완료된 항목 처리 */
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    setTodoData(newTodoData);
  }

  return (
    <div className="container">
      <div className="todoBlock">
        <div>
          <h1>오늘 할 일</h1>
        </div>
        {todoData.map(data => (
          <div style={getStyle(data.completed)}
            key={data.id}>
            <input type="checkbox"
              defaultChecked={false}
              onChange={() => { handleCompleteChange(data.id) }} />
            {data.title}
            <button style={btnStyle} onClick={() => {
              deleteClick(data.id)
            }}>delete</button>
          </div>
        ))}
        <form style={{ display: 'flex' }}
          onSubmit={handleSubmit}>
          <input type="text"
            name="todoInput"
            style={{ flex: '8', padding: '5px' }}
            placeholder="새로운 할 일을 입력하세요."
            value={value}
            onChange={handleChange} />
          <input type="submit"
            value="Add"
            className="btn"
            style={{ flex: '1', marginLeft: '2pt' }} />
        </form>

      </div>
    </div>
  )
}
