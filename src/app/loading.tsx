import { memo } from "react";
import type { FC } from "react";

interface IProps {}

const Loading: FC<IProps> = () => {
  return <span className="loading loading-spinner loading-xs"></span>;
};
export default memo(Loading);
