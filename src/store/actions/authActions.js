import axios from '../../axios-config';

export const checkAuthTime = (expTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({type: 'AUTH_LOGOUT'});
        }, expTime * 1000);
    };
}

export const checkAuth = (credentials) => {
    return dispatch => {
        const authData = {
            username: credentials.username,
            password: credentials.password,
        }
        axios.post('/login', authData)
        .then(res => {
            console.log(res);
            const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch({ type: 'AUTH_SUCCESS', token: res.data.token, role: res.data.user.role});
            dispatch(checkAuthTime(res.data.expiresIn));
        })
        .catch(err => {
            dispatch({ type: 'AUTH_FAIL', error: err})
        }
        );
    }
}

export const doLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return dispatch => {
        dispatch({type: 'AUTH_LOGOUT'})
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(doLogout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(doLogout());
            } else {
                dispatch({ type: 'AUTH_SUCCESS', token: token});
                dispatch(checkAuthTime((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }   
        }
    };
};