import {useReducer} from 'react'
const initialState = {
    count: 0
}
function reducer(state: typeof initialState, action: { type: string }) {
    //type it allow only string and we went particular string we can use union type 
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            throw new Error()
    }
}
export const Usereduser = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    )
}
//and if we  another reset buttonwe can use union type in usereducer  but these are called as discriminated  unions