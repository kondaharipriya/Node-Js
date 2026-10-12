import React from 'react';
const TodoItem = ({ todo, onDelete }) => {
    return (
        <div className="todo-item d-flex justify-content-between align-items-center mb-2 p-2 border rounded">
            <span>{todo.text}</span>
            <input className="btn btn-danger btn-sm" type="submit" value="Delete" onClick={() => onDelete(todo.id)}/>
        </div>
    );
}
export default TodoItem;