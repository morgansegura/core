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

import Image from "next/image"
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

import { dataset, projectId } from "@/sanity/env";

import "./${name}.css";

import type { SanityDocument } from "next-sanity";

export interface ${name}Props {
  children?: ReactNode;
  data: SanityDocument;
}

const builder = imageUrlBuilder({ projectId, dataset });

export function ${name}({ children, data }: ${name}Props) {

  const { title, mainImage, body } = data;

  return <div className="${name}">
      {title ? <h1>{title}</h1> : null}
      {mainImage ? (
        <Image
          className="float-left m-0 w-1/3 mr-4 rounded-lg"
          src={builder.image(mainImage).width(300).height(300).quality(80).url()}
          width={300}
          height={300}
          alt={mainImage.alt || ''}
        />
      ) : null}
      {body ? <PortableText value={body} /> : null}
  </div>;
}
`;

const COMPONENT_PREVIEW_TEMPLATE = (name: string) => `

"use client";

import { ${name.toUpperCase()}_QUERY } from "@/sanity/lib/queries";
import { type QueryResponseInitial, useQuery } from "@sanity/react-loader";
import { type QueryParams, type SanityDocument } from "next-sanity";

import {${name}} from "./${name}";

export function ${name}Preview({
  initial,
  params
}: {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams
}) {
  const { data } = useQuery<SanityDocument | null>(
    ${name.toUpperCase()}_QUERY,
    params,
    { initial }
  );

  return data ? (
    <${name} data={data} />
  ) : (
    <div className="bg-red-100">${name} not found</div>
  );
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
const output = path.join.bind(path, __dirname, "../app/components");

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
      output(directory, `${name}Preview.tsx`),
      await format(COMPONENT_PREVIEW_TEMPLATE(name), { parser: "typescript" }),
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
