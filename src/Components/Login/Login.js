import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../Icons/logo.svg" 
import "./Login.css"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login">
      <div className="login-container">
        <img src={logo} alt="Logo de iNFiNiTiX" className="logo"/>
        <h1 className="text-2xl mt-2">iNFiNiTiX</h1>
        <p className="text-xl">
          Inicia Sesión para acceder a todas las funciones de la aplicación
        </p>
        
      </div>

      <button onClick={() => loginWithRedirect()} className="login-btn mt-3">Log In</button>
    </div>
  )
  
};

export default LoginButton;