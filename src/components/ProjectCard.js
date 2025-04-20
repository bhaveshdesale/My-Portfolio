// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   )
// }




import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink, liveLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx project-card">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="button-container">
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-btn github"
            >
              GitHub Link
            </a>
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-btn live"
            >
              Live Link
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
