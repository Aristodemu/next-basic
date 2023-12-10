import { notFound } from "next/navigation";
import { memo } from "react";
import type { FC } from "react";

interface IProps {
  params: { id: number };
}

const UserDetailPage: FC<IProps> = (props) => {
  const {
    params: { id },
  } = props;
  if (id > 10) notFound();
  return <div>UserDetailPage：{id}</div>;
};
export default memo(UserDetailPage);
