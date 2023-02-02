import React, {useState} from "react";
import axios from "axios";

type outPut = {
  makeCall: () => void;
  response: {message: string; variant: string};
};

export const useAuthenticationApi = (
  link: string,
  values: {username?: string; password?: string}
): outPut => {
  const [response, setResponse] = useState({message: "", variant: ""});

  function logMeIn() {
    axios
      .post(`authentication/${link}`, {
        username: values.username,
        password: values.password,
      })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => console.log(err));
  }

  return {
    makeCall: logMeIn,
    response: response
  };
};
