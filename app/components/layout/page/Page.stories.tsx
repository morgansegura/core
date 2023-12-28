import { GlobalHeader } from "@/app/_global-header";
import { GlobalFooter } from "@/app/_global-footer";
import { Page } from "@/app/components/layout/page/Page";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Page>;

export default {
  title: "Components/Layout/Page",
  component: Page,
} satisfies Meta<typeof Page>;

export const Default: Story = {
  render: () => (
    <Page>
      <GlobalHeader />
      <Page.Body>
        <Page.Section>This is a page section</Page.Section>
      </Page.Body>
      <GlobalFooter />
    </Page>
  ),
};
