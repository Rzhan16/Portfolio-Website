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
          <h1>Raymond Zhang</h1>
          <h2>Computer Science Student | Machine Learning & Full-Stack Developer</h2>
          <p className="sub-headline">
            Passionate about building intelligent solutions and innovative web applications. Currently studying at the University of British Columbia, expecting to graduate in May 2027.
          </p>
          <div className="cta-buttons">
            <a href="#projects">
              <button className="cta-button primary">View My Projects</button>
            </a>
            <a href="#contact">
              <button className="cta-button secondary">Get In Touch</button>
            </a>
          </div>
        </div>
        <WalleScene />
      </section>
      <section className="standardreact">
        <div className='horizontallink'>
          <Links />
        </div>
        <section id="about">
          <h2>About Me</h2>
          <div>
            <p>
              I am Raymond Zhang, a Computer Science student at the University of British Columbia, expecting to graduate in May 2027. My passion lies in machine learning and its real-world applications, particularly in agricultural technology, where I've contributed to projects like UBC Agrobot and disease tracking systems.
            </p>
            <p>
              As a full-stack developer, I've built platforms like ImageHub, demonstrating my ability to create scalable and user-friendly applications. My experience in game development and UI/UX design is showcased through my work on Adventure Piece (Roblox), which has garnered over 2.2M player visits.
            </p>
            <p>
              I thrive in collaborative environments and have extensive experience working with Agile methodologies. My technical expertise spans across Python, JavaScript/TypeScript, C++, Java, TensorFlow, PyTorch, React, Node.js, and MongoDB, allowing me to tackle diverse technical challenges.
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
          <h2>Get In Touch</h2>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
              <button className="social-button">LinkedIn</button>
            </a>
            <a href="https://github.com/Rzhan16" target="_blank" rel="noopener noreferrer">
              <button className="social-button">GitHub</button>
            </a>
            <a href='mailto:Zhangraymond382@gmail.com'>
              <button className="social-button">Email</button>
            </a>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          <span>Website made by Raymond Zhang 2024 <br />
            Zhangraymond382@gmail.com</span>
        </div>
      </div>
      <SpeedInsights />
    </>
  )
}

export default App
