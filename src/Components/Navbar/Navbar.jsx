import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ userData }) {
    return <nav className='p-2 d-flex justify-content-between'>
        <div className="left-nav d-flex align-items-center">
            <h1 className='m-0 pe-3'>Noxe</h1>
            {userData ?
                <ul className='list-unstyled d-flex align-items-center m-0' >
                    <li className='px-2'> <Link to='home'>Home</Link> </li>
                    <li className='px-2'> <Link to='about'>About</Link> </li>
                    <li className='px-2'> <Link to='movies'>Movies</Link> </li>
                    <li className='px-2'> <Link to='tv'>Tv</Link> </li>
                    <li className='px-2'> <Link to='people'>People</Link> </li>
                </ul> : ''}

        </div>
        <div className="right-nav d-flex align-items-center">
            <div className="social-media">
                <i className='fab fa-facebook mx-2' ></i>
                <i className='fab fa-youtube mx-2' ></i>
                <i className='fab fa-twitter mx-2' ></i>
                <i className='fab fa-instagram mx-2' ></i>
            </div>

            <ul className='list-unstyled d-flex align-items-center m-0' >


                {userData ? <>
                    <li className='px-2'> <Link to={'profile'} >Profile</Link> </li>
                    <li className='px-2'> <span >Logout</span> </li>
                </> :
                    <>
                        <li className='px-2'> <Link to='login'>Login</Link> </li>
                        <li className='px-2'> <Link to='/'>Register</Link> </li>
                    </>}


            </ul>
        </div>
    </nav>
}
