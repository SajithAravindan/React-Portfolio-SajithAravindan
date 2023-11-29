# React-Portfolio-SajithAravindan

## Description

A portfolio of work to showcase my skills and talents to employers looking to fill a part-time or full-time position. An effective portfolio highlights your strongest work as well as the thought processes behind it. This application is deployed to  Netlify.

User Story & Acceptance Criteria follow the AS AN / I WANT / SO THAT format.

## Table of Contents

* [User Story](#user-story) 
  
* [Acceptance Criteria](#acceptance-criteria)
  
* [Technologies Used](#technologies-used)  

* [Installation](#Installation)

* [Demo](#demo) 

* [License](#license) 



## User Story

AS AN employer looking for candidates with experience building single-page applications

* I WANT to view a potential employee's deployed React portfolio of work samples.
    SO THAT I can assess whether they're a good candidate for an open position

## Acceptance Criteria

GIVEN a single-page application portfolio for a web developer

* WHEN I load the portfolio
    - THEN I am presented with a page containing a header, a section for content, and a footer
* WHEN I view the header
    - THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
* WHEN I view the navigation titles
    - THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted
* WHEN I click on a navigation title
    - THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted
* WHEN I load the portfolio the first time
    - THEN the About Me title and section are selected by default
* WHEN I am presented with the About Me section
    - THEN I see a recent photo or avatar of the developer and a short bio about them
* WHEN I am presented with the Portfolio section
    - THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository
* WHEN I am presented with the Contact section
    - THEN I see a contact form with fields for a name, an email address, and a message
* WHEN I move my cursor out of one of the form fields without entering text
    - THEN I receive a notification that this field is required
* WHEN I enter text into the email address field
    - THEN I receive a notification if I have entered an invalid email address
* WHEN I am presented with the Resume section
    - THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
* WHEN I view the footer
    - THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter) 


## Technologies Used

* Mini-CSS-Extract Plugin
* Webpack+Workbox
* Concurrently
* JavaScript
* IndexedDB
* Express
* NodeJS
* Babel


## Installation

To install this project:
* Start by forking this repository and clone repository to your local machine.
* Open the project in your preffered IDE
* Look at package.json file that specifies dependencies for this project, so be sure to run `npm    install`. This will install all the required packages. 
* Invoke application with `npm run start`

## Demo

<img src='./client/src/images/demo.png'>

Deployed Application URL: https://neon-lolly-34fff5.netlify.app/

GitHub URL: https://github.com/SajithAravindan/PWA-textEditor.git

## License

* Please refer to the LICENSE in the repo. <a href="https://github.com/SajithAravindan/PWA-textEditor/blob/main/LICENSE">(MIT License)</a>
