// app/blog/page.tsx
import Link from "next/link";

const posts = [
  { id: 1, title: "Første blogpost" },
  { id: 2, title: "Andet blogpost" },
];

export default function BlogPage() {
  return (
    <main className="p-10">
      <h1 className="text-3xl mb-6">Blog</h1>

      {posts.map(post => (
        <p key={post.id}>
          <Link href={`/blog/${post.id}`} className="underline">
            {post.title}
          </Link>
        </p>
      ))}
    </main>
  );
}