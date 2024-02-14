// import CustomNavSidebar from "./components/CustomNavSidebar"

// import CustomNavbar from './components/CustomNavbar'
import Home  from './pages/Home'
// import  Contact from './pages/Contact'
// import About from './pages/About'
import {Suspense, lazy} from "react"
const LazyAbout=lazy(()=>import("./pages/About"));
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Spinner from './components/Spinner.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Course from './pages/Course.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Payment from './pages/Payment.jsx';
import Main from './pages/Main.jsx';
import Adminlogin from './pages/Adminlogin.jsx';
import Adminhome from './pages/Adminhome.jsx';
import Enroll from './pages/Enroll.jsx';
const App =() => {
 const router=createBrowserRouter([
  {
    path:'/home',
    element:<Suspense fallback={<Spinner/>}><Home></Home></Suspense>
  },
  {
    path:'/main',
    element:<Suspense fallback={<Spinner/>}><Main></Main></Suspense>
  },
  {
    path:'/adminlogin',
    element:<Suspense fallback={<Spinner/>}><Adminlogin></Adminlogin></Suspense>
  },
  {
    path:'/register',
    element:<Suspense fallback={<Spinner/>}><Signup></Signup></Suspense>
  },
  {
    path:'/course',
    element:<Suspense fallback={<Spinner/>}><Course></Course></Suspense>
  },
  {
    path:'/login',
    element:<Suspense fallback={<Spinner/>}><Login></Login></Suspense>
  },
  {
    path:'/about',
    element:<Suspense fallback={<Spinner/>}><LazyAbout></LazyAbout></Suspense>
  },
  {
    path:'/enroll',
    element:<Suspense fallback={<Spinner/>}><Enroll></Enroll></Suspense>
  },
  {
    path:'/payment',
    element:<Suspense fallback={<Spinner/>}><Payment></Payment></Suspense>
  },
  {
    path:'/adminhome',
    element:<Suspense fallback={<Spinner/>}><Adminhome></Adminhome></Suspense>
  },
  {
    path:'/dashboard',
    element:<Suspense fallback={<Spinner/>}><Dashboard></Dashboard></Suspense>
  }
 ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
