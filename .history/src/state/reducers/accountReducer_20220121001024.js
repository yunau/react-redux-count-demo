const reducer = (state=0, action) => {
    switch(action.type) {
        case "addition":
            return state + action.payload;
        case "subtraction":
            return state - action.payload;
        default:
            return state
    }
}

export default reducer;