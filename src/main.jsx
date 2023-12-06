import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';//importing the bootstrap css file
import './index.css';//importing the index.css file

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';//importing the App component
import ErrorPage from './pages/ErrorPage';//importing the ErrorPage component
import About from './pages/About';//importing the About component
import Contact from './pages/Contact';//importing the Contact component  
import PortFolio from './pages/PortFolio';//importing the PortFolio component
import Resume from './pages/Resume';//importing the Resume component


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',//the path to the component
    element: <App />,//the component to render
    errorElement: <ErrorPage />,//the component to render if there is an error
    children: [      
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/PortFolio',
        element: <PortFolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
