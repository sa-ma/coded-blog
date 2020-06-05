module.exports = {
  siteMetadata: {
    title: `Coded - A blog by Samaila Bala`,
    name: `Coded Blog`,
    siteUrl: `https://coded.blog`,
    description: `A developer's blog catering to web development topics`,
    hero: {
      heading: `Welcome to Coded where I (Samaila Bala) :) get to share my knowledge on web developemnt topics.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/samabalap`,
      },
      {
        name: `github`,
        url: `https://github.com/sa-ma`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/samabalap`,
      },
    ],
  },
  plugins: [
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        basePath: '/',
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {},
    },
  ],
};
