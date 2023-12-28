import { Posts } from "./Posts";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Posts>;

export default {
  title: "Components/Posts",
  component: Posts,
} satisfies Meta<typeof Posts>;

export const Default: Story = {
  render: () => <Posts />,
};
