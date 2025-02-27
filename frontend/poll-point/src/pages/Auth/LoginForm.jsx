import React, { useState } from 'react'
import AuthLayout from '../../components/layout/AuthLayout'
import AuthInput from '../../components/input/AuthInput'
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';

const LoginForm = () => {


  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [error, setError]=useState(null);

  const navigate=useNavigate();

  const handleLogin=async(e)=>{
     e.preventDefault();

     if(!validateEmail(email)){
       setError("Please enter a valid email address.");
       return;
     }
     if(!password){
      setError("Please enter the password.");
      return;
     }
     setError("");

    //  Login api
    try {
      
    } catch (error) {
      
    }
  };


  return (
      <AuthLayout>
        <div className='lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center'>
              <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
              <p className='text-xs text-slate-700 mt-[5px] mb-6'>
                Please enter details to log in
              </p>

              <form onSubmit={handleLogin}>
                <AuthInput
                 value={email}
                 onChange={({target})=>setEmail(target.value)}
                 label="Email Address"
                 placeholder="jhon@example.com"
                 type="text"
                />


                <AuthInput
                 value={password}
                 onChange={({target})=>setPassword(target.value)}
                 label="Password"
                 placeholder="Min 8 Characters"
                 type="password"
                />
                
                 {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

                 <button type='submit' className='btn-primary'>
                  LOGIN
                 </button>

                 <p className='text-[13px] text-slate-800 mt-3'>
                  Don't have an account?{" "}
                  <Link className='font-medium text-primary underline' to="/signup">
                  SignUp
                  </Link>
                  

                 </p>
              </form>
        </div>
      </AuthLayout>
  )
}

export default LoginForm