import React from 'react';

const LoginComponent = (props) => (
  <div>
    <div>
      <input className="login-input" placeholder='username'type='text' name='username'value={props.username}onChange={props.change}/>
    </div>
    <div >
      <input className="login-input" placeholder='password' type='password' name='password'value={props.password}onChange={props.change}/>
    </div>
    <button onClick={props.login}>Login</button> <button onClick={props.signup}>Signup</button>
    {props.loginError && <div style={{color:'red'}}>Invalid...</div>}
  </div>
);

export default LoginComponent;