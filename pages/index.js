import Head from 'next/head';
import { Component, Fragment } from 'react';
import Navigation from '../components/Navigation';
import Main from '../components/Main';
import Footer from '../components/Footer';

 const home = () => (
    <Fragment>
        <Navigation/>
        <Head>
            <title>Home page</title>
            <meta name="description" content="Blog about programming and DIY." />
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <link href="https://use.fontawesome.com/releases/v5.0.2/css/all.css" rel="stylesheet" />
        </Head>
        <Main/>
        <Footer />
    </Fragment>
    
  )

export default home