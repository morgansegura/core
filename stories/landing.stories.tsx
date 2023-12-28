import { Page } from "@/app/components/layout/page/Page";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Page>;

export default {
  title: "Pages/Landing",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Page>;

export const Default: Story = {
  render: () => <Page>Good things happening Here</Page>,
};
