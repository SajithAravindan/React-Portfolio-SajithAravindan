// This is a static page mocking an "About Us" section for our fake user data
import ResumePdf from "../Resume.pdf";

export default function Resume() {
  const cardStyle = {
    padding: ' 0px 10px 10px 10px',
    margin: ' 0px 10px 10px 10px',
    maxwidth: '540px',
    backgroundColor: '#FEFAE0',
  };
  const cardHeaderStyle = {
    backgroundColor: '#FAEDCD',
    color: '#000000',
   
    padding: ' 10px 10px 10px 10px',
    margin: ' 0px 0px 10px 0px',
  };
  const cardNavStyle = {
    backgroundColor: '#E9EDC9',
    color: '#000000',

  };
  return (
    <div style={cardStyle}>
      <div className="row">
        <div className="col-md-6 col-lg-6 p-10" style={cardHeaderStyle}>
          <h3 className="text-left"><i className="fa fa-file" /> Resume</h3>
          </div>
          <div className="col-md-6 col-lg-6 p-10" style={cardHeaderStyle}>
          <a href={ResumePdf} download="Sajith Aravindan Resumé"
          target="_blank" 
          style={{
            display: "flex-end",
            textAlign: 'right',
            paddingTop: "10px",
          }}
          rel="noreferrer">         
          <h3><i className="fa fa-download" /></h3>
        </a>
        </div>
      </div>
      <div className="container ">
        <div className="container col-sm p-2 ">
          <div className="card">
            <div className="card-header" style={cardNavStyle}>
              <ul className="nav nav-tabs card-header-tabs" data-bs-tabs="tabs" style={cardNavStyle}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="true" data-bs-toggle="tab" href="#frontEnd">FrontEnd Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#backEnd">BackEnd Skills</a>
                </li>
              </ul>
            </div>
            <form className="card-body tab-content">
              <div className="tab-pane active" id="frontEnd">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li>TailWind</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="tab-pane" id="backEnd">
                <ul>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MySQL, Sequelize</li>
                  <li>MongoDB, Mongoose</li>
                  <li>MsSQL</li>
                  <li>IndexedDB</li>
                  <li>ASP.NET, VB.NET</li>
                  <li>C#, VB, ASP,VB Script</li> 
                  <li>Java</li>
                  <li>REST API</li>
                  <li>GraphQL</li>
                  <li>Progressive Web Applications (PWA)</li>
                  <li>Single Page Applications (SPA)</li>
                  <li>Model View Controller (MVC)</li>  
                  <li>PHP</li>
                  <li>WordPress</li>
                </ul>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
