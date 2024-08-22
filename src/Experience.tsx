import './Experience.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Experience() {
    return(
        <>
        <Accordion id='accordian'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="accordianheader"
          >
            <div>CChan Project — Stock Price Analysis</div>
            <div className='date'>July 2024 – Present</div>
          </AccordionSummary>
          <AccordionDetails id="accordianbody">
          <h4>Ontario, Ottawa</h4>
          <p>Python, CChan Framework, Pandas, Matplotlib</p>
            <ul>
                <li>Collaborated with two PhD researchers to develop an open-source CChan framework for advanced stock price analysis, supporting morphological and dynamic trading signals.</li>
                <li>Optimized settings like bi strict, divergence rate, and zs algo, resulting in a 25% improvement in market trend accuracy and actionable insights.</li>
                <li>Implemented visualization features including MACD and trend line plotting, enhancing data clarity and user interaction.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion id='accordian'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="accordianheader"
          >
            <div>Game Animator</div>
            <div className='date'>May 2022 – Sep 2023</div>
          </AccordionSummary>
          <AccordionDetails id="accordianbody">
          <h4>Adventure Piece (Roblox), Remote</h4>
            <ul>
                <li>Engineered advanced fighting style animations using Lua scripting in Roblox Studio, significantly enhancing combat mechanics for Adventure Piece, a game with more than 2.2 million player visits.</li>
                <li>Collaborated with a cross-functional team of developers and artists to seamlessly integrate animations, resulting in a 25% increase in player engagement and positive game reviews.</li>
                <li>Optimized animation performance through rigorous A/B testing and iterative refinements, achieving a 30% reduction in lag and delivering an immersive and responsive gaming experience.</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </>
    )
}
