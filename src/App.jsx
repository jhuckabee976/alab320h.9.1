
import React, { useReducer, useState } from "react";
import { initialState } from "./todos-data"; 
import reducer from "./reducer"; 
import TodoItem from "./TodoItem"; 
import "./index.css"; 

function App() {
    const [todos, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState(""); 

    
    const handleAdd = () => {
        if (newTodo.trim() === "") return; 
        dispatch({
            type: "add_todo",
            payload: { id: Date.now(), title: newTodo, completed: false },
        });
        setNewTodo(""); 
    };

    return (
        <div className="App">
            <h1>Todo List App</h1>
            <div>
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new task"
                />
                <button onClick={handleAdd}>Add</button>
            </div>
            <div>
                
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
                ))}
            </div>
        </div>
    );
}

export default App;
