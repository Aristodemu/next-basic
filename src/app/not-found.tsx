import { memo } from "react";
import type { FC } from "react";

interface IProps {}

const NotFoundPage: FC<IProps> = () => {
  return <div>The requsted page doesn&apos;t exist.</div>;
};
export default memo(NotFoundPage);
