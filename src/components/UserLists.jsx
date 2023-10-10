import React from "react";
import { useRequestProcessor } from "../req-processor/requestProcessor";
import axiosClient from "../utils/axios";

export default function UserLists() {
  const { query } = useRequestProcessor();
  const {
    data: users,
    isLoading,
    isError,
  } = query("users", () => axiosClient.get("/users").then((res) => res.data), {
    enabled: true,
  });
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  return (
    <ul className="justify-between mx-auto items-center md:max-lg:flex">
      {users.map((user) => {
        return (
          <li
            className="text-white bg-cyan-500 text-center sm:text-left"
            key={user?.id}
          >
            {user?.name}
          </li>
        );
      })}
    </ul>
  );
}
