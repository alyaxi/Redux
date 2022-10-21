const { cakeAction } = require("../cake/cakeSlice")

const createSlice = require("@reduxjs/toolkit").createSlice

const initialState = {
    numOfIceCream: 20
}

const iceCreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIceCream --
        },
        restocked: (state, action) => {
            state.numOfIceCream += action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeAction.ordered, state => {
            state.numOfIceCream --
        })
    }
})


module.exports = iceCreamSlice.reducer

module.exports.icecreamAction = iceCreamSlice.actions