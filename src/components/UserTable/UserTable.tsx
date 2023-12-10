import Link from "next/link";
import { memo } from "react";
import type { FC } from "react";
import { sort } from "fast-sort";

interface IProps {
  sortOrder: string;
}
interface User {
  id: number;
  name: string;
  email: string;
}

const UserTable: FC<IProps> = async (props) => {
  const { sortOrder } = props;
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  const sortUsers = sort(users).asc(
    sortOrder === "email" ? (user) => user.email : (user) => user.name
  );

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>
              <Link href="/users?sortOrder=name">Name</Link>
            </th>

            <th>
              <Link href="/users?sortOrder=email">Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default memo(UserTable);
