const store = require("./app/store")
const cakeAction = require("./feature/cake/cakeSlice").cakeAction
const icecreamAction = require("./feature/icecream/icecreamSlice").icecreamAction
const fetchUsers= require("./feature/user/user").fetchUsers


console.log("initial State", store.getState())

const unsubscribe = store.subscribe(() => {
    console.log("Updated State", store.getState())
})

store.dispatch(fetchUsers())

// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.ordered())
// store.dispatch(cakeAction.restocked(3))


// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.ordered())
// store.dispatch(icecreamAction.restocked(2))


unsubscribe()