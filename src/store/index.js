import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
    const { counter } = state
    const { type } = action
    if (type === 'increment') {
        return {
            counter: counter + 1
        }
    }

    if (type === 'decrement') {
        return {
            counter: counter - 1
        }
    }

    return state
}

const store = createStore(counterReducer)

export default store