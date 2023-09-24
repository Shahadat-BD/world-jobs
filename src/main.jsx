import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorMessage from './Component/ErrorMessage/ErrorMessage.jsx';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs.jsx';
import Home from './Component/Home/Home.jsx'
import App from './App';
import Blogs from './Component/Blogs/Blogs';
import JobDetails from './Component/JobDetails/JobDetails';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorMessage></ErrorMessage>,
    children :[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/applied-jobs',
        loader: () => fetch('jobs.json'),
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/blog',
        element:<Blogs></Blogs>
      },
      {
        path:'/job-details/:id',
        loader: () => fetch('jobs.json'),
        element : <JobDetails></JobDetails>
      }
    ]
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
