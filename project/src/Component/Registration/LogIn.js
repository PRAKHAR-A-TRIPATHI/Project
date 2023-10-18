import { Formik } from 'formik';
import React from 'react'
import InputCommonComponent from '../Common/InputCommonComponent';
import { Link } from 'react-router-dom';

const LogIn = () => {

    const handleSubmit = (values, action) => {
        console.log(values);
    }


    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
        >
            {props => (
                <div className='w-1/2 bg-white m-auto border-black rounded-2xl p-10 fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 border-2 shadow-2xl'>
                    <form onSubmit={props.handleSubmit} action="">
                        <InputCommonComponent name="email" data={props} type="email" placeholder="Enter Your Email" />
                        <InputCommonComponent name="password" data={props} type="password" placeholder="Enter Your Password" />
                        <div className='text-center'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl text-xl transition duration-200' type='submit'>Log In</button>
                            <div className='my-2'>
                                <p className='text-lg '>new user <Link className='underline' to="/register">Register</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </Formik>
    )
}

export default LogIn;