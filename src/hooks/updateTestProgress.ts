import React, {useState} from "react";

type outPut = {
  currentProgress: number;
  increaseProgress: () => void;
  decreaseProgress: () => void;
  saveProgress: () => void;
};

export function useUpdateProgressBar(): outPut {
  const [progress, setProgress] = useState(0);

  return {
    currentProgress: progress,
    increaseProgress: () => {
      setProgress((prev) => prev + 20);
    },
    decreaseProgress: () => {
      setProgress((prev) => prev - 20);
    },
    saveProgress: () => {},
  };
}
