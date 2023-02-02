import React, {useState} from "react";

type outPut = {
  currentIndex: number;
  nextIndex: () => void;
  prevIndex: () => void;
};

export function useLoopArray(num: number): outPut {
  const [currentIndex, setCurrentIndex] = useState(num);

  return {
    currentIndex: currentIndex,
    // a boolean gets passed to nextIndex from the api call which gets passed to the function its calling to
    nextIndex: () => {
      setCurrentIndex((prev) => prev + 1);
    },
    prevIndex: () => {
      setCurrentIndex((prev) => prev - 1);
    },
  };
}
