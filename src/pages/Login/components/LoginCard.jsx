import React from 'react';
import "./loginCard.css"

const LoginCard = () => {
  const [logIN, setLogIN] =React.useState({email:"", password:""});
  React.useEffect(() => {
   const obj = JSON.parse(localStorage.getItem("login"));
   obj ? setLogIN(obj) : setLogIN({email:"", password:""});
  } ,[])
  const formSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="container login-container">
      <div className="login-box">
        <form onSubmit={formSubmit} className="login-form">
          <input autoComplete="off" type="email" name="email" id="email" value={logIN.email} />
          <input autoComplete="off" type="password" name="password" value={logIN.password} id="password" />
          <button className="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginCard