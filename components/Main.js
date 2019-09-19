import React from 'react';
import { Twemoji } from 'react-emoji-render';
import Carousel from 'nuka-carousel';

export default () => (
    <div className='hero'>
    
        <h1 className='title'>FunCloud <Twemoji size={32} text="☁️😃"/></h1>
        <h5 className='description'>
        The best place to learn cloud development !!!
        </h5>
   
        <div className='row'>
        <Carousel withoutControls autoplay autoplayInterval={4800} wrapAround>
            <img src="/static/dev.png" />
            <img src="/static/docky.jpg" />
            <img src="/static/racks.jpg" />
        </Carousel>
        </div>

        <div className='body-row'>

            <a className='card'>
            <h3>Interested in cloud development ?</h3>
            <p>Welcome at FunCloud. We are passionate devs who loves teach
            people about making apps in the cloud enviorment and scale them to infinity.</p>
            </a>

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
            font-weight: slim;
        }
        .row {
            max-width: 1200px;
            margin: 3em auto 0.5em;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
        .body-row {
            max-width: 1200px;
            margin: 1em auto 6em;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            }
        .card {
            margin-top: 30px;
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

            max-height: 700px;
        }
    `}</style>

    </div>
)

