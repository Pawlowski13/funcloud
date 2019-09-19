import Head from 'next/head';
import Link from 'next/link';
import { Component, Fragment } from 'react';
import { Twemoji } from 'react-emoji-render';
import Moment from 'react-moment';
import axios from 'axios';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default class extends Component {

    static async getInitialProps () {
        
        const response = await axios.get( 'https://marcinp.smarthost.pl/wp/wp-json/wp/v2/stories' )

        return {
            stories: response.data
          }
    }

    render() {
        return (
            <Fragment>
                <Navigation/>
                <Head>
                    <title>Posts</title>
                    <meta name="description" content="Posts about programming and DIY." />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                    <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet" />
                </Head>

                <div className='hero'>
                    <h1 className='title'>Our Blog Page <Twemoji size={32} text="😃"/></h1>
                        <h4 className='description'>
                        <Twemoji size={16} text="🔥🔥"/> Hot news from world <Twemoji size={16} text="🌎 🔥🔥"/>
                        </h4>

                        <div className='row'>

                                <ul>{
                                    this.props.stories.map( story => {
                                        
                                        return(<li className='spacePost'>
                                                <img src={story.better_featured_image.media_details.sizes.medium_large.source_url} />
                                                
                                                <a className='card' key={ story.id }>
                                                    
                                                    <Link href={ `/posts/${ story.slug }` }>
                                                        <a href={ `/posts/${ story.slug }` }>
                                                            { story.title.rendered }
                                                        </a>
                                                    </Link>
                                                    
                                                    <h2> 
                                                        <Moment fromNow> 
                                                            { story.date } 
                                                        </Moment>  
                                                    </h2>
                                                    <h3>Author: { story.acf.author } </h3>
                                                    <a href={ story.acf.twitter }><i className="fab fa-twitter"></i></a>
                                                </a>
                                    
                                        </li>)
                                    })
                                    
                                }</ul>
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
                            font-weight: slim;
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
                            padding: 2em 2em 4em;
                            max-width: 720px;
                            text-align: left;
                            border-radius: 0%;
                            color: #434343;
                            border-color: #ffffff;
                            background-color: #ffffff;
                            box-shadow: 0px 40px 10px -20px,
                                        0px 80px 0px -40px #067df7;
                        }
                        .card a {
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
                            margin-top: 30px;
                            margin-bottom: 90px;
                            list-style-type: none;
                            margin-right: 50px;
                        }
                        img{
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