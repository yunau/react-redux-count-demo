const reducer = (tasks, action) => {

    switch(action.type) {
        case "ADD_TODO":
            tasks.push(action.payload);
            return tasks;
        case "DELETE_TODO":
            let index = tasks.indexOf(action.payload);
            if (index !== -1) {
                tasks.splice(index, 1);
            }
            tasks.push(action.payload);
            return tasks;
        default:
            return tasks
    }

}

export default reducer;