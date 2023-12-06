
//Description: This file is the header component for the application. 
//It is used to render the header of the application.

// Importing Dependencies
import Navigation from "../Navigation";
import  Logo  from '../../assets/Images/Logo/Logo3.png';

// Function that renders the header & exports
export default function Header() {
    const navLinkStyle = {
        padding:' 0px 0px 0px 0px',
      };

      const navLinkStyle1 = {
        backgroundColor: '#CCD5AE',
    };

    return (
        <div className="headerParent" style={navLinkStyle}>
            <nav className="navbar navbar-expand-lg navbar-light" style={navLinkStyle1}>
                <div className="container-fluid navBack">
                    <a className="navbar-brand navTitle" href="/">
                        <img src={Logo} alt="logo"                       
                        className="shadow-lg p-1 mb-1 bg-white rounded" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    {/* Using the Navigation component to render the navigation bar */}
                    <Navigation />
                    </div>
                </div>
            </nav>

        </div>
    );
}