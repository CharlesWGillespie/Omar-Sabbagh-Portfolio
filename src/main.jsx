import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'

import App from './App.jsx'
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx'
import ResumePage from './pages/ResumePage.jsx'
import AboutPage from './pages/AboutPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/projects',
        element: <ProjectPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/resume',
        element: <ResumePage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
