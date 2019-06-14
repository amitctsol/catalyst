import React from 'react'
        import Helmet from 'react-helmet'

        let stylesStr
if (process.env.NODE_ENV === 'production') {
    try {
        stylesStr = require('!raw-loader!../public/styles.css')
    } catch (e) {
        console.log(e)
    }
}

export default class HTML extends React.Component {
    render() {
        const head = Helmet.rewind()
        let css
        if (process.env.NODE_ENV === 'production') {
            css = (
                    <style
                        id="gatsby-inlined-css"
                        dangerouslySetInnerHTML={{__html: stylesStr }}
                        />
                                )
                    }
            return (
                    <html lang="en">
                        <head>
                            <title>Catalyst</title>
                            <meta charSet="utf-8" />
                            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                            <meta name="theme-color" content="#ff0000" />
                            <meta
                                name="viewport"
                                content="width=device-width, initial-scale=1.0"
                                />
                            {this.props.headComponents}
                            {css}
                            <link href="/img/favicon.png" rel="icon" type="image/x-icon" />
                            <link rel="stylesheet"  href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"/>
                            <link rel="stylesheet"  href="/css/owl.carousel.min.css"/>
                            <link rel="stylesheet"  href="/css/owl.theme.default.min.css"/>
                            <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap" rel="stylesheet" />
                            <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700&display=swap" rel="stylesheet" />         
                        </head>
                        <body>
                            <div id="___gatsby" dangerouslySetInnerHTML={{__html: this.props.body }} />
                            {this.props.postBodyComponents}
                    
                            <script src="/js/jquery.min.js" />
                            <script src="/js/owl.carousel.js" />
                            <script src="/js/main.js" />
                        </body>
                    </html>
                                )
                    }
        }
