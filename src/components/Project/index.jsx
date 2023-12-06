import React from 'react';

function Project(props) {
    return (
        <div className="col-md-6 col-lg-4 ">
            <div className="cardcontainer">
                <div className="img-container">
                    <img alt={props.name} src={props.image} className="img-fluid" />
                </div>
                <ul className="social-media">
                    <li><a href={props.github} target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
                    <li><a href={props.deploy} target="_blank" rel="noreferrer"><i className="fa fa-cloud-upload"></i></a></li>
                </ul>
                <div className="user-info">
                    <h4>{props.name}</h4>
                    <span>{props.topics}</span>
                </div>               
            </div>
        </div>
    );
}

export default Project;