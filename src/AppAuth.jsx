import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Welcome from './pages/Welcome';
import Layout from './components/layout/Layout';



const MainContent = () => {
  return (
    <div className="App">
      <AuthenticatedTemplate>
        <Router>
          <Layout/>
        </Router>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
            <Router>
                    <div>
                        <Routes>
                        <Route path='/login' element={<Welcome/>}/>
                        <Route path="*" element={<Navigate to="/login"/>} />
                        </Routes>
                    </div>
             </Router>
      </UnauthenticatedTemplate>
    </div>
  )
}

export default function App() {
  return (
      <MainContent />
  );
}