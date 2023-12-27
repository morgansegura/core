/**
 * @file Generates all the files for a new component.
 */

import * as fs from "fs";
import * as path from "path";

import { format } from "prettier";

const CSS_TEMPLATE = (name: string) => `
.${name} {
  @apply text-inherit;
}
`;

const TEST_TEMPLATE = (name: string) => `
import { render } from "@testing-library/react";

import { ${name} } from "../${name}";

describe("${name}", () => {
  it("works", () => {
    render(<${name} />);
  });
});
`;

const COMPONENT_TEMPLATE = (name: string) => `
import "./${name}.css";

import type { ReactNode } from "react";

export interface ${name}Props {
  children?: ReactNode;
}

export function ${name}({ children }: ${name}Props) {
  return <div className="${name}">{children}</div>;
}
`;

const STORY_TEMPLATE = (name: string) => `
import { ${name} } from "./${name}";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof ${name}>;

export default {
  title: "Components/${name}",
  component: ${name},
} satisfies Meta<typeof ${name}>;

export const Default: Story = {
  render: () => (
    <${name}>
      Hello, World!
    </${name}>
  ),
};
`;

const name = process.argv.slice(2)[0];
const directory = name.charAt(0).toLowerCase() + name.slice(1);
const output = path.join.bind(path, __dirname, "../app/components/core");

async function run() {
  try {
    fs.mkdirSync(output(directory));
    fs.mkdirSync(output(directory, "__tests__"));
    fs.writeFileSync(
      output(directory, `${name}.css`),
      await format(CSS_TEMPLATE(name), { parser: "css" }),
    );
    fs.writeFileSync(
      output(directory, `${name}.tsx`),
      await format(COMPONENT_TEMPLATE(name), { parser: "typescript" }),
    );
    fs.writeFileSync(
      output(directory, `${name}.stories.tsx`),
      await format(STORY_TEMPLATE(name), { parser: "typescript" }),
    );
    fs.writeFileSync(
      output(directory, "__tests__", `${name}.test.tsx`),
      await format(TEST_TEMPLATE(name), { parser: "typescript" }),
    );
  } catch (error) {
    console.error(error);
  }
}

void run();
