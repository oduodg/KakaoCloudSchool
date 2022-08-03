import React, { Component } from "react";
// class형 component를 이용할거에요!
import "./App.css";

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  btnStyle = {
    backgroundColor: "white",
    color: "Red",
    border: "none",
    padding: "5px 9px",
    borderRadius: "6px",
    cursor: "pointor",
    float: "right",
  }

  getStyle = (completed) => {
    return {
      padding: "20px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through": "none",
      textDecorationColor: completed ? "white": "none",
      fontSize: "14pt"
    }
  }

  state = {
    todoData: [
      {
        id: "1",
        title: "운동하기",
        completed: false
      }, {
        id: "2",
        title: "공부하기",
        completed: false
      }, {
        id: "3",
        title: "밥먹기",
        completed: false
      }],
    value: ""
  }

  /* 삭제하기 */
  deleteClick = (id) => {
    //console.log(id);
    // 해당 아이디에 대한 할일 목록을 지워야 한다.
    // 데이터를 지워요! => 열심히 하면 배열 처리 가능!
    const newTodoData = this.state.todoData.filter(data => data.id !== id);
    //console.log(newTodoData);
    // 변경된 데이터를 가지고 화면을 다시 그려야 해요!
    // 어떻게 하면 이 작업을 수행할 수 있나요?
    // React State
    // React에서 데이터가 변할 때 화면을 다시 rendering해 주기 위해서 사용
    // State는 component 안에서 작성
    // 일반적으로 생성자 안에서 정의해요!
    // 이름이 state라는 property
    this.setState({ todoData: newTodoData });
  }

  /* 새로운 할 일 입력 */
  handleChange = (e) => { // e는 event 객체
    //console.log(e.target.value);
    this.setState({ value: e.target.value });
  }

  /* 새로운 할 일 목록 추가 */
  handleSubmit = (e) => {
    // 현재 submit event가 발생해서 그거 처리하고 있어요!
    // 이런 default event 처리를 안할래요! -> form 태그의 action에 request 보내지 않을래요
    e.preventDefault(); // submit 버튼을 눌러도 웹페이지가 리로딩되지 않는다.

    // 새로운 할 일 목록을 객체로 만들어보자.
    let newTodo = {
      id: Date.now(), // unique한 값을 표현하기 위해 Date.now()를 사용
      title: this.state.value,
      completed: false
    }

    // 생성한 새로운 할 일을 추가해보자.
    this.setState({ todoData: [...this.state.todoData, newTodo], value: "" });
  }

  /* 완료된 항목 처리 */
  handleCompleteChange = (id) => {
    // id에 대해 todoData의 completed값을 변경시켜야 해요!
    let newTodoData = this.state.todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    this.setState({ todoData: newTodoData });
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div>
            <h1>오늘 할 일</h1>
          </div>
          {this.state.todoData.map(data => (
            <div style={this.getStyle(data.completed)}
              key={data.id}>
              <input type="checkbox"
                defaultChecked={false}
                onChange={() => { this.handleCompleteChange(data.id) }} />
              {data.title}
              <button style={this.btnStyle} onClick={() => {
                this.deleteClick(data.id)
              }}>delete</button>
            </div>
          ))}
          <form style={{ display: 'flex' }}
            onSubmit={this.handleSubmit}>
            <input type="text"
              name="todoInput"
              style={{ flex: '10', padding: '5px' }}
              placeholder="새로운 할 일을 입력하세요."
              value={this.state.value}
              onChange={this.handleChange} />
            <input type="submit"
              value="Add"
              className="btn"
              style={{ flex: '1' }} />
          </form>

        </div>
      </div>
    )
  }
}