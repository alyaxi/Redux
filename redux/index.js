const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const initialState = {
    loading: false,
    users: [],
    error : ""
}

const FETCH_USER_REQUESTED = 'FETCH_USER_REQUEST'
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
const FETCH_USER_ERROR = 'FETCH_USER_ERROR'

const fetchUserReq = () => {
    return {
        type: FETCH_USER_REQUESTED
    }
}

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUserError = (error) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER_REQUESTED : 
        return {
            ...state,
            loading: true
        }
        case FETCH_USER_SUCCESS : 
        return {
            loading: false,
            users: action.payload,
            error: ""
        }
        case FETCH_USER_ERROR: 
        return {
            loading: false,
            users: [],
            error: action.payload
        }
        
    }
}

const fetchUser = () => {
    return function (dispatch){
        dispatch(fetchUserReq())
        axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
            const users = res.data.map(user => {
                return {
                    id: user.id,
                    name: user.name,
                    username: user.username
                }
            })
            dispatch(fetchUserSuccess(users))
        }).catch(error => dispatch(fetchUserError(error)))
    }
}


const store = createStore(reducer, applyMiddleware(thunkMiddleware))

store.subscribe(() => {
    console.log(store.getState())
  })

store.dispatch(fetchUser())