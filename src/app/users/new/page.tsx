"use client";
import { useRouter } from "next/navigation";
import { memo } from "react";
import type { FC } from "react";

interface IProps {}
const NewUserPage: FC<IProps> = () => {
  const router = useRouter();
  return (
    <>
      <div>NewUserPage</div>
      <button className="btn btn-primary" onClick={() => router.push("/users")}>
        Create
      </button>
    </>
  );
};
export default memo(NewUserPage);
