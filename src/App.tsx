import './App.css';
import selfie from './assets/selfie.jpg';
import resume from "./assets/Resume2024July.pdf"
import { Projects } from './Projects';
import { Links } from './Links';
import { WalleScene } from './Model';
import { SkillList } from './SkillBox';
import { SpeedInsights } from "@vercel/speed-insights/react"
import Experience from './Experience';
import GitHub from './GitHub';


function App() {
  return (
    <>
      <section id="landing">
        <div id="title">
          <h1>Hello, I'm </h1>
          <div style={{ display: "inline" }}>
            <h1 style={{ display: "inline" }} id="name">Raymond</h1>
            <h1 style={{ display: "inline" }}>!</h1>
          </ div>
        </div>
        <div id="snippet">
          <p>I am a </p>
          <div className="words">
            <span className='titlespan'>Programmer</span>
            <span className='titlespan'>Violinist</span>
            <span className='titlespan'>Game Dev</span>
            <span className='titlespan'>Violinist</span>
            <span className='titlespan'>Programmer</span>
          </div>
        </div>
        <WalleScene />
        <a href='mailto:Zhangraymond382@gmail.com'>
          <button id="contact">Contact Me</button>
        </a>
      </section>
      <section className="standardreact">
        <div className='horizontallink'>
          <Links />
        </div>
        <section id="about">
          <h2>About Me</h2>
          <div>
            <p> Using code to build solutions is my goal as a programmer.
              As a lover of both software and hardware, many of my projetcs involve mixing these two aspects of design. 
              From making my own CAD models, to making my own circuit boards and programming them, I enjoy all parts of the design process. 
              Even the WallE rendered above was designed by me in CAD from an old project and ported into a mesh with three.js! 
              Laslty, I absolutely adore game design, so if you ever have an idea you would like to share or
              would like to compete in a Game Jam with me, I would love to connect with you! 
            </p>
            <img src={selfie} alt='Raymond'></img>
          </div>
          
          <section id='githubwrapper'>
            <GitHub />
          </section>
          
          <div id='skillcontainer'>
            <div>
              <h3>Skills and Technologies</h3>
              <SkillList />
              <a href={resume}>
                <button id="contact">Resume</button>
              </a>
            </div>
          </div>
        </section>

        <section id='experiencewrapper'>
          <div id='sectiontitle'>
            <h2>Experience</h2>
            <span className='subheading'>Some people I have worked with!</span>
          </div>
          <div id='experience'>
            <Experience />
          </div>
        </section>

        <section id='projectwrapper'>
          <div id="sectiontitle">
            <h2>Projects</h2>
            <span className='subheading'>Some projects that I have worked on!</span>
          </div>
          <div id='projects'>
            <Projects />
          </div>
        </section>
      </section>
      <div className='footerwrapper'>
        <div id="footer">
          <h2>Come chat with me!</h2>
          <a href='mailto:Zhangraymond382@gmail.com'>
            <button id="contact">Contact Me</button>
          </a>
          <span>Website made by Raymond Zhang 2024 <br />
            Zhangraymond382@gmail.com</span>
        </div>
      </div>
      <SpeedInsights />
    </>
  )
}

export default App
