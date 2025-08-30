import React from 'react'

const config = {
  footer: <p>MIT 2024 © Hwansoo Kim.</p>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
  readMore: 'Read More →',
  postFooter: null,
  darkMode: false,
  navs: [
    {
      url: '/korean-blog',
      name: 'Korean Blog'
    },
    {
      url: 'https://github.com/pueding',
      name: 'GitHub'
    },
    {
      url: 'https://linkedin.com/in/hwansookim',
      name: 'LinkedIn'
    }
  ]
}

export default config