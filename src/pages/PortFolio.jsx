import  PWA  from '../images/PWA.png';
import  bookreviewer  from '../images/book-reviewer.png';
import  QRF  from '../images/Quality-Restaurant-Finder.png';
import  TechBlog  from '../images/TechBlog.png';
import  WeatherDashboard  from '../images/WeatherDashboard.png';


export default function PortFolio() {
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
          <h3 className="text-left"><i className="fa fa-wrench"/> PortFolio</h3>
        </div>
      </div>
      <div className="row align-middle">
        <div className="col-md-6 col-lg-4 ">
          <div className="cardcontainer">
            <div className="img-container">
              <img src={PWA} alt="PWA" className="img-fluid" />
            </div>
            <ul className="social-media">
              <li><a href="https://github.com/SajithAravindan/PWA-textEditor.git" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
              <li><a href="https://pwa-texteditor.onrender.com/" target="_blank" rel="noreferrer"><i className="fa fa-cloud-upload"></i></a></li>
            </ul>
            <div className="user-info">
              <h6>PWA</h6>
              <span>A Progressive Web App</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 ">
          <div className="cardcontainer">
            <div className="img-container">
              <img src={bookreviewer} alt="Book Reviewer" className="img-fluid" />
            </div>
            <ul className="social-media">
              <li><a href="https://github.com/SajithAravindan/bookreviewer.git" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
              <li><a href="https://blooming-thicket-72514-75b0ef205a97.herokuapp.com/" target="_blank" rel="noreferrer"><i className="fa fa-cloud-upload"></i></a></li>
            </ul>
            <div className="user-info">
              <h6>Book Reviewer</h6>
              <span>A WebSite to review Books!</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 ">
          <div className="cardcontainer">
            <div className="img-container">
              <img src={QRF} alt="Quality Restaurant Finder" className="img-fluid" />
            </div>
            <ul className="social-media">
              <li><a href="https://github.com/SajithAravindan/quality-restaurant-finder.git" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
              <li><a href="https://sajitharavindan.github.io/quality-restaurant-finder/" target="_blank" rel="noreferrer"><i className="fa fa-cloud-upload"></i></a></li>
            </ul>
            <div className="user-info">
              <h6>Quality Restaurant Finder</h6>
              <span>A Website to find Quality Restaurants near you!!</span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
        <br />          
        </div>
      </div>
      <div className="row align-middle">
        <div className="col-md-6 col-lg-4 ">
          <div className="cardcontainer">
            <div className="img-container">
              <img src={TechBlog} alt="PWA" className="img-fluid" />
            </div>
            <ul className="social-media">
              <li><a href="https://github.com/SajithAravindan/Tech-Blog.git" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
              <li><a href="https://calm-stream-60888-077b07d80633.herokuapp.com/" target="_blank" rel="noreferrer"><i className="fa fa-cloud-upload"></i></a></li>
            </ul>
            <div className="user-info">
              <h6>Tech Blog</h6>
              <span>A Web Based CMS-style blog Application</span>
            </div>
          </div>
        </div>        
        <div className="col-md-6 col-lg-4 column">
          <div className="cardcontainer">
            <div className="img-container">
              <img src={WeatherDashboard} alt="Weather Dashboard" className="img-fluid" />
            </div>
            <ul className="social-media">
              <li><a href="https://github.com/SajithAravindan/weather-dashboard.git" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
              <li><a href="https://sajitharavindan.github.io/weather-dashboard/" target="_blank" rel="noreferrer"><i className="fa fa-cloud-upload"></i></a></li>
            </ul>
            <div className="user-info">
              <h6>Weather Dashboard</h6>
              <span>Weather outlook application for multiple cities!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
