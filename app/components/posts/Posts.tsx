import Link from "next/link";

import "./Posts.css";

import type { SanityDocument } from "next-sanity";

export interface PostsProps {
  data?: SanityDocument[];
}

export function Posts({ data }: PostsProps) {
  return (
    <main className="Posts">
      {data ? (
        data?.map((post) => (
          <Link key={post._id} href={`/posts/${post.slug.current}`}>
            <h2>{post.title}</h2>
          </Link>
        ))
      ) : (
        <div className="NotFound">No posts found</div>
      )}
    </main>
  );
}
