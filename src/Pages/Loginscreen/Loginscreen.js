import React from 'react'
import "./Loginscreen.css"
import {useState,useEffect} from "react"
import SignInScreen from '../SignInScreen/SignInScreen';

const Loginscreen = () => {
  const [signIn,setSignIn] = useState(false);
   console.log(signIn)
  return (
    <div className='loginscreen'>
      <div className='loginscreen__background'>
        <img className='loginscreen__logo'
        src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
        alt='ref__image' />
        <button className='loginscreen__button' onClick={() => setSignIn(true)}>Sign In</button>
        <div className='loginscreen__gradient'></div>
        <div className='loginscreen__body'>
          {
            signIn ? (
              <SignInScreen />
            ) : ( 
            <>
              <h1>Unlimited files, TV programs and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>Ready to watch? enter your email to create or restart your membership</h3>
              <div className='loginscreen__input'>
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button className='loginscreen__getstarted' onClick={() => setSignIn(true)} >GET STARTED</button>
                </form>
              </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Loginscreen