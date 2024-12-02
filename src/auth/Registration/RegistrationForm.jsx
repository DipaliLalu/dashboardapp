import React, { useState } from 'react'
import { FaUser, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
import { BsShieldLockFill } from "react-icons/bs";
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from 'formik';
import { signupSchema } from '../../schemas';
import { Link } from 'react-router-dom';

const initialValues = {
    fullname: '',
    email: '',
    password: '',
    mobileNo: ''
}

function RegistrationForm() {
    const [passwordShown, setPasswordShown] = useState(false);

    const eye = passwordShown ? <IoMdEye size={22} /> : <IoMdEyeOff size={22} />
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const notify = () => toast.success('Registration successfully');
    const data = JSON.parse(localStorage.getItem('users')) || [];
    // console.log(data)
    const { values, handleChange, errors, handleSubmit, touched } = useFormik({
        initialValues,
        validationSchema: signupSchema,
        onSubmit: (values, action) => {
            console.log(values);
            data.push(values);
            localStorage.setItem('users', JSON.stringify(data));
            action.resetForm();
            notify();
        },
    })
    return (
        <div className='bg-black text-slate-100 grid place-items-center h-auto p-5'>
            <form className='flex flex-col gap-5 md:w-1/3 w-full border rounded-3xl py-6 px-10' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl'>Sign up</h2>
                    <p>to continue to Blog - Dashboard</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="fullname">Full Name</label>
                    <div className="relative flex items-center">
                        <FaUser className="absolute left-3 text-gray-400" />
                        <input type="text" id="fullname" className="form-input w-full pl-10 rounded-md bg-gray-900 text-white outline-none py-2" name='fullname' placeholder="Enter your full name" onChange={handleChange} value={values.fullname} />
                    </div>
                    {errors.fullname && touched ? <p className='text-red-600 text-sm'>{errors.fullname}</p> : null}
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="mobileNo">Mobile No.</label>
                    <div className="relative flex items-center">
                        <FaPhoneAlt className="absolute left-3 text-gray-400" />
                        <input type="text" id="mobileNo" className="form-input w-full pl-10 rounded-md bg-gray-900 text-white outline-none py-2" name='mobileNo' placeholder="Enter your mobile no.." onChange={handleChange} value={values.mobileNo} />
                    </div>
                    {errors.mobileNo && touched ? <p className='text-red-600 text-sm'>{errors.mobileNo}</p> : null}
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <div className="relative flex items-center">
                        <MdEmail className="absolute left-3 text-gray-400" size={20} />
                        <input type="text" id="email" className="form-input w-full pl-10 rounded-md bg-gray-900 text-white outline-none py-2" name='email' placeholder="Enter your email address.. " onChange={handleChange} value={values.email} />
                    </div>
                    {errors.email && touched ? <p className='text-red-600 text-sm'>{errors.email}</p> : null}
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password">Password</label>
                    <div className="relative flex items-center">
                        <BsShieldLockFill className="absolute left-3 text-gray-400" size={20} />
                        <input type={passwordShown ? "text" : "password"} id="password" className="form-input w-full pl-10 rounded-md bg-gray-900 text-white outline-none py-2" name='password' placeholder="******" onChange={handleChange} value={values.password} />
                        <span onClick={togglePasswordVisiblity} className="absolute right-2 text-gray-400">{eye}</span>
                    </div>
                    {errors.password && touched ? <p className='text-red-600 text-sm'>{errors.password}</p> : null}
                </div>
                <button type='submit' className='uppercase bg-blue-600 p-2 rounded-md text-center'>
                    continue
                </button>
                <ToastContainer />
                <p>Already Have An Account? <Link to={'/login'} className='text-blue-600'> Login </Link></p>
            </form>
        </div>
    )
}

export default RegistrationForm
