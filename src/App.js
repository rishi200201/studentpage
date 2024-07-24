import './App.css';
import Layout from './frame/Layout'
import { GoogleLogin } from '@react-oauth/google';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout />
        
 
        <div className="oauth-button">
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
        
        
        
        
        
      </header>
    </div>
  );
}

export default App;
