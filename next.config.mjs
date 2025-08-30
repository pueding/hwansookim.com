import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.tsx'
})

export default withNextra({
  async redirects() {
    return [
      {
        source: '/blog-for-my-children/2022/09/13/조직-구조-파악의-핵심-essential-node-villain-node',
        destination: '/blog-for-my-children/2022/09/13/essential-node-villain-node',
        permanent: true,
      },
      {
        source: '/blog-for-my-children/2022/08/21/많은-경험의-필요성',
        destination: '/blog-for-my-children/2022/08/21/importance-of-many-experiences',
        permanent: true,
      },
    ]
  },
})