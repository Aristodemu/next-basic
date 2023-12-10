import { memo } from "react";
import type { FC } from "react";
import AddToCart from "../AddToCart";
import styles from "./ProductCard.module.css";

export interface IProps {}
const ProductCard: FC<IProps> = () => {
  return (
    // <div className={styles.card}>
    //   <AddToCart />
    // </div>
    <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500">
      <AddToCart />
    </div>
  );
};
export default memo(ProductCard);
