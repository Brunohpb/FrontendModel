import './Home.css';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../contexts/authConfig";

function Welcome() {
  const { instance } = useMsal();

  const handleLogin = (loginType) => {
      if (loginType === "popup") {
          instance.loginPopup(loginRequest).catch(e => {
              console.log(e);
          })
      } else if (loginType === "redirect") {
          instance.loginRedirect(loginRequest).catch(e => {
              console.log(e);
          });
      }
      
  }

  return (
    <div className="Home">
      <h1> Bem vindo! </h1>
      <p>Você deve logar primeiro para ter acesso ao conteudo</p>
      <button className='enter-button'  onClick={() => handleLogin("popup")} title="Sign In" >Entrar</button>
    </div>
  );
}

export default Welcome;
