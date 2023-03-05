import React from 'react'
import './home.css';
import CTA from './CTA';
import ME from '../../assets/me.jpg';
import HomeSocial from './HomeSocials';
import Typewriter from 'typewriter-effect';
// import {HiArrowDownCircle} from 'react-icons/hi';
import Greeting from './Greetings';
import Fade from 'react-reveal/Fade';


const Home = () => {
  return (
    <header id = "home">
      <Fade right delay= {20} duration ={600}>
      <div className="container-fluid home">
        <div className="container header_container">
        
          <h3 className="text_h3"><Greeting/></h3>
          <h1 className='text_h1'>I'm Benard Kipngeno</h1>

          <h3 className="text_light"><Typewriter
            options={{
              strings: [
                'Full-Stack Developer',
                'Cloud DevOps Engineer'], 
              autoStart: true,
              loop: true,
              delay: 2,
              pauseFor: 1500
            }}></Typewriter>
          </h3>
          <p>
          I am a full stack developer with experience in building user-focused websites. My expertise in front-end and back-end development, and architecting scalable cloud solutions.

          My focus is on delivering results by creating solutions that give businesses a competitive advantage and promote revenue growth. I am skilled at designing visually appealing and highly functional websites and platforms that are intuitive to use.

          I have strong analytical problem-solving skills and experience in cloud DevOps. This enables me to design cloud-optimized solutions that can handle increased traffic and data storage in cloud-based applications with minimal downtime.        
          </p>
          <CTA/>

          <HomeSocial/>
          <a href='#contact' className='scroll_down'>Click to Scroll Down</a>
        </div>
        <div className='about_me-home'>
          <div className='me'>
              <img src={ME} alt="me" /> 
        </div>
        </div>
      </div>
      </Fade>
    </header>
  )
}

export default Home