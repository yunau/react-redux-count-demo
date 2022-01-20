export const addNumber = (amount) =>  {

    return (dispatch) => {
        dispatch({
            type: "add",
            payload: amount
        })
    }
}

export const subNumber = (amount) => {
    return (dispatch) => {
        dispatch ({
            type: "sub",
            payload: amount
        })
    }
}