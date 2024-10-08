import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './Login.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login">
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="desc">
          <div className="text-box">
            <h1 className="titulo mb-0 ">Bienvenido a iNFiNiTiX</h1>
          </div>
        </div>
        <button onClick={() => loginWithRedirect()} className="btn" type="button">
          <strong>LOGIN</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>
          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </button>
      </section>
    </div>
  );
}

export default LoginButton;
