const reducer = (task="", action) => {

    switch(action.type) {
        case "ADD_TODO":
            return state + action.payload;
        case "Delete_TODO":
            return state - action.payload;
        default:
            return state
    }

}

export default reducer;