

import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  const [post, setPosts] = useState<UserProps | null>(null);

  const handleAddUser = (newUser: UserProps) => {
    setPosts({ ...newUser });
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">User List</h1>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {posts.map((post: UserProps, key: number) => (
            <UserCard post={post} key={key} />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();
  return {
    props: {
      posts,
    },
  };
}

export default Users;
