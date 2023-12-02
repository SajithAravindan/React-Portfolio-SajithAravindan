import PWA from '../images/PWA.png';
import bookreviewer from '../images/book-reviewer.png';
import QRF from '../images/Quality-Restaurant-Finder.png';
import TechBlog from '../images/TechBlog.png';
import WeatherDashboard from '../images/WeatherDashboard.png';


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
          <h3 className="text-left"><i className="fa fa-wrench" /> PortFolio</h3>
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
              <h4>PWA</h4>
              <span>Webpack+Workbox/Concurrently
                JS/IndexedDB/Express
                NodeJS/Babe
              </span>
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
              <h4>Book Reviewer</h4>
              <span>Node/Express/js/Sequelize/MySQL
                bcrypt/nodemailer/Bootstrap</span>
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
              <h4>Quality Restaurant Finder</h4>
              <span>TailWind CSS/JS/REST API</span>
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
              <h4>Tech Blog</h4>
              <span>Node/Express/Js/Sequelize/MySQL/
                Bootstrap</span>
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
              <h4>Weather Dashboard</h4>
              <span>TailWind CSS/JS/REST API/Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
