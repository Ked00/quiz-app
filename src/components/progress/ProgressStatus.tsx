import React from "react";
import {LinearProgress} from "@mui/material";

type Props = {
  progressvalue: number;
};
export const ProgressStatus = (props: Props) => {
  return (
    <LinearProgress
      variant="determinate"
      value={props.progressvalue}
      sx={{width: "60%"}}
    />
  );
};
