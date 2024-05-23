import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home_Page from './page/Home_Page/Home_Page.jsx';
import Menu_Page from './page/Menu_Page/Menu_Page.jsx';
import Book_Table from './page/Book_Table/Book_Table.jsx';
import About from './page/About/About.jsx';
import Contact_Page from './page/Contact_Page/Contact_Page.jsx';
import Signup from './page/SignUp/Signup.jsx';
import Login from './page/Login_Page/Login.jsx';
import Blog_Page from './page/Blog_Page/Blog_Page.jsx';
import Blog_Page_Single from './page/Blog_Page_Single/Blog_Page_Single.jsx';
import Cart_Page from './page/Cart_Page/Cart_Page.jsx';
import Team from './page/About/Team.jsx';
import Chef_Recipi from './page/About/Chef_Recipi.jsx';
import AuthProvider from './Auth/AuthProvider.jsx';
import Private_Link from './Auth/Private_Link.jsx';
import img from './assets/404.jpg'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home_Page></Home_Page>
      },
      {
        path: "/menu",
        element: <Menu_Page></Menu_Page>,
        loader: () => fetch(`https://one-sushi-restruent-serverside.onrender.com/menu`)
      },
      {
        path: "/book-table",
        element: <Private_Link><Book_Table></Book_Table></Private_Link>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/team",
        element: <Team></Team>
      },
      {
        path: "/chef-recipi",
        element: <Private_Link><Chef_Recipi></Chef_Recipi></Private_Link>
      },
      {
        path: "/contact",
        element: <Contact_Page></Contact_Page>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/blog",
        element: <Blog_Page></Blog_Page>
      },
      {
        path: "/blog-single",
        element: <Blog_Page_Single></Blog_Page_Single>
      },
      {
        path: "/cart",
        element: <Private_Link><Cart_Page></Cart_Page></Private_Link>,
      },
      {
        path: "*",
        element: <div className='w-full h-screen p-0 m-0 py-9'><img src={img} alt="" className='w-full h-full'/></div>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>

)


// 1. React
// 2. React Router
// 3. Tailwind Css
// 4. Daisy ui
// 5. React icon