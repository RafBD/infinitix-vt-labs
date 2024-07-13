import { PrimeReactProvider } from 'primereact/api';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Components/Login/Login';
import Topbar from './Components/Topbar/Topbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './Pages/DashBoard/Dashboard';
import Clientes from './Pages/Clientes/Clientes.js';
import Facturas from './Pages/Factura/Factura.js';
import Tutoriales from './Pages/Tutoriales/Tutoriales';
import SettingPage from './Pages/SettingPage/SettingPage';

import "primereact/resources/themes/lara-light-cyan/theme.css";
import './App.css';

function App() {
  const { isAuthenticated} = useAuth0();
  console.log('Dashboard importado', Dashboard)

  console.log("Is Authenticated:", isAuthenticated);

  return (
    <PrimeReactProvider>
      <Router>
        <div className="App">
          {isAuthenticated ? (
            <>
              <Topbar />
              <Routes>
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Settings" element={<SettingPage />} />
                <Route path="/Clientes" element={<Clientes />} />
                <Route path="/Facturas" element={<Facturas />} />
                <Route path="/Tutoriales" element={<Tutoriales />} />
              </Routes>
            </>
          ) : (
            <LoginButton />
          )}
        </div>
      </Router>
    </PrimeReactProvider>
  );
}

export default App;