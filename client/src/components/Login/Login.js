import React from "react";
import { FormContainer, 
         FormTitle,
         FormInput, 
         FormLabel,
         FormButton,
      } from './LoginElements'

const Login = () => {
  return (
    <FormContainer>
      <FormTitle>Login</FormTitle>
      <FormLabel>Username:</FormLabel>
        <FormInput/>
      <FormLabel>Password:</FormLabel>
        <FormInput/>
      <FormButton>Login</FormButton>
    </FormContainer>
  );
};

export default Login;
