export const setUser = (user) => {
    return (dispatch) => {
        dispatch({
            type: 'set',
            payload: user,
        });
    };
};

export const getUser = () => {
    return (dispatch) => {
        dispatch({
            type: 'get',
            payload: null,
        });
    };
};
