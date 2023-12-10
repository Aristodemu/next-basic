import { memo } from "react";
import type { FC } from "react";

interface IProps {}
const HeavyComponent: FC<IProps> = () => {
  return <div>HeavyComponent</div>;
};
export default memo(HeavyComponent);
