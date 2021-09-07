import React from 'react'

const LoginForm = () => {
    return (
        <div className="login__section">
        <div className="form">
         <h1>login</h1><br />
         <form >
           <label>User ID</label><br />
           <input type="text" placeholder="User ID"/><br />
           <label>Password</label><br />
           <input type="password" placeholder="Password"/><br />
           <button>LOGIN</button>
          </form> 
        </div>
          
        </div>
    )
}

export default LoginForm
