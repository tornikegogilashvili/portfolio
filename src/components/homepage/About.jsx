import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../data/motion';
import { ContainerSlideIn } from '../../pages/Projects';

const AboutDiv = styled(motion.div)`
  width: 20rem;
  height: auto;
  color: #c3c3c3;
  position: absolute;
  padding: 1.6rem;
  bottom: 0;
  right: 0;  
  font-family: "Inconsolata", monospace;
  overflow: hidden;
`;

const About = () => {
  return (
    <AboutDiv
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    >
      <ContainerSlideIn
      variants={fadeIn("left", "tween", 1.4, 1)}
      >
          <p>
            
            Techs: Javascript, ReactJs, CSS,  SASS, HTML, Figma, Agile, typescript, Git, Rest API, Vue.js, 
          </p>
          <br></br>
          <p>
            
            I don't finish my studies because I still have a lot to learn. Every day I try to learn something new and be better than the day before. I am currently working in a company that has created an application based on artificial intelligence.  success in the comfort zone is incredible, so I need a new challenge to get out of my comfort zone and create the best version of myself.
            I will be glad if you give me an opportunity to present my professional and also personal skills at the interview

          </p>
        </ContainerSlideIn>
    </AboutDiv>
  )
}

export default About
