import React from 'react'
import { Link } from 'react-router-dom'

const HomeLogInBtn = () => {
    return (
        <div className='fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 '>
            <button className='bg-sky-500 text-white py-2 px-5 text-xl rounded-lg hover:bg-black hover:text-white border border-spacing-x-5 border-sky-500 duration-400'><Link to="/logIn">Log In</Link></button>
        </div>
    )
}

export default HomeLogInBtn;