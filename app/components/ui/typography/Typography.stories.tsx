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
        <Typography component="div" variant="prose">
          <h1>Heading one style</h1>
          <h2>Heading two style</h2>
          <p>
            Good news, everyone! There&apos;s a report on TV with some very bad
            news! Uh, is the puppy mechanical in any way? Dear God, they&apos;ll
            be killed on our doorstep! And there&apos;s no trash pickup until
            January 3rd. Michelle, I don&apos;t regret this, but I both rue and
            lament it.
          </p>
          <p>
            Pansy. Hey, whatcha watching? I meant &apos;physically&apos;. Look,
            perhaps you could let me work for a little food? I could clean the
            floors or paint a fence, or service you sexually? You&apos;re going
            to do his laundry?
          </p>
          <h3>Heading three style</h3>
          <p>
            Negative, bossy meat creature! You&apos;ve killed me! Oh,
            you&apos;ve killed me! No, she&apos;ll probably make me do it. I
            usually try to keep my sadness pent up inside where it can fester
            quietly as a mental illness.
          </p>
          <h4>Heading four style</h4>
          <p>
            Negative, bossy meat creature! You&apos;ve killed me! Oh,
            you&apos;ve killed me! No, she&apos;ll probably make me do it. I
            usually try to keep my sadness pent up inside where it can fester
            quietly as a mental illness.
          </p>
          <h5>Heading five style</h5>
          <h6>Heading six style</h6>
          <p>Paragraph style</p>
          <ul>
            <li>Unordered-List Item</li>
            <li>Unordered-List Item</li>
            <li>Unordered-List Item</li>
            <li>Unordered-List Item</li>
          </ul>
          <ol>
            <li>Ordered-List Item</li>
            <li>Ordered-List Item</li>
            <li>Ordered-List Item</li>
            <li>Ordered-List Item</li>
          </ol>
          <span>Inside a span</span>
          <p>Inside a drop-cap</p>
          <p>Inside a drop-cap</p>
          <br />
          <i>Inside an italic</i>
          <hr />
        </Typography>

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
