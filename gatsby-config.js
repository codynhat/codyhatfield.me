module.exports = {
  siteMetadata: {
    siteUrl: "https://codyhatfield.me",
    title: "Cody Hatfield",
    author: "Cody Hatfield",
    lang: `en-US`,
    social: [
      {
        name: `GitHub`,
        url: `https://github.com/codynhat`,
      },
      {
        name: `Twitter`,
        url: `https://twitter.com/codynhat`,
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/codyhatfield/`,
      },
      {
        name: `RSS`,
        url: `/rss.xml`,
      },
      {
        name: `PGP`,
        url: `/pgp.asc`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@codynhat/gatsby-theme-cactus",
      options: {
        basePath: "/notes",
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.body,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    slug
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            }
            `,
            output: "/rss.xml",
            title: "Cody Hatfield | Notes Feed",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-fathom",
      options: {
        trackingUrl: "panther.codyhatfield.me",
        siteId: "ZQMDCMXT",
      },
    },
  ],
};
