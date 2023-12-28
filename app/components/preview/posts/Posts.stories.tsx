import Link from "next/link";

import { Posts } from "./Posts";
import { posts } from "../../../mocks/posts.mock";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Posts>;

export default {
  title: "Components/Preview/PostList",
  component: Posts,
} satisfies Meta<typeof Posts>;

export const Default: Story = {
  render: () => (
    <main className="Posts">
      {posts ? (
        posts?.map((post) => (
          <Link key={post._id} href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
        ))
      ) : (
        <div className="NotFound">No posts found</div>
      )}
    </main>
  ),
};
