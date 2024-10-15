import yaml from "js-yaml";

export default async function (eleventyConfig) {
  // copy the `assets` folder to the output as `assets`
  eleventyConfig.addPassthroughCopy("assets");

  // Receives file contents, return parsed data to template
  eleventyConfig.addDataExtension("yml, yaml", (contents) =>
    yaml.load(contents),
  );
}

export const config = {
  dir: {
    input: "src",
    output: "_site",
    includes: "_templates",
  },
};
