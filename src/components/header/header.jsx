import './Header.css'; // Importe o arquivo CSS para estilos
import logo from "../../assets/logo.png"
//import { useMsal } from "@azure/msal-react";

const Header = () => {
//   const { instance } = useMsal();
//   const handleLogout = (logoutType) => {
//     if (logoutType === "popup") {
//         instance.logoutPopup({
//             postLogoutRedirectUri: "/",
//             mainWindowRedirectUri: "/"
//         });
//     } else if (logoutType === "redirect") {
//         instance.logoutRedirect({
//             postLogoutRedirectUri: "/",
//         });
//     }
// }


  return (
    <header className="app-header">
      <div><img className="logo" src={logo} alt="Logo BBTS" /></div>
      <button className="enter-button" /*onClick={() => handleLogout("popup")}*/ title="Sair">Sair</button>
    </header>
  );
}

export default Header;
