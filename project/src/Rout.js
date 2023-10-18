import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header'


function Rout() {
    return (
        <>
            <Header />
            <Outlet />
        </>

    )
}

export default Rout