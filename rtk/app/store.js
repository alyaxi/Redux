const configureStore = require("@reduxjs/toolkit").configureStore
const cakeReducer = require("../feature/cake/cakeSlice")
const icecreamReducer = require("../feature/icecream/icecreamSlice")
const userReducer = require("../feature/user/user")

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user : userReducer
    }
})

module.exports = store