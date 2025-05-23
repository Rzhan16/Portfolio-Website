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
            <div>Machine Learning Lead — UBC Agrobot</div>
            <div className='date'>May 2024 – Present</div>
          </AccordionSummary>
          <AccordionDetails id="accordianbody">
            <h4>Vancouver, BC</h4>
            <ul>
                <li>Leading a team of 10+ in developing ML models for agriculture (92% accuracy in grape leaf disease tracking)</li>
                <li>Implemented Agile methodologies (20% reduction in delivery timelines)</li>
                <li>Spearheaded CNN development (TensorFlow, Python) for disease tracking</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion id='accordian'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="accordianheader"
          >
            <div>Machine Learning Engineer — UBC Agrobot</div>
            <div className='date'>Sep 2023 – May 2024</div>
          </AccordionSummary>
          <AccordionDetails id="accordianbody">
            <h4>Vancouver, BC</h4>
            <ul>
                <li>Developed a CNN model for grape leaf disease classification (15% robustness improvement)</li>
                <li>Used data augmentation for lighting/shade variations</li>
                <li>Collaborated with cross-functional teams</li>
            </ul>
          </AccordionDetails>
        </Accordion>

        <Accordion id='accordian'>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="accordianheader"
          >
            <div>Game Animator and UI/UX Designer — Adventure Piece (Roblox)</div>
            <div className='date'>May 2022 – Sep 2023</div>
          </AccordionSummary>
          <AccordionDetails id="accordianbody">
            <h4>Remote Work</h4>
            <ul>
                <li>Designed and optimized 10+ UI/UX elements (Lua scripting), increasing player engagement by 25% (2.2M+ visits)</li>
                <li>Developed advanced character animations, reducing lag by 30%</li>
                <li>Collaborated with a cross-functional team</li>
            </ul>
          </AccordionDetails>
        </Accordion>
      </>
    )
}
