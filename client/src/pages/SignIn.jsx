import React, { useState } from 'react'
import { Button, TextInput, Label, Alert, Spinner} from 'flowbite-react';
import { Link ,useNavigate} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signInStart,signInSuccess,signInFailure } from '../redux/user/userSlice';
import logo from '../assets/Logo.png';

function SignIn() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
 
  const [formData,setFormData] = useState({})
  const {loading, error: errorMessage} = useSelector(state => state.user);

  const handleChange = (e) => {
    setFormData({...formData,[e.target.id]: e.target.value.trim()})
  }

  const handleSubmit =  async (e) => {
    e.preventDefault();

    if(!formData.email || !formData.password){
      return dispatch(signInFailure('Please fill out all fields.'))
    }

    try{
      dispatch(signInStart())
      const res = await fetch('/api/auth/signin',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })

        const data = await res.json()
        if(data.success === false) {
          dispatch(signInFailure(data.message))
        }

        if(res.ok){
          dispatch(signInSuccess(data))
          navigate('/')
        }

      } 
      catch(error){
        dispatch(signInFailure(error.message))
      }
    }

  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 gap-5 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
          <div className="flex-1">
            <Link to="#" className='self-center'>
              <img src={logo} className='rounded-xl w-[150px] md:w-[200px]'></img>
            </Link>
            <p className='mt-3'>
              Sign in with your email and password or with google
            </p>
          </div>
          <div className="flex-1">
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div className="email">
                <Label value="Your email"/>
                <TextInput
                  type='email'
                  placeholder='Email'
                  id='email'
                  onChange={handleChange}
                />
              </div>
              <div className="password">
                <Label value="Your password"/>
                <TextInput
                  type='password'
                  placeholder='Password'
                  id='password'
                  onChange={handleChange}
                />
              </div>
              <Button gradientDuoTone='purpleToBlue' type='submit' disabled={loading}>
                {
                  loading ? (
                    <div>
                      <Spinner />
                      <span>Loading...</span>
                    </div>
                  )
                  : 'Sign In'
                }
              </Button>
            </form>

              <div className="flex gap-2 text-sm mt-1">
                <span>
                  Don't have an account?
                </span>
                <Link to='/sign-up' className='text-blue-500'>
                  Sign Up
                </Link>
              </div>

              {
                errorMessage && (
                  <Alert className='mt-5' color='red'>
                    {errorMessage}
                  </Alert>
                )
              }
          </div>
      </div>
    </div>
  )
}

export default SignIn