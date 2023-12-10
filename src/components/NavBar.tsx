import Link from "next/link";
import { memo } from "react";
import type { FC } from "react";

interface IProps {}

const NavBar: FC<IProps> = () => {
  return (
    <div className="flex bg-slate-200 p-5">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
    </div>
  );
};
export default memo(NavBar);
