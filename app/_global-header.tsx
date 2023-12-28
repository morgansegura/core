import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";
// import { Header } from "@/app/components/header/Header";
import { Page } from "@/app/components/layout/page/Page";

// const query = groq`
//   *[_type == "header"] {
//     adminnav,
//     logo,
//     mainnav,
//   }
// `;

export function GlobalHeader() {
  // const data = await client.fetch(query);
  // const { logo, mainnav, adminnav } = Object(data)[0] ?? {};

  return <Page.Header>The Header</Page.Header>;
}
