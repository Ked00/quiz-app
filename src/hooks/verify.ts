import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

type outPut = {
  verify: () => void;
};

export const useVerify = (): outPut => {
  const navigation = useNavigate();

  function verifyLogin() {
    axios
      .get("authentication/verify")
      .then((res) => {
        if (res.data === true) {
          navigation("/main");
        }
        else{
          navigation("/");
        }
      })
      .catch((err) => console.log(err));
  }

  return {
    verify: verifyLogin,
  };
};
