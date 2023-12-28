"use client";

import { type QueryParams, type SanityDocument } from "next-sanity";
import { type QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { POST_QUERY } from "@/sanity/lib/queries";

import { Post } from "./Post";

export function PostPreview({
  initial,
  params,
}: {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
}) {
  const { data } = useQuery<SanityDocument | null>(POST_QUERY, params, {
    initial,
  });

  return data ? (
    <Post data={data} />
  ) : (
    <div className="NotFound">Post not found</div>
  );
}
