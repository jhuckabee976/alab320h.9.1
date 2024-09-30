

import React from "react";
import "./App.css"; 

function TodoItem({ todo, dispatch }) {
    const { title, completed, id } = todo;

    return (
        <div className="container">
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch({ type: "toggle_complete", payload: { id } })}
            />
            <p>{title}</p>
            <button
                onClick={() => dispatch({ type: "delete_todo", payload: { id } })}
            >
                Delete
            </button>
        </div>
    );
}

export default TodoItem;
