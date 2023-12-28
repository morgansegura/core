import { draftMode } from "next/headers";

import { POSTS_QUERY, POST_QUERY } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { loadQuery } from "@/sanity/lib/store";
import { Post } from "@/app/components/preview/post/Post";
import { PostPreview } from "@/app/components/preview/post/PostPreview";

import type { QueryParams, SanityDocument } from "next-sanity";

export async function generateStaticParams() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

export default async function Page({ params }: { params: QueryParams }) {
  const initial = await loadQuery<SanityDocument>(POST_QUERY, params, {
    // Because of Next.js, RSC and Dynamic Routes this currently
    // cannot be set on the loadQuery function at the "top level"
    perspective: draftMode().isEnabled ? "previewDrafts" : "published",
  });

  return draftMode().isEnabled ? (
    <PostPreview initial={initial} params={params} />
  ) : (
    <Post data={initial.data} />
  );
}
