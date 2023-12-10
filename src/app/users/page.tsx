import UserTable from "@/components/UserTable/UserTable";
import Link from "next/link";
import { Suspense, memo } from "react";
import type { FC } from "react";

interface IProps {
  searchParams: { sortOrder: string };
}

const UsersPage: FC<IProps> = (props) => {
  const {
    searchParams: { sortOrder },
  } = props;
  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <p>{new Date().toLocaleTimeString()}</p>
      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};
export default memo(UsersPage);
