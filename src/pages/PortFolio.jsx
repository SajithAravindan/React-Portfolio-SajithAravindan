import React from 'react';//import React from 'react';
import ProjectCards from '../components/Project'//import Project from '../components/Project/index.jsx'
import portfolio from '../projectData.json'//import portfolio from '../projectData.json'


export default function PortFolio() {
  //css styling for the card components
  const cardStyle = {
    padding: ' 0px 10px 10px 10px',
    margin: ' 0px 10px 10px 10px',
    maxwidth: '540px',
    backgroundColor: '#FEFAE0',
  };
  const cardHeaderStyle = {
    backgroundColor: '#FAEDCD',
    color: '#000000',
    textAlign: 'left',
    padding: ' 10px 10px 10px 10px',
    margin: ' 0px 0px 10px 0px',
  };
  return (
    <div style={cardStyle}>
      <div className="row">
        <div className="col-md-12 p-10" style={cardHeaderStyle}>
          <h3 className="text-left"><i className="fa fa-wrench" /> PortFolio</h3>
        </div>
      </div>
      <div className="row align-middle">
        {/* map through the projectData.json file and create a card for each project */}
      {portfolio.map((project) => (
              <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
            ))}
      </div>    
    </div>
  );
}
