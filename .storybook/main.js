// const path = require("path");
// const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },

  // this part is necessary because of chakra UI uses emotion version 11, but Storybook uses emotion 10,
  // therefore alliases need to be tweaked. See https://emotion.sh/docs/emotion-11 for breaking changes between emotion 10 and emotion 11.

  // This fix is taken from following links:
  //    https://github.com/chakra-ui/chakra-ui/issues/2527#issuecomment-728161743
  //    https://github.com/storybookjs/storybook/issues/13114#issuecomment-846464338
  //    https://issuehunt.io/r/storybookjs/storybook/issues/15858
  
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          // "@emotion/core": toPath("node_modules/@emotion/react"),
          // "emotion-theming": toPath("node_modules/@emotion/react"),
          "@emotion/core": "@emotion/react",
          "emotion-theming": "@emotion/react",
        },
      },
    };
  },
}