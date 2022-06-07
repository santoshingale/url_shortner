import React from 'react'
import { LoginContainer, LoginDiv } from '../styles/LoginStyle'
import NavbarComponent from './NavbarComponent'
import Shortner from './Shortner'

const Login = () => {
  return (
    <> 
    <NavbarComponent></NavbarComponent>
      <LoginContainer>
        <LoginDiv>
          <Shortner/>
        </LoginDiv>
        <LoginDiv>
          <h1>Welcome</h1>
        </LoginDiv>
      </LoginContainer>
    </>
  )
}

export default Login