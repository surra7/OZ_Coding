"use client"; // 클라이언트 컴포넌트로 사용하겠다고 선언, 기본은 server 컴포넌트

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("http://127.0.0.1:8090/api/collections/posts/records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
      }),
    });
    setTitle("");
    // 현재 라우터를 새로고침하고 서버에서 새로운 데이터를 가져옴
    // refresh할 때 react 및 브라우저 상태를 모두 포함하기 때문에 클라이언트 측 상태가 손실되지 않음
    // => full page refresh를 안해도 됨
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
