import './App.css'
import SignupCard from './screens/signup'
import LoginCard from './screens/login'
import SidebarWithHeader from './components/SideBar';
import Footer from './components/footerMain';
import Home from './screens/home'
import ProductAddToCart from './components/ProductCard';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Chat from './components/chat';
import LandingNavBar from './components/landing-page-components/navbar'
import LandingPage from './screens/landingPage'

function App() {
  return (
    <> <GoogleOAuthProvider clientId="413883304345-bcdbafc7lf4a7k8hpfgutqlgqng30j9r.apps.googleusercontent.com">
  
        <LandingPage></LandingPage>

      </GoogleOAuthProvider>
    </>
    );
}

export default App;