import React from "react";
import Axios from "axios";
import {
  FormContainer,
  FormItems,
  FormTitle,
  FormButton,
} from "./LoginElements";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "./FormLib";
import { VscAccount, VscLock } from "react-icons/vsc";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <>
      <FormContainer>
        <FormItems>
          <FormTitle>Login</FormTitle>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            validationSchema={Yup.object({
              username: Yup.string().required("Required"),
              password: Yup.string()
                .min(8, "Password is too short")
                .max(20, "Password is too long")
                .required("Required"),
            })}
            onSubmit={(values, history, { setSubmitting, setFieldError }) => {
              Axios.post("http://localhost:3001/login", values, {
                headers: {
                  "Content-Type": "application/json"
                }
              }).then((response) => {
                console.log(response);
              }).catch(err => console.error(err));
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextInput
                  name="username"
                  type="text"
                  label="Username"
                  placeholder="Username"
                  icon={<VscAccount />}
                />
                <TextInput
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Password"
                  icon={<VscLock />}
                />
                {!isSubmitting && <FormButton type="submit">Login </FormButton>}

                {isSubmitting && (
                  <Loader
                    type="ThreeDots"
                    color="#0F2027"
                    height={50}
                    width={80}
                  />
                )}
              </Form>
            )}
          </Formik>
        </FormItems>
      </FormContainer>
    </>
  );
};

export default Login;
