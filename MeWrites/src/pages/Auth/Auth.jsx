import React, { useState } from 'react'
import "./Auth.css"

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name:"", email:"",password:"",
  });
  const handlechange = (e) =>{
    setForm(...form,[e.target.name]=e.target.value)
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(isLogin){
      console.log("Login:",form);
    } else{
      console.log("SignUp:",form);
    }
  };
  return (
    <div className='auth-container'>

      <div className='auth-box'>
        <h2>{isLogin?"Welcome Back":"Create Account"}</h2>
        <p>{isLogin?"Login to continue writing":"Start your writing journey"}</p>
        <form onSubmit={handleSubmit}>
          {!isLogin &&(
            <input type="text" name = "name" placeholder='Full Name' value={form.name} onChange={handlechange} required/>
          )}
          <input type="text" name='email' placeholder='Email' value={form.email} onChange={handlechange} required />
          <input type="text" name='password' placeholder='Password' value={form.password} onChange={handlechange} required />
          <button type='submit'>{isLogin?"Login":"SignUp"}</button>
        </form>
        <p className='toggle-text'>{isLogin?"Don't have an account?":"Already have an account?"}</p>
        <span className='spans' onClick={()=>setIsLogin(!isLogin)}>{isLogin?"SignUp":"Login"}</span>
      </div>
      
    </div>
  )
}

export default Auth
