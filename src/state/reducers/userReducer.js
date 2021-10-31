const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'set':
            return action.payload;
        case 'get':
            return state;
        default:
            return state;
    }
};

export default userReducer;
