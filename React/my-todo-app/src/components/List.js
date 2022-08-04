import React, { useState } from 'react'

const List = ({ deleteClick, id, title, completed, todoData, setTodoData, provided, snapshot, edited }) => {
	console.log("List component 실행!");

	const [newText, setNewTest] = useState({ title })

	/* 수정하기 */
	const editClick = (id) => {
		let newTodoData = todoData.map((data) => {
			if (data.id === id) {
				data.edited = !data.edited;
			}
			return data;
		});
		setTodoData(newTodoData);
	}

	/* 수정한 내용 저장하기 */
	const onChangeEditInput = (e) => {
		setNewTest(e.target.value);
	}

	/* 수정한 내용으로 업데이트 */
	const onClickSaveButton = (id) => {
		let newTodoData = todoData.map((data) => {
			if (data.id === id) {
				data.edited = !data.edited; // edit 상태 바꿔주기 
				data.title = newText;
			}
			return data;
		});
		setTodoData(newTodoData);
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
		<div key={id}
			{...provided.draggableProps}
			ref={provided.innerRef}
			{...provided.dragHandleProps}>
			<div className={`${snapshot.isDragging ? "bg-gray-500" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}>
				<div className='items-center'>
					{edited ? <><span className={completed ? "line-through" : undefined}>
					</span>
						<input type="text"
							defaultValue={title}
							placeholder={title}
							autoFocus
							onChange={(e) => onChangeEditInput(e)} /></>
						: <>
							<input type="checkbox"
								className='mr-3'
								defaultChecked={false}
								onChange={() => handleCompleteChange(id)} />
							<span className={completed ? "line-through" : undefined}>
								{title}</span></>}
				</div>
				<div className='items-center'>
					{edited ? <button type="submit" onClick={() => onClickSaveButton(id)}>save</button>
						: completed ? <></>
							: <button onClick={() => editClick(id)}>edit</button>}

					<button className='ml-4'
						onClick={() => deleteClick(id)}>delete</button>
				</div>
			</div>
		</div>
	)
}

export default List