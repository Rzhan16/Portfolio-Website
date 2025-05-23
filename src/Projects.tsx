import Image from "./assets/Imagehub.png";
import Uni from "./assets/Unibudget.png";
import Breast from "./assets/Breastcancer.png";
import "./Projects.css";

function MakeProject({ title, hook, tech, overlaytitle, desc, link, img, vid }: Details) {
  let media;
  if (vid) {
    media = <video autoPlay loop muted src={vid}></video>
  }
  else {
    media = <img src={img} alt={title}></img>
  }
    return (
      <div className='project'>
        {media}
        <div className='cardDesc'>
          <h3>{title}</h3>
          <span style={{padding:"0rem", color:"white"}}>{tech}</span>
          <p>{hook}</p>
        </div>
        <div className='cardInfo'>
          <h3>{overlaytitle}</h3>
          <p>{desc}</p>
          <a href={link}>
            <button>See More</button>
          </a>
        </div>
      </div>)}
  
  interface Details {
    title: string;
    hook: string;
    tech: string;
    overlaytitle: string;
    desc: string;
    link: string;
    img?: string;
    vid?: string;
  }
  
export function Projects() {
    const data: Details[] = [
      {
        title: "ImageHub",
        hook: "Full-stack Image Sharing Platform",
        tech: "React | Node.js | Express.js | MongoDB",
        overlaytitle: "ImageHub",
        desc: "A full-stack image-sharing platform built with the MERN stack, featuring user authentication and image uploads via REST APIs. Designed custom hooks for state management and ensured scalable data storage with MongoDB.",
        link: "https://github.com/Rzhan16/ImageHub",
        img: Image
      },
      {
        title: "UniBudget",
        hook: "Budget Management Application",
        tech: "React | Vite | JavaScript | Local Storage | React Router DOM",
        overlaytitle: "UniBudget",
        desc: "A budget management application developed with React and Vite. It allows users to manage accounts, budgets, and expenses through a user-friendly interface, with data persistence using local storage and seamless navigation via React Router DOM.",
        link: "https://github.com/Rzhan16/UniBudget",
        img: Uni
      },
      {
        title: "Multi-Source Stock Sentiment Dashboard",
        hook: "Real-time Stock Sentiment Analysis",
        tech: "FastAPI | Celery | Redis | React/Vite | TypeScript | VADER | TF-IDF | Random Forest",
        overlaytitle: "Stock Sentiment Dashboard",
        desc: "Architected a micro-service stack that streams sentiment snapshots (from Reddit, Twitter, News) to a React/Vite frontend with sub-second latency. Uses VADER and a custom TF-IDF + Random Forest booster for sentiment analysis, overlaying trends on OHLC price data.",
        link: "https://github.com/Rzhan16/Multi-Source-Stock-Sentiment-Dashboard",
        img: Breast
      },
      {
        title: "Buffett Screener",
        hook: "Investment Screening Tool",
        tech: "Python | Streamlit | Pandas | yfinance",
        overlaytitle: "Buffett Screener",
        desc: "A financial screening tool inspired by Warren Buffett's investment strategies, designed to analyze companies and identify potentially undervalued stocks based on fundamental financial metrics.",
        link: "https://github.com/Rzhan16/buffett_screener.git",
        img: Breast
      }
    ];
  
    const listofDetails = data.map((d) => <div key={d.title}>
      <MakeProject
        title={d.title}
        hook={d.hook}
        tech={d.tech}
        overlaytitle={d.overlaytitle}
        desc={d.desc} link={d.link}
        img={d.img}
        vid={d.vid} />
    </div>);
    return (     
      <>{listofDetails}</>
    )
  }