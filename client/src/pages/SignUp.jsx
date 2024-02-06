import React, { useState } from 'react'
import { Button, TextInput, Label, Alert, Spinner} from 'flowbite-react';
import { Link ,useNavigate} from 'react-router-dom';
import logo from '../assets/Logo.png';

function SignUp() {

  const navigate = useNavigate()
 
  const [formData,setFormData] = useState({})
  const [errMessage,setErrMessage] = useState(null)
  const [loading,setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({...formData,[e.target.id]: e.target.value.trim()})
  }

  const handleSubmit =  async (e) => {
    e.preventDefault();

    if(!formData.username || !formData.email || !formData.password){
      return setErrMessage('Please fill out all fields.')
    }

    try{
      setLoading(true)
      setErrMessage(null)
      const res = await fetch('/api/auth/signup',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if(data.success === false){
        return setErrMessage(data.message)
      }
        setLoading(false)
        if(res.ok){
          navigate('/sign-in')
        }
      } 
      catch(err){
        setErrMessage(err.message)
        setLoading(false)
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
              Sign up with your email and password or with google
            </p>
          </div>
          <div className="flex-1">
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <div className="user">
                <Label value="Your username"/>
                <TextInput
                  type='text'
                  placeholder='Username'
                  id='username'
                  onChange={handleChange}
                />
              </div>
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
                  : 'Sign Up'
                }
              </Button>
            </form>

              <div className="flex gap-2 text-sm mt-1">
                <span>
                  Have an account?
                </span>
                <Link to='/sign-in' className='text-blue-500'>
                  Sign In
                </Link>
              </div>

              {
                errMessage && (
                  <Alert className='mt-5' color='red'>
                    {errMessage}
                  </Alert>
                )
              }
          </div>
      </div>
    </div>
  )
}

export default SignUp