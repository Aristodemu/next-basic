"use client";

import { memo } from "react";
import type { FC } from "react";

export interface IProps {}
const AddToCart: FC<IProps> = () => {
  return (
    <div>
      <button className="btn btn-primary" onClick={() => console.log("click")}>
        Add to Cart
      </button>
    </div>
  );
};
export default memo(AddToCart);
