module.exports = {
    siteMetadata: {
        title: 'CPFoods',
        description: 'Blazing-fast transactions for real world applications',
        siteUrl: 'http://167.99.168.72/',
        author: 'jaxx2104',
        twitter: 'jaxx2104',
        adsense: '',
    },
    pathPrefix: '/',
    plugins: [
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                path: `${__dirname}/src/pages`,
                name: 'pages',
            },
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://foundation.us18.list-manage.com/subscribe/post?u=bb222487a3611557609e8cf8d&amp;id=911847255a', // see instructions section below
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false,
                            wrapperStyle: 'margin-bottom: 1.0725rem;',
                        },
                    },
                    {
                        resolve: 'gatsby-remark-responsive-iframe',
                        options: {
                            wrapperStyle: 'margin-bottom: 1.0725rem',
                        },
                    },
                    'gatsby-remark-prismjs',
                    'gatsby-remark-copy-linked-files',
                    'gatsby-remark-smartypants',
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'CPFoods',
                short_name: 'CPFoods',
                description: 'Blazing-fast transactions for real world applications',
                homepage_url: 'https://gatstrap.netlify.com',
                start_url: '/',
                background_color: '#fff',
                theme_color: '#673ab7',
                display: 'standalone',
                icons: [
                    {
                        src: '/img/android-chrome-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: '/img/android-chrome-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: '',
            },
        },
        {
            resolve: 'gatsby-plugin-netlify',
            options: {
                mergeSecurityHeaders: true,
                mergeLinkHeaders: true,
                mergeCachingHeaders: true,
            },
        },
        'gatsby-plugin-catch-links',
        'gatsby-plugin-offline',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-react-next',
        'gatsby-plugin-sass',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-twitter',
        'gatsby-transformer-sharp',
    ],
}
