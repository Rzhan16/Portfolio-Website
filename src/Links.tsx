import "./Links.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Links() {
    return (
      <>
        <a href='https://www.linkedin.com/in/raymond-zhang382' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className='icon' icon={faLinkedin} />
        </a>
        <a href='https://github.com/Rzhan16' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className='icon' icon={faGithub} />
        </a>
        <a href='https://www.instagram.com/raymond_56433/' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className='icon' icon={faInstagram} />
        </a>
        <a href='mailto:zhangraymond382@gmail.com'>
          <FontAwesomeIcon className='icon' icon={faEnvelope} />
        </a>
      </>
    );
}
