import React, { useState } from 'react'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { auth } from '../../store/actions/auth'
import './Auth.scss'

function Auth(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('E-mail can not be empty')
    const [passwordError, setPasswordError] = useState('Password can not be empty')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if(emailError || passwordError){
            setFormValid(false)
        } else {
            setFormValid(true) 
        }// eslint-disable-next-line
    }, [passwordError, emailError])

    const emailHandler = e => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(e.target.value).toLowerCase())){
            setEmailError('Incorrect email')
        }else {
            setEmailError('')
        }
    }

    const passwordHandler = e => {
        setPassword(e.target.value)
        if(!e.target.value.length > 3 || e.target.value.length < 8){
            setPasswordError('Length of password min 8 symbols')
        }else {
            setPasswordError('')
        }
    }


    const onBlurHandler = e => {
        switch(e.target.name){
            case 'email': {
                setEmailDirty(true)
                break
            }
            case 'password': {
                setPasswordDirty(true)
                break
            }
            default: break;
        }
    }

    const submitHandler = e => {
        e.preventDefault()
    }

    // registration 
    const registerHandler = () => {
        props.auth(email, password, true)
    }

    const loginHandler = () => {
        props.auth(email, password, false)
        // const userData = {
        //     email: email,
        //     password: password,
        //     returnSecureToken: true
        // }
        // try{
        //     const resp = await axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDjGL6W9mHxDwLHGMNR4pUZeMpXjjnqi9w', userData)
        //     console.log('login done');
        // }catch(e){
        //     console.log(e);
        // }
    }

    return (
        <form onSubmit={(e) => submitHandler(e)} className='Auth'>
            <h3>E-mail</h3>
            <input
                name='email'
                type='text'
                value={email}
                onBlur={e => onBlurHandler(e)}
                onChange={e => emailHandler(e)}
            />
            {(emailDirty && emailError) 
                && <div style={{color: 'red', padding: '5px 0'}}>{emailError}</div>
            }
            <hr/>
            <h3>Password</h3>
            <input
                name='password'
                type='password'
                value={password}
                onBlur={e => onBlurHandler(e)}
                onChange={e => passwordHandler(e)}
            />
            {(passwordDirty && passwordError) 
                && <div style={{color: 'red', padding: '5px 0'}}>{passwordError}</div>
            }
            <hr/>
            <div className='Auth__row'>
                <button
                    disabled={!formValid}
                    onClick={() => registerHandler()}
                    className='Auth__register'
                >Create</button>
                <button
                    disabled={!formValid}   
                    onClick={() => loginHandler()}
                    className='Auth__submit'
                >Submit</button>
            </div>
        </form>
    )
}

function mapDispatchToProps(dispatch){
    return{
        auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
    }
}

export default connect(null, mapDispatchToProps)(Auth)
