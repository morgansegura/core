import { post } from "@/app/mocks/post.mock";

import { Post } from "./Post";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Post>;

export default {
  title: "Components/Preview/Post",
  component: Post,
} satisfies Meta<typeof Post>;

export const Default: Story = {
  render: () => <Post data={post} />,
};
