// This is a static page mocking an "About Us" section for our fake user data
export default function PortFolio() {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">PortFolio</h1>
        </div>
      </div>
      <div className="row align-middle">
        <div className="col-md-6 col-lg-4 column">
          <div className="cardcontainer">
            <div className="img-container">
              <img src="./src/images/PWA.png" alt="PWA" />
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
        <div className="col-md-6 col-lg-4 column">
          <div className="cardcontainer">
            <div className="img-container">
              <img src="./src/images/book-reviewer.png" alt="Book Reviewer" />
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
        <div className="col-md-6 col-lg-4 column">
          <div className="cardcontainer">
            <div className="img-container">
              <img src="./src/images/Quality-Restaurant-Finder.png" alt="Quality Restaurant Finder" />
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
        <div className="col-md-6 col-lg-4 column">
          <div className="cardcontainer">
            <div className="img-container">
              <img src="./src/images/TechBlog.png" alt="PWA" />
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
              <img src="./src/images/book-reviewer.png" alt="Book Reviewer" />
            </div>
            <ul className="social-media">
              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            </ul>
            <div className="user-info">
              <h2>Aniket Singh</h2>
              <span>20-july</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 column">
          <div className="cardcontainer">
            <div className="img-container">
              <img src="./src/images/WeatherDashboard.png" alt="Weather Dashboard" />
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
