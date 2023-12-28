"use client";

import { Page } from "@/app/components/layout/page/Page";
// import { Typography } from "@/app/components/typography/Typography";
// import { GlobalHeader } from "@/app/_global-header";
// import { GlobalFooter } from "@/app/_global-footer";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html>
      <body>
        <Page>
          {/* <GlobalHeader /> */}

          <Page.Body>
            <Page.Section>
              {/* <Typography as="h1" appearance="h1">
                Something went wrong!
              </Typography> */}

              {/* <Typography as="p">{error.digest}</Typography> */}
            </Page.Section>
          </Page.Body>

          {/* <GlobalFooter /> */}
        </Page>
      </body>
    </html>
  );
}
