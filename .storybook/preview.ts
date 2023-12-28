import type { Preview } from "@storybook/react";

import "../app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    chromatic: {
      viewports: [400, 800, 1400],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          "Components/Core",
          "Components/UI",
          "ComponentsLayout",
          "Components/Pages",
          "Pages",
        ],
      },
    },
  },
};

export default preview;
