import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import HomePage from './pages/home';
import AboutPage from './pages/about.jsx';
import SupportPage from './pages/support.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "support",
        element: <SupportPage />
      },
      {
        path: "sign_in",
        element: <SignIn />
      },
      {
        path: "sign_up",
        element: <SignUp />
      },
    ]
  },
],
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
