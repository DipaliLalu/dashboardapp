import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { toast, ToastContainer } from 'react-toastify';
import { signinSchema } from '../../schemas';
import { useFormik } from 'formik';
import { BsShieldLockFill } from 'react-icons/bs';
import { Link,useNavigate } from 'react-router-dom';
const initialValues = {
    fullname: '',
    password: ''
}
function Login() {
    const [passwordShown, setPasswordShown] = useState(false);
    const eye = passwordShown?<IoMdEye size={22}/>:<IoMdEyeOff size={22}/>
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };
    const notify = () => toast.success('Login successfully');
    const msg = () => toast.error('Please enter a correct fullname and password');
    const users=JSON.parse(localStorage.getItem('users'))||[];
    const navigate = useNavigate();
    const { values, handleChange, errors, handleSubmit, touched } = useFormik({
        initialValues,
        validationSchema: signinSchema,
        onSubmit: (values, action) => {
            console.log(values);
            const foundUser = users.find(user =>
                user.fullname === values.fullname && user.password === values.password
            );
            if(!foundUser) msg();
            if(foundUser){
                notify();
                const user={
                    isAuthenticate:true,
                    user:values.fullname
                }
                localStorage.setItem('isAuthenticate',JSON.stringify(user));
                navigate("/");
            }
           
            action.resetForm();
        },
    })
  return (
         <div className='bg-black text-slate-100 grid place-items-center h-screen box-border p-5'>
            <form className='flex flex-col gap-5 md:w-1/3 w-full  border rounded-3xl py-6 px-10' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-bold text-2xl'>Sign in</h2>
                    <p>to continue to Blog - Dashboard</p>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="fullname">Full Name</label>
                    <div className="relative flex items-center">
                        <FaUser className="absolute left-3 text-gray-400" />
                        <input type="text" id="fullname" className="form-input w-full pl-10 rounded-md bg-gray-900 text-white outline-none py-2" name='fullname' placeholder="Enter your full name" onChange={handleChange} value={values.fullname}/>
                    </div>
                        {errors.fullname && touched ? <p className='text-red-600 text-sm'>{errors.fullname}</p> : null}
                </div>
                          
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password">Password</label>
                    <div className="relative flex items-center">
                        <BsShieldLockFill className="absolute left-3 text-gray-400" size={20}/>
                        <input type={passwordShown ? "text" : "password"} id="password" className="form-input w-full pl-10 rounded-md bg-gray-900 text-white outline-none py-2" name='password' placeholder="******" onChange={handleChange} value={values.password}/>
                        <span onClick={togglePasswordVisiblity} className="absolute right-2 text-gray-400">{eye}</span>
                    </div>
                    {errors.password && touched ? <p className='text-red-600 text-sm'>{errors.password}</p> : null}
                </div>
                <button type='submit' className='uppercase bg-blue-600 p-2 rounded-md text-center'>
                   continue
                </button>
                <ToastContainer />
                <p>Ready to dive in? <Link to={'/register'} className='text-blue-600'> Create a new account </Link></p>

            </form>
        </div>
    )

}

export default Login
