const reducer = (tasks, action) => {

    switch(action.type) {
        case "ADD_TODO":
            tasks.push(action.payload);
            return tasks;
        default:
            return tasks
    }

}

export default reducer;