import classes from './Layout.module.scss'
import React from 'react'
import Nav from '../../components/Nav/Nav'

export default function Layout(props) {
    return (
        <div className={classes.Layout}>
            <Nav/>
            <main>
                {props.children}
            </main>
        </div>
    )
}
