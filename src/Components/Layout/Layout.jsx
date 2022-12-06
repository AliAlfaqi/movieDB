import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Layout({ userData }) {
    return <>
        <Navbar userData={userData} />
        <div className="container">
            <Outlet></Outlet>
        </div>
        <Footer />
    </>
}
