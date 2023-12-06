// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';//importing the Header component
import Footer from './components/Footer';//importing the Footer component
import About from './pages/About';//importing the About component
import { useLocation } from 'react-router-dom';//importing the useLocation hook from react-router-dom

// App component to use the Outlet component from react-router-dom.
function App() {
  const location = useLocation().pathname;//using the useLocation hook to get the current path
  return (
    <>
      <Header />
      {/* using the Outlet component to render the appropriate component based on the current path */}
      <main className="container">
        {location === '/' ? <About /> : <Outlet />}
      </main>
      <Footer />
    </>
  );
}

export default App;//exporting the App component
