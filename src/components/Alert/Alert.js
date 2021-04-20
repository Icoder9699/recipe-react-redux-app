import React, { useContext } from 'react'
import { AlertContext } from '../../context/alert/AlertContext'
import './Alert.scss'


export default function Alert() {
    const {alert, hide} = useContext(AlertContext)

    if(!alert){
        return null
    }

    return (
        <div className={alert.type ? alert.type : 'Alert'}>
            <p>{alert.text}</p>
            <button
                onClick={hide}
            >
                &times;
            </button>
        </div>
    )
}
