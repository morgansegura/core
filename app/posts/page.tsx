import { draftMode } from "next/headers";

import { Posts } from "@/app/components/preview/posts/Posts";
import { PostsPreview } from "@/app/components/preview/posts/PostsPreview";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";

import type { SanityDocument } from "next-sanity";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(
    POSTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    },
  );

  return draftMode().isEnabled ? (
    <PostsPreview initial={initial} />
  ) : (
    <Posts data={initial.data} />
  );
}
