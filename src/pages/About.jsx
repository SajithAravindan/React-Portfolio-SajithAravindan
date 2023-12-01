// This is a static page mocking an "About Us" section
import  Hero  from '../images/Profile3.jpg';
export default function AboutPage() {
  const cardStyle = {
    padding: ' 10px 10px 10px 10px',
    margin: ' 50px 10px 10px 10px',
    maxwidth: '540px',
    backgroundColor: '#FEFAE0',
  };
  const cardHeaderStyle = {
    backgroundColor: '#FAEDCD',
    color: '#000000',
    textAlign: 'left',
    paddingLeft: '10px',
 };
  return (
    <div className="card mb-3" style={cardStyle}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={Hero}
            alt="Profile Picture" height={750} width={750}
            className="img-fluid rounded-start"
          />
        </div>
        <div className="col-md-8">
        <div className="card-header p-0">
          <div style={cardHeaderStyle}>
            <h3><i className="fa fa-user"></i> About ME </h3>
            
          </div>
        </div>
          <div className="card-body">            
            <p className="card-text">
              Hi, Sajith Aravindan here. A technology specialist with a strong business sense, with an overall experience of 
              15 years plus in Analysis, Design, Development and Project management of Enterprise 
              products and Web based applications. Primary expertise is in Enterprise Procurement 
              systems, Knowledge Management systems, Enterprise portals, Content Management Systems 
              and Document Management systems.
              </p>
              <p className="card-text">
              I am committed to knowing and working with the latest technologies to produce 
              world-class success through innovative, and grow with the company.
            </p>
            <p className="card-text">
              I took a break from IT and over the past 5 years I work in the Retail Sector. This Boot Camp is my first step to switching my career back to where my Heart Belongs. They say <big className="text-muted"> Home is Where your Heart IS!!!</big>... Its so True!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
