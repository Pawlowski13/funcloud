import { Twemoji } from 'react-emoji-render';

export default () => (
  <footer>
    <h4>Page made with <Twemoji size={16} text="☕"/> and <Twemoji size={16} text="❤️"/> !!!</h4>
    <h6>© Copyright 2019 || FunCloud</h6>
  
    <style jsx>{`
    footer {
        width: 100%;
        height 300px;
        color:  #ffffff;
        background-color: #067df7;
        padding-top: 40px;
        text-align: center; 
    }
    h4 {
        margin-top: 70px;
        font-weight: bold;
    }
    `}</style>

  </footer>
)