// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Movies from './Components/Movies/Movies'
import Tv from './Components/Tv/Tv'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import About from './Components/About/About'
import jwtDecode from 'jwt-decode'
import Profile from './Components/Profile/Profile'


export default function App() {
    const [userData, setuserData] = useState(null)

    function saveUserData() {
        let encodedToken = localStorage.getItem('userToken');
        let decodedToken = jwtDecode(encodedToken);
        setuserData(decodedToken)
    }

    let routers = createBrowserRouter([
        {
            path: '/', element: <Layout userData={userData} />, children: [
                { path: '/home', element: < Home /> },
                { path: '/movies', element: <Movies /> },
                { path: '/tv', element: <Tv /> },
                { path: '/profile', element: <Profile userData={userData} /> },
                { index: true, element: <Register /> },
                { path: '/login', element: <Login saveUserData={saveUserData} /> },
                { path: '/about', element: <About /> }
            ]
        }
    ])

    return <>
        <RouterProvider router={routers} />
    </>
}
