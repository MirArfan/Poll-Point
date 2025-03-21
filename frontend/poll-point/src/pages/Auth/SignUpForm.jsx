import React, { useState } from 'react'
import AuthLayout from '../../components/layout/AuthLayout'
import { Link, useNavigate } from 'react-router-dom';
import ProfilePhotoSelector from '../../components/input/ProfilePhotoSelector';
import AuthInput from '../../components/input/AuthInput';
import { validateEmail } from '../../utils/helper';


const SignUpForm = () => {

  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!fullName) {
      setError("Please enter the Full Name.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!username) {
      setError("Please enter the Username.");
      return;
    }
    if (!password) {
      setError("Please enter the password.");
      return;
    }
    setError("");

    //  SignUp api
    try {

    } catch (error) {

    }
  }

  return (
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'> Create an Account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Join us today by entering your detalis below.
        </p>


        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <AuthInput
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="Jhon"
              type="text"
            />
            <AuthInput
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="jhon@example.com"
              type="text"
            />
            <AuthInput
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              label="Username"
              placeholder="@"
              type="text"
            />

            <AuthInput
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="Min 8 Characters"
              type="password"
            />
          </div>
          {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}

          <button type='submit' className='btn-primary'>
            CREATE ACCOUNT
          </button>

          <p className='text-[13px] text-slate-800 mt-3'>
            Already have an account?{" "}
            <Link className='font-medium text-primary underline' to="/login">
              Login
            </Link>


          </p>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUpForm