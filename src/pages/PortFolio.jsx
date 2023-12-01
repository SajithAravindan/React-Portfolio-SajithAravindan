import  PWA  from '../images/PWA.png';
import  bookreviewer  from '../images/book-reviewer.jpg';
import  QRF  from '../images/Quality-Restaurant-Finder.jpg';
import  TechBlog  from '../images/TechBlog.jpg';
import  WeatherDashboard  from '../images/WeatherDashboard.jpg';


export default function PortFolio() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">PortFolio</h2>
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
              <h2>PWA</h2>
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
              <h2>Book Reviewer</h2>
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
              <h2>Quality Restaurant Finder</h2>
              <span>A Website to find Quality Restaurants near you!!</span>
            </div>
          </div>
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
              <h2>Tech Blog</h2>
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
              <h2>Weather Dashboard</h2>
              <span>Weather outlook application for multiple cities!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
