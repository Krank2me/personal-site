require('dotenv').config();

module.exports = {
    siteMetadata: {
        title: 'Frank Betancur 🐼',
        url: 'https://frankbetancur.dev',
        image: 'preview.png',
        language: 'en',
        description: ' Backend Developer| Frontend Padawan | Co-Organize of @MedellinJS | Member of @avanet | Mentor at @SheCodesAngular and @AngularMedellin',
        socialLinks: {
            github: 'https://github.com/Krank2me',
            twitter: 'https://twitter.com/KranK2Me',
            facebook: 'https://www.facebook.com/FrankBetancur',
            web: 'https://frankbetancur.dev',
            mailto: 'mailto:alejok6@gmail.com',
        },
    },
    plugins: [{
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'elevator-pitch-screens',
                path: 'content/elevator-pitch/screens',
            },
        },
        // {
        //   resolve: 'gatsby-source-filesystem',
        //   options: {
        //     name: 'elevator-pitch-demo-screens',
        //     path: `${__dirname}/content/screens`,
        //   },
        // },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'elevator-pitch-images',
                path: 'content/elevator-pitch/images',
            },
        },
        // {
        //   resolve: 'gatsby-source-filesystem',
        //   options: {
        //     name: 'elevator-pitch-demo-images',
        //     path: `${__dirname}/content/images`,
        //   },
        // },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-transformer-remark',
        'gatsby-plugin-catch-links',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: process.env.GOOGLE_ANALYTICS_ID,
            },
        },
        'gatsby-plugin-emotion',
        {
            resolve: 'gatsby-plugin-compile-es6-packages',
            options: {
                modules: ['gatsby-theme-elevator-pitch'],
            },
        },
    ],
};