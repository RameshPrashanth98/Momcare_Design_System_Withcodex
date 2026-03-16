import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming";

import { momCareBrandImage, momCareBrandTitle } from "../src/storybook/momcare-brand.js";

addons.setConfig({
  theme: create({
    base: "light",
    brandImage: momCareBrandImage,
    brandTarget: "_self",
    brandTitle: momCareBrandTitle
  })
});
