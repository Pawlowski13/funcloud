import Link from 'next/link';

export default () => (
    <nav>
    <ul>
        <li><img src="/static/Logo.png" alt='Logo' /></li>
        <li><Link href="/"><a href="/"><i className="fas fa-home btn-lg"></i>Home</a></Link></li>
        <li><Link href="/posts"><a href="/posts"><i className="fas fa-align-left btn-lg"></i>Posts</a></Link></li>
        <li><Link href="/contact"><a href="/contact"><i className="far fa-envelope btn-lg"></i>Contact</a></Link></li>
        <li><Link href="https://github.com/zeit/next.js"><a><i className="fab fa-github btn-lg"></i>Github</a></Link></li>
    </ul>
    
    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        flex-wrap: wrap;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
        justify-content: flex-start;
        flex-direction: row;
      }
      a {
        margin: 10px;
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
      img{
        margin-top: 12.46px;
        margin-left: 21.46px;
        width: 80px;
        height: 35px;
      }
    `}</style>
    
    </nav>
)