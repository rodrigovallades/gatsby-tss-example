module.exports = {
  siteMetadata: {
    title: `gatsby-tss-example`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Atkinson Hyperlegible`,
            file: `https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Inter:wght@300;400;500;600;700;800&display=swap`,
          },
        ],
      },
    },
  ],
};
