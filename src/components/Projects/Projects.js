import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import houseSell from "../../Assets/Projects/housesell.PNG";
import danapayClient from "../../Assets/Projects/danapay-1.png";
import danapayAdmin from "../../Assets/Projects/danapay-2.png";
import rapidWristband from "../../Assets/Projects/rapid-2.png";
import mintGolf from "../../Assets/Projects/mintgolf.png";
import foodDelivery from "../../Assets/Projects/foodDelivery.png";
import treeDefi from "../../Assets/Projects/tree.PNG";
import miroTalk from "../../Assets/Projects/mirotalk-header.gif";
import marketplace from "../../Assets/Projects/img_20220803.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={houseSell}
              isBlog={false}
              title="House Selling project"
              description="E-commerce project for buying and selling house.
              AngularJS, Angular CLI, Angular Material, Prime NG used.
               Integrated Google Maps API"
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://housebuyersofamerica.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={danapayClient}
              isBlog={false}
              title="Danapay Client Financial Project"
              description="Financial Project for sending Money using Crypto and several Bank accounts. Used React and Node.js and implemented Sumsub registration."
              ghLink="https://github.com/Brilliantwebdev1125/Danapay-app-front"
              demoLink="https://app.danapay.io"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={danapayAdmin}
              isBlog={false}
              title="Danapay Admin Project"
              description="Danapay Admin project for managing users, transactions and so on. Used Vue.js and Laravel and implemented several Blockchain features using Solidiy."
              // ghLink="https://github.com/Brilliantwebdev1125/Danapay-app-front"
              demoLink="https://admin.danapay.io"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rapidWristband}
              isBlog={false}
              title="Wristbands online shopping project"
              description="RapidWristband online shopping project in United States. Used Laravel and Aemios for CMS. I made version 1.0 from scratch and upgraded to 2.0 with Ionic-React. I used Cypress and Laravel Dusk for Testing."
              ghLink="https://github.com/Brilliantwebdev1125/RapidWristband1.0.git"
              demoLink="https://rapidwristbands.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mintGolf}
              isBlog={false}
              title="Golf NFT minting project"
              description="NFT Mint Golf Project. Used Solidity, ERC20 Token, React for Front-End. Can connect wallet using Metamask and integrated using web3.js."
              // ghLink="https://github.com/Brilliantwebdev1125/RapidWristband1.0.git"
              demoLink="http://cryptogolf.io/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodDelivery}
              isBlog={false}
              title="Food Delivery App"
              description="Food Delivery Project using MERN stack. Deployed using Heroku. Implemented Admin and Customer side. It is simple Online-shopping project."
              ghLink="https://github.com/Brilliantwebdev1125/Food-Delivery-App"
              demoLink="https://fast-food-delivery-app.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={treeDefi}
              isBlog={false}
              title="Tree Defi Project"
              description="Users can buy Trees using Crypto and contribute in decreasing CO2. Developed Defi Contract, Front-End using React and integrated using web3.js. "
              // ghLink="https://github.com/Brilliantwebdev1125/Food-Delivery-App"
              demoLink="https://app.treedefi.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={miroTalk}
              isBlog={false}
              title="MiroTalk Video Chat App"
              description="Best video chat app.Free WebRTC - P2P - Simple, Secure, Fast Real-Time Video Conferences Up to 4k and 60fps, compatible with all browsers and platforms."
              ghLink="https://github.com/Brilliantwebdev1125/MiroTalk-Video-Chat-App"
              demoLink="https://p2p.mirotalk.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marketplace}
              isBlog={false}
              title="NFT Marketplace"
              description="NFT marketplace with React, Node and Blockchain Technology. Developed from scratch."
              // ghLink="https://github.com/Brilliantwebdev1125/MiroTalk-Video-Chat-App"
              demoLink="https://crea2ors.io"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
