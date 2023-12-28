import { groq } from "next-sanity";

import { client } from "@/sanity/lib/client";
// import { Footer } from "@/app/components/footer/Footer";
import { Page } from "@/app/components/layout/page/Page";

// const query = groq`
//   *[_type == "footer"] {
//     quote,
//     nav1,
//     nav2,
//     newsletter,

//   }

// `;

export function GlobalFooter() {
  // const data = await client.fetch(query);

  return (
    <Page.Footer>
      {/* <Footer
        data={data}
        copyright={`All Rights Reserved. © ${new Date().getFullYear()} ${
          process.env.NEXT_PUBLIC_SITE_LONGNAME
        }`}
      /> */}
      The Footer
    </Page.Footer>
  );
}
