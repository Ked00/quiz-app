import React, {useState} from "react";

export function useShowOrHide(isShowing: boolean) {
  const [visible, setVisible] = useState(isShowing);

  const switchState = (): void => {
    setVisible((prev) => !prev);
  };

  return [visible, switchState] as const;
}
