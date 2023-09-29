import React from "react";
import styled from "styled-components";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";



const Info = styled.div`
  width: 19rem;
  color: #c3c3c3;
  margin: 1.6rem;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 99;
`;

const Social = styled.img`
  background-color: black;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 1.6rem;
`;

const Contact = () => {
  return (
    <>
      <Info>
        <p>
          
          Email: tornikegogilashvili@yahoo.com
          
        </p>
        <Center>
          <a 
            href="https://github.com/tornikegogilashvili" 
            target="blank"
          >
              <Social src={Github} alt="toko's Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/tornike-gogilashvili/"
            target="blank"
          >
            <Social src={Linkedin} alt="toko's Linkedin" />
          </a>
        </Center>
      </Info>
    </>
  );
};

export default Contact;
