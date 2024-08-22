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
        hook: "Share Images like a Pro!",
        tech: "React | Node.js | Express.js | MongoDB",
        overlaytitle: "Imagehub",
        desc: `ImageHub is a comprehensive and robust full-stack image-sharing platform designed to empower users with a seamless experience for uploading, managing, and sharing images online. This platform allows users to easily create accounts, authenticate securely, and enjoy uninterrupted access to their personalized image galleries.`,
        link: `https://github.com/Rzhan16/ImageHub`,
        img: Image
      },
      {
        title: "UniBudget",
        hook: "Take Control of Your Finances",
        tech: "React | Vite | JavaScript",
        overlaytitle: "UniBudget",
        desc: `UniBudget is an advanced budget management application built using React and Vite. This application empowers users to create and manage accounts, set up multiple budgets, track expenses, and visualize their financial data effortlessly. UniBudget offers functionalities to delete budgets, expenses, and accounts with ease, ensuring seamless budget management.`,
        link: `https://github.com/Rzhan16/UniBudget`,
        img: Uni
      },
      {
        title: "Breast Cancer Prediction",
        hook: "Predicting Breast Cancer with Precision",
        tech: "Python | Scikit-learn | SMOTE",
        overlaytitle: "Breast Cancer Prediction",
        desc: `Leverage cutting-edge machine learning to enhance breast cancer detection and prognosis. Our Breast Cancer Prediction Model employs advanced techniques in Python and Scikit-learn, coupled with SMOTE for balanced data handling. Explore how this model offers high-accuracy predictions using the comprehensive Sklearn breast cancer dataset.`,
        link: `https://github.com/Rzhan16/breast-cancer-prediction`,
        img: Breast
      },
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