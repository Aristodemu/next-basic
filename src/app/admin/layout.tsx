import { memo } from "react";
import type { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const AdminLayout: FC<IProps> = (props) => {
  const { children } = props;
  return (
    <div className="flex">
      <aside className=" bg-slate-200 p-5 mr-5">Admin Aside</aside>
      <div>{children}</div>
    </div>
  );
};
export default memo(AdminLayout);
