import React from 'react'
import { Button, TextInput, Label} from 'flowbite-react';
import { Link} from 'react-router-dom';
import logo from '../assets/Logo.png';

function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 gap-5 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
          <div className="flex-1">
            <Link to="/" className='self-center'>
              <img src={logo} className='rounded-xl w-[150px] md:w-[200px]'></img>
            </Link>
            <p className='mt-3'>
              Sign up with your email and password or with google
            </p>
          </div>
          <div className="flex-1">
            <form className='flex flex-col gap-4'>
              <div className="user">
                <Label value="Your username"/>
                <TextInput
                  type='text'
                  placeholder='Username'
                  id='username'
                />
              </div>
              <div className="email">
                <Label value="Your email"/>
                <TextInput
                  type='text'
                  placeholder='Email'
                  id='email'
                />
              </div>
              <div className="password">
                <Label value="Your password"/>
                <TextInput
                  type='text'
                  placeholder='Password'
                  id='password'
                />
              </div>
              <Button gradientDuoTone='purpleToBlue' type='submit'>
                Sign Up
              </Button>
              <div className="flex gap-2 text-sm">
                <span>
                  Have an account?
                </span>
                <Link to='/sign-in' className='text-blue-500'>
                  Sign In
                </Link>
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default SignUp