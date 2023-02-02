import React, {useState, useEffect} from "react";
import axios from "axios";

type outPut = {
  returnCall: () => {};
};

export const useHomeNavApiCall = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("account/info")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return data;
};
