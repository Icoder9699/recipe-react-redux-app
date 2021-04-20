import './App.css';
import React from 'react'
import Hero from './pages/Hero/Hero'
import Layout from './hoc/Layout/Layout'
import {Redirect, Route, Switch} from 'react-router-dom'
import Recipes from './pages/Recipes/Recipes';
import About from './pages/About/About';
import Container from './components/UI/Container';
import AlertProvider from './context/alert/AlertContext';
import Alert from './components/Alert/Alert';
import Meal from './components/Meal/Meal';
import Auth from './pages/Auth/Auth';
import Logout from './components/Logout/Logout';
import { connect } from 'react-redux';

// to use alertContext we should use alertContext.Provider 

function App({isAuthenticated}) {
  let routes = (
    <Switch>
      <Route path='/auth' exact component={Auth} />
      <Route path='/' component={Hero} />
      <Redirect to='/'/>
    </Switch>
  )

  if(isAuthenticated){
    routes = (
      <Switch>
        <Route path='/logout' exact component={Logout} />
        <Route path='/recipes/:name' exact component={Meal} />
        <Route path='/recipes' component={Recipes} />
        <Route path='/about' component={About} />
        <Route path='/' component={Hero} />
        <Redirect to='/'/>
      </Switch>
    )
  }else {

  }
  return (
    <AlertProvider>
      <Layout>
        <Container>
          <Alert/>
          {routes}
        </Container>
      </Layout>
    </AlertProvider>
  );
}

function mapStateToProps(state){
  return {
    isAuthenticated: state.auth.token 
  }
}

export default connect(mapStateToProps, null)(App)
