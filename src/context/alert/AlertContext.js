import React, { createContext, useReducer } from 'react'
import { HIDE_ALERT, SHOW_ALERT } from '../types'
import { alertReducer } from './alertReducer'
// here I created context with hooks


export const AlertContext = createContext()

export default function AlertProvider({children}) {
    const [state, dispatch] = useReducer(alertReducer, null)

    function show (text, type) {
        dispatch({
            type: SHOW_ALERT,
            payload: {text, type}
        })
    }

    function hide () {
        dispatch({type: HIDE_ALERT})
    }
    
    return (
        <AlertContext.Provider value={{
            show, hide, alert: state
        }}>
            {children}
        </AlertContext.Provider>
    )
}

