import { useLocation, Navigate } from "react-router-dom";
import Routers from "../../routers/Routers";
import Header from "../header/header";

const Layout = () => {
  const location = useLocation();

  // Verifica se a rota atual é /login
  const isLoginPage = location.pathname === "/login";

  // Redireciona para "/" se estiver na página de login
    if (isLoginPage) { 
      return <Navigate to="/" replace />; }
  

  return (
<div>
    <Header />
    <Routers />
  </div>
  );
};

export default Layout;