import { Formik } from 'formik';
import React from 'react'
import InputCommonComponent from '../Common/InputCommonComponent';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from "yup";

const Registration = () => {
    const navigate = useNavigate();

    const handleSubmit = (values, action) => {
        localStorage.setItem("token",JSON.stringify(values));
        navigate("/user");
    }

    const validate = Yup.object({
        fname: Yup.string().trim().min(3, "Atleast 3 character").required("Required"),
        lname: Yup.string().trim().min(3, "Atleast 3 character").required("Required"),
        email: Yup.string().trim().email("Invalid Email").required("Required"),
        password: Yup.string().trim().matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*+=!])(?!.*\s).{8,}$/, "Enter Atleast One Uppercase,Lowercase,Special Character,Number").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password Not Match').required("Required"),
    });

    return (
        <Formik
            initialValues={{ fname: "", lname: "", email: "", password: "", confirmPassword: "" }}
            onSubmit={handleSubmit}
            validationSchema={validate}>
            {props => (
                <div className='w-1/2 bg-white m-auto border-black rounded-2xl p-10 fixed top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 border-2 shadow-2xl'>
                    <form onSubmit={props.handleSubmit} action="">
                        <div className='flex justify-between gap-4'>
                            <InputCommonComponent name="fname" data={props} type="text" placeholder="Enter Your First Name" />
                            <InputCommonComponent name="lname" data={props} type="text" placeholder="Enter Your Last Name" />
                        </div>
                        <InputCommonComponent name="email" data={props} type="email" placeholder="Enter Your Email" />
                        <InputCommonComponent name="password" data={props} type="password" placeholder="Enter Your Password" />
                        <InputCommonComponent name="confirmPassword" data={props} type="password" placeholder="Confirm Password" />
                        <div className='text-center'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl text-xl transition duration-200' type='submit'>Log In</button>
                            <div className='my-2'>
                                <p className='text-lg'>Already Register <Link className='underline' to="/login">Log In</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </Formik>
    )
}

export default Registration;