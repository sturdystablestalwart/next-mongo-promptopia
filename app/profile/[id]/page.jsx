"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = () => {
  const router = useRouter();
  const { id } = useParams();
  const [userPosts, setUserPosts] = useState([]);
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  console.log(id, name);

  useEffect(() => {
    (async () => {
      const response = await fetch(`/api/users/${id}/posts`);
      const data = await response.json();
      setUserPosts(data);
    })();
  }, [id]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    try {
      const response = await fetch(`/api/prompt/${post._id}/`, {
        method: "DELETE",
      });
      if (response.ok) {
        const filteredPosts = userPosts.filter((item) => item._id !== post._id);

        setUserPosts(filteredPosts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Profile
      name={name}
      desc={`Welcome to ${name}'s personal profile page`}
      data={userPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default UserProfile;
