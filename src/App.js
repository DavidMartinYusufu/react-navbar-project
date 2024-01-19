import React  from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layouts/Layout';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import NewsPage from './Pages/NewsPage';
import ContactPage from './Pages/ContactPage';

function App() {

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/AboutPage',
          element: <AboutPage />
        },
        {
          path: '/ContactPage',
          element: <ContactPage />
        },
        {
          path: '/NewsPage',
          element: <NewsPage />
        }
      ]
    }
  ])
  return (
    <div>
      {/*  
      <NavBar/> */}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
