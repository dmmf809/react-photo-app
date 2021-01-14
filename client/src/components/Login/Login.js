import React from "react"
import { FormContainer,
         FormItems, 
         FormTitle,
         FormButton,
      } from './LoginElements'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { TextInput } from './FormLib'
import { VscAccount, VscLock } from 'react-icons/vsc'

const Login = () => {
  return (
    <FormContainer>
      <FormItems>
      <FormTitle>Login</FormTitle>
      <Formik
        initialValues = {{
          username: "",
          password: "",
        }}
        validationSchema = {
          Yup.object({
            username: Yup.string()
            .required("Required"),
            password: Yup.string()
            .min(8, "Password is too short")
            .max(20, "Password is too long")
            .required("Required"),
          })
        }
        onSubmit = {(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
              <TextInput 
                name= "username"
                type= "text"
                label= "Username"
                placeholder= "Username"
                icon= {<VscAccount/>}
              />
              <TextInput 
                name= "password"
                type= "password"
                label= "Password"
                placeholder= "Password"
                icon= {<VscLock/>}
              />
              <FormButton type= "submit">
                Login
              </FormButton>
          </Form>
        )}
      </Formik>
      </FormItems>
    </FormContainer>
  );
};

export default Login;
