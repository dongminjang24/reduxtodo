const initialState = [
	{
		id: 1,
		title: 'todo-1',
		content: 'todo-1',
		state: false,
	},
]

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_TODO':
			const todoList = [...state]
			const index = todoList.findIndex(todo => todo.id === action.payload.id)
			todoList[index].content = action.payload.content
			todoList[index].state = action.payload.state
			return todoList
		case 'UPDATE_TODO_EDIT':
			const todoListEdit = [...state]
			const indexEdit = todoListEdit.findIndex(
				todo => todo.id === action.payload.id,
			)
			todoListEdit[indexEdit].content = action.payload.content
			todoListEdit[indexEdit].state = action.payload.state
			return todoListEdit
		case 'DELETE_TODO':
			return [...state].filter(todo => todo.id !== action.payload)
		default:
			return state
	}
}

export default reducer
