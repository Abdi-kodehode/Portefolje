import { SiGithub, SiLinkedin, SiTwitter, SiGmail } from "react-icons/si";
import './Icons.css'


const Icons = () => {
    return (
      <div className="iconBar">
          <a href="https://github.com" rel="noreferrer" target="_blank"><SiGithub size={30} color='#fff' /></a>
          <a href="https://no.linkedin.com/" rel="noreferrer" target="_blank"><SiLinkedin size={30} color='#fff' /></a>
          <a href="https://twitter.com/i/flow/login" rel="noreferrer" target="_blank"><SiTwitter size={30} color='#fff' /></a>
          <a href="https://mail.google.com" rel="noreferrer" target="_blank"><SiGmail size={30} color='#fff' /></a>
      </div>
    )
  }
  
  export default Icons