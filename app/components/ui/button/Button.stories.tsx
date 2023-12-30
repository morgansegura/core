import { Page } from "../../layout/page/Page";
import { Typography } from "../typography/Typography";
import { Button } from "./Button";
import { ButtonGroup } from "./ButtonGroup";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Button>;

export default {
  title: "Components/UI/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export const Default: Story = {
  render: () => (
    <Page appearance="prose">
      <Typography component="h1" appearance="h3">
        Contained
      </Typography>
      <ButtonGroup>
        <Button component="button" variant="contained" color="error" size="xs">
          Contained Error
        </Button>
        <Button component="button" variant="contained" color="info">
          Contained Info
        </Button>
      </ButtonGroup>
    </Page>
  ),
};
