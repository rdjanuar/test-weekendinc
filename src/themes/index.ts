import { extendTheme } from "@chakra-ui/react";

import { fonts } from "./foundations";

const overrides = {
  styles: {
    global: {
      "html, body": {
        overflowX: "hidden",
      },
    },
  },
  fonts,
};

export default extendTheme(overrides);
