import React from 'react';
import TodoItem from './TodoItem';
const TodoList = ({ todos, onDelete }) => {
    return (
        <div className="todo-list mt-2">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
            ))}
        </div>
    );
};
export default TodoList;