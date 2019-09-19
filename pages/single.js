import Head from 'next/head';
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default class extends Component {

    static async getInitialProps( context ){

        const slug = context.query.slug

        const response = await axios.get( `https://marcinp.smarthost.pl/wp/wp-json/wp/v2/stories?slug=${ slug }` )

        // Return our only item in array from response to stories object in props.
        return {
            story: response.data[0]
        }
    }

    render() {
        return (
            <Fragment>
            <Navigation/>
            <Head>
                <title>{ this.props.story.title.rendered }</title>
                <meta name="description" content="Blog about programming and DIY." />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet" />
            </Head>
            <div className='hero'>
                    <h1 className='title'>{ this.props.story.title.rendered }</h1>

                    
                        <div className='row'>
                            <img src={this.props.story.better_featured_image.media_details.sizes.medium_large.source_url} />
                            
                            <div className='card'>
                                <article dangerouslySetInnerHTML={ {__html: this.props.story.content.rendered} } />
                            </div>

                        </div>

                        <style jsx>{`
                        .hero {
                            width: 100%;
                            height: 100%;
                            color:  #434343;
                            background-color: #e6ecf0;
                        }
                        .title {
                            margin: 0;
                            width: 100%;
                            padding-top: 1.25em;
                            line-height: 1.5em;
                            font-size: 4rem;
                            color: #067df7;
                        }
                        .title,
                        .description {
                            text-align: center;
                        }
                        .description {
                            color: #434343;
                        }
                        .row {
                            max-width: 880px;
                            margin: 2em auto 6em;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-around;
                        }
                        .card {
                            margin-bottom: 90px;
                            padding: 2em 2em 4em;
                            width: 720px;
                            text-align: left;
                            text-decoration: none;
                            border-radius: 0%;
                            border-color: #ffffff;
                            color: #434343;
                            background-color: #ffffff;
                            box-shadow: 0px 40px 10px -20px,
                                        0px 80px 0px -40px #067df7;
                        }
                        .card h3 {
                            margin: 0;
                            color: #067df7;
                            font-size: 2.5rem;
                        }
                        .card p {
                            margin: 0;
                            padding: 0.8em 0 0;
                            font-size: 1rem;
                            color: #333;
                        }
                        .spacePost {
                            margin-bottom: 70px;
                            list-style-type: none;
                        }
                        img{
                            display: block;
                            margin-left: auto;
                            margin-right: auto;
                            width: 100%;
                            max-width: 720px;
                            max-height: 600px;
                        }

                        `}</style>


                        </div>
                        <Footer />
          </Fragment>
        )
    }
}