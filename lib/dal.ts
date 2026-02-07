"use server";

export async function getAllBlogPosts() {
  const response = await fetch("http://localhost:3000/api/posts");

  if (!response.ok) {
    throw new Error("Posts could not be fetched");
  }

  return response.json();
}