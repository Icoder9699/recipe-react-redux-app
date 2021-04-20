import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { authLogout } from '../../store/actions/auth'

function Logout(props) {
    useEffect( () => {
        props.logout()
        // eslint-disable-next-line
    }, [])

    return <Redirect to={'/'} />
}

function mapDispatchToProps(dispatch){
    return{
        logout: () => dispatch(authLogout())
    }
}

export default connect(null, mapDispatchToProps)(Logout)
