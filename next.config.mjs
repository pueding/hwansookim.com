import nextra from "nextra";

const withNextra = nextra({});

export default withNextra({
  turbopack: {
    resolveAlias: {
      // Path to your `mdx-components` file with extension
      "next-mdx-import-source-file": "./mdx-components.tsx",
    },
  },
  async redirects() {
    return [
      // Redirect blog-for-my-children index to first post
      {
        source: "/blog-for-my-children",
        destination: "/blog-for-my-children/2021-06-28-preface",
        permanent: false,
      },
      // Redirects from Korean filenames
      {
        source:
          "/blog-for-my-children/2022-09-13-조직-구조-파악의-핵심-essential-node-villain-node",
        destination: "/blog-for-my-children/2022-09-13-essential-node-villain-node",
        permanent: true,
      },
      {
        source: "/blog-for-my-children/2022-08-21-많은-경험의-필요성",
        destination: "/blog-for-my-children/2022-08-21-importance-of-many-experiences",
        permanent: true,
      },
      // Redirects from old nested paths to new flat paths
      {
        source: "/blog-for-my-children/:year(\\d{4})/:month(\\d{2})/:day(\\d{2})/:slug",
        destination: "/blog-for-my-children/:year-:month-:day-:slug",
        permanent: true,
      },
    ];
  },
});
