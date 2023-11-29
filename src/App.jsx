// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation().pathname;
  return (
    <>
      <Header />
      <main className="container">
        {location === '/' ? <About /> : <Outlet />}
      </main>
      <Footer />
    </>
  );
}

export default App;
