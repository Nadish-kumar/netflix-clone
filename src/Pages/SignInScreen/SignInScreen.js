import React from 'react'
import "./SignInScreen.css"
const SignInScreen = () => {

  return (
    <div className='signinscreen'>
        <form>
            <h1>Sign In</h1>
            <input placeholder='email' type="email" />
            <input placeholder='password' type="password" />
            <button type='submit'>Sign In</button>
            <h4>
                <span className='signinscreen__gray'>New to Netflix ?</span>
                <span className='signinscreen__link'> Sign up Now</span>
            </h4>
        </form>
    </div>
  )
}

export default SignInScreen