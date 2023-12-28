"use client";

import { type QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { POSTS_QUERY } from "@/sanity/lib/queries";
import { Posts } from "@/app/components/preview/posts/Posts";

import type { SanityDocument } from "next-sanity";

export function PostsPreview({
  initial,
}: {
  initial: QueryResponseInitial<SanityDocument[]>;
}) {
  const { data } = useQuery<SanityDocument[] | null>(
    POSTS_QUERY,
    {},
    { initial },
  );

  return data ? (
    <Posts data={data} />
  ) : (
    <div className="bg-red-100">No posts found</div>
  );
}
