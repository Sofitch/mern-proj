import { createContext, useReducer } from 'react'

export const ChoreoContext = createContext() // export to access from other files

export const choreoReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CHOREOS':
            return { choreos: action.payload }
        case 'CREATE_CHOREO':
            return { choreos: [action.payload, ...state.choreos] }
        case 'DELETE_CHOREO':
            return { choreos: state.choreos.filter((c) => c._id !== action.payload._id) }
        default:
            return state
    }
}

// is wrapping "App" in index.js -> children = App
export const ChoreosContextProvider = ({ children }) => { 
    const [state, dispatch] = useReducer(choreoReducer, {choreos: null}) // useReducer([reducer_name], initial state value)

    return (
        <ChoreoContext.Provider value={{...state, dispatch}}>
            { children }
        </ChoreoContext.Provider>
    )
}
