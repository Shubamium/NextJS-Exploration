import React from "react";

type Props = {};

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export async function GetUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const req = await fetch(url, { cache: "no-store" });
  const res = await req.json();
  return res as User[];
}

export default async function Data({}: Props) {
  let users = await GetUsers();
  console.log(users);
  return (
    <div>
      <h2>Fetching Data from the server</h2>
      <h2>Users</h2>
      {users &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <h1>
                {user.name} alias {user.username}
              </h1>
              <p>{user.email}</p>
            </div>
          );
        })}
    </div>
  );
}
