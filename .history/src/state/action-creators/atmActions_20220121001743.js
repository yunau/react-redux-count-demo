export const depositMoney = (amount) =>  {

    return (dispatch) => {
        dispatch({
            type: "add",
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch ({
            type: "sub",
            payload: amount
        })
    }
}