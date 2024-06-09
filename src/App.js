import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Components/Login/Login';
import Topbar from './Components/Topbar/Topbar';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Oops... {error.message}</div>;

  console.log("Is Authenticated:", isAuthenticated);

  return (
    <Router>
      <div className="App">
        {isAuthenticated ? (
          <>
            <Topbar />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </Router>
  );
}

export default App;
