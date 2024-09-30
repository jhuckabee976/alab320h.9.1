

function reducer(state, action) {
    console.log("Action Dispatched:", action);

    switch (action.type) {
        case "add_todo":
            console.log("Adding Todo:", action.payload);
            
            return [...state, action.payload];
        case "toggle_complete":
            return state.map((todo) =>
                todo.id === action.payload.id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            );
        case "delete_todo":
            return state.filter((todo) => todo.id !== action.payload.id);
        default:
            throw new Error("Unknown action: " + action.type);
    }
}

export default reducer;
