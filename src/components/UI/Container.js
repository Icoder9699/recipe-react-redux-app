import React from 'react'

export default function Container(props) {
    return (
        <div style={{
            width: '1100px',
            padding: '0 10px',
            margin: '0 auto'
        }}>
            {props.children}
        </div>
    )
}
