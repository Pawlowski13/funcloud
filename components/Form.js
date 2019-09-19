import React from 'react';

const Form = () =>(
<div className='hero'>
    <br />

    <div className='row'>
      <div className='card'>
      


      <h1>Contact Form:</h1>
          
      <form method="POST" action="https://formspree.io/funcloudpl@gmail.com">
      <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-user"></i></span>
                </div>
        
        <input className="form-control" type="text" name="Full Name" placeholder="Full Name"/>
        </div>

        <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                  <i className="fas fa-at"></i></span>
                </div>

                <input className="form-control" type="email" name="email"  placeholder="Email" 
                aria-label="Email" aria-describedby="basic-addon1"></input>
              
          </div>

        <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                  <i className="fas fa-envelope"></i></span>
                </div>
                <textarea className="form-control" name="message" placeholder="Your message..."></textarea>
        </div>
        
        <br />

        <input className="btn btn-primary" type="submit" value="Submit"/>
      </form>

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
                  text-align: center;
                  text-decoration: none;
                  border-radius: 0%;
                  border-color: #ffffff;
                  color: #434343;
                  background-color: #ffffff;
                  box-shadow: 0px 40px 10px -20px,
                              0px 80px 0px -40px #067df7;
              }
              .card h1 {
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
              span {
                width: 45px;
                text-align: center;
              }
              .input-group {
                margin-top: 25px;
              }
  `}</style>


</div>
)

export default Form;