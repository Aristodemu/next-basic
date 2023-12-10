"use client";

import { memo } from "react";
import type { FC } from "react";

interface IProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: FC<IProps> = (props) => {
  const { error, reset } = props;
  console.log("Error", error);

  return (
    <>
      <div>An unexpected error has occurred.</div>
      <button className="btn" onClick={() => reset()}>
        reset
      </button>
    </>
  );
};
export default memo(ErrorPage);
