import React from 'react'
import './nav.scss'
import logo from '../../assets/meal.png'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'



class Nav extends React.Component {

    renderLinks(links) {
        return links.map(link => {
            return(
                <li key={link.label}>
                    <NavLink 
                        to={link.to} 
                        exact={link.exact}
                        activeClassName='active'
                    >
                        {link.label}
                    </NavLink>
                </li>
            )
        })
    }


    render(){
        const links = [
            {label: 'Home', to: '/', exact: true},
        ]

        if(!this.props.token){
           links.push({label: 'Authentication', to: '/auth', exact: false})
        }else {
            links.push({label: 'Recipes', to: '/recipes', exact: false})
            links.push({label: 'About us', to: '/about', exact: false})
            links.push({label: 'Log out', to: '/logout', exact: false})
        }
        return(
            <div className='nav'>
                <div className='nav__logo'>
                    <img src={logo} alt='Logo'/>
                </div>
                <nav>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
            </div>
        )
    }
}

// to get redux state 
function mapStateToProps(state){
    return{
        token: state.auth.token
    }
}

export default connect(mapStateToProps, null)(Nav)