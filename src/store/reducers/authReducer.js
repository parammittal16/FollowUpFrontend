const initState = {
    token: null,
    role: null,
    error: null
};

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'AUTH_SUCCESS':
        return { ...state, ...{token: action.token, role: action.role}}
        case 'AUTH_FAIL':
        return { ...state, ...{error: action.error}}
        case 'AUTH_LOGOUT': return { ...state, ...{token: null, role: null}}
        default:
        return state;
    }
}

export default authReducer;