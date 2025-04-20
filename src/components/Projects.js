import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Portfolio Website",
      description: "React based Portfolio website",
      imgUrl: projImg5,
      githubLink: "https://github.com/yourusername/PdfChatBot", // Replace with actual GitHub link
      liveLink: "https://yourwebsite.com/PdfChatBot", // Replace with actual live link
    },
    
    {
      title: "Akatsuki Project Hub",
      description: "React webApp",
      imgUrl: projImg4,
      githubLink: "https://github.com/bhaveshdesale/Akatsuki-Project-Hub.git", // Replace with actual GitHub link
      liveLink: "https://akatsuki-project-hub-psi.vercel.app/", // Replace with actual live link
    },
    {
      title: "Notes App",
      description: "Notes Taking App",
      imgUrl: projImg2,
      githubLink: "https://github.com/bhaveshdesale/NotesApp-.git", // Replace with actual GitHub link
      liveLink: "https://appetize.io/app/b_zr5xgx2b46s6devnoebgxosgne", // Replace with actual live link
    },
    // {
    //   title: "Paste Creation App",
    //   description: "WebApp for paste Creation",
    //   imgUrl: projImg3,
    //   githubLink: "https://github.com/yourusername/PasteCreationApp", // Replace with actual GitHub link
    //   liveLink: "https://yourwebsite.com/PasteCreationApp", // Replace with actual live link
    // },
    {
      title: "EcoChat App",
      description: "Android Chatting App",
      imgUrl: projImg1,
      githubLink: "https://github.com/bhaveshdesale/EcoChatApp.git", // Replace with actual GitHub link
      liveLink: "https://appetize.io/app/b_fjuehxnxbdqvcn2kendl5ppv2i", // Replace with actual live link
    },
    // {
    //   title: "Pdf ChatBot",
    //   description: "ChatBot for Pdf interaction",
    //   imgUrl: projImg1,
    //   githubLink: "https://github.com/yourusername/PdfChatBot", // Replace with actual GitHub link
    //   liveLink: "https://yourwebsite.com/PdfChatBot", // Replace with actual live link
    // },
  
    // {
    //   title: "Paste App",
    //   description: "webApp for Paste Creation",
    //   imgUrl: projImg1,
    //   githubLink: "https://github.com/yourusername/PdfChatBot", // Replace with actual GitHub link
    //   liveLink: "https://yourwebsite.com/PdfChatBot", // Replace with actual live link
    // },
    
   
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I’ve built a variety of projects including Android apps, full-stack web apps, backend systems, and AI-based chatbots.
                    These projects showcase my skills across mobile development, frontend design, backend logic, and real-time features.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {/* Content for second tab */}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        {/* Content for third tab */}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
}
