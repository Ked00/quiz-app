import React, {useState} from "react";

type outPut = {
  value: {username?: string; password?: string};
  updateForm: (event: {target: {name: string; value: string}}) => void;
};

export const useFormManager = (): outPut => {
  const [value, setValue] = useState({username: "", password: ""});

  const updateForm = (event: {target: {name: string; value: string}}) => {
    setValue((prev) => {
      return {...prev, [event.target.name]: event.target.value};
    });
  };

  return {
    value: value,
    updateForm: updateForm,
  };
};
