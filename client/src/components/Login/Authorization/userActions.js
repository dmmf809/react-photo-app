import Axios from "axios";

export const loginUser = (
  credentials,
  history,
  setSubmitting,
  setFieldError
) => {
  Axios.post("http://localhost:3001/login", credentials, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    
  }).catch(err => console.error(err));

  const user = {};

  const status = true;
};
