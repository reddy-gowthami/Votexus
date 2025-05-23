import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  const [userData,setUserData]=useState({fullName: "",email: "",password: "",password2: ""})

//function to change our controlled inputs
  const changeInputHandler = (e) =>{
    setUserData(prevState =>{
      return{...prevState,[e.target.name]:e.target.value}
    })
  }


  return (
   <section className="register">
    <div className="container register__container">
      <h2>Sign In</h2>
      <form>
        <p className="form__error-message">Any error from the backend</p>
        <input type="email" name='email' placeholder='Email Address' onChange={changeInputHandler} autoComplete='true'  />
        <input type="password" name='password' placeholder='Password' onChange={changeInputHandler} autoComplete='true'  />
        <p>Don't have an account?<Link to='/register'>Sign Up</Link></p>
        <button type="submit" className="btn primary">Login</button>


      </form>
    </div>
   </section>
  )
}

export default Login
