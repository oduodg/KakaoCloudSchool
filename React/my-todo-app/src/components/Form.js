import React from 'react'

export default function Form({ todoData, setTodoData, value, setValue }) {
	console.log("Form component 실행!");
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

	return (
    <form onSubmit={handleSubmit} className="flex pt-2">
        <input type="text"
               name='todoItem'
               placeholder='새로운 할 일을 입력하세요'
               className='w-full px-3 py-2 mr-4 text-gray-500 border rounded shadow'
               value={value}
               onChange={handleChange}
        />
        <input type='submit'
               value='입력'
               className='p-2 text-blue-400 border-blue-400 rounded hover:text-white hover:bg-blue-200'
        />
    </form>

	)
}
