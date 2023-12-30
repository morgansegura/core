import { Page } from "@/app/components/layout/page/Page";

import { Typography } from "./Typography";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Typography>;

export default {
  title: "Components/Typography",
  component: Typography,
} satisfies Meta<typeof Typography>;

export const Default: Story = {
  render: () => (
    <Page>
      <Page.Section appearance="prose">
        <Typography component="h1">John Quincy Adding Machine.</Typography>
        <Typography component="h2">
          But you may have to metaphorically make a deal with the devil.
        </Typography>
        <Typography component="h3">
          But you may have to metaphorically make a deal with the devil.
        </Typography>
        <Typography component="h4">
          But you may have to metaphorically make a deal with the devil.
        </Typography>
        <Typography component="h5">
          But you may have to metaphorically make a deal with the devil.
        </Typography>
        <Typography component="h6">
          But you may have to metaphorically make a deal with the devil.
        </Typography>
        <Typography component="p">
          But you may have to metaphorically make a deal with the devil.
        </Typography>
      </Page.Section>
    </Page>
  ),
};
