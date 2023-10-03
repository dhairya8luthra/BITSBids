import './App.css'
import SignupCard from './screens/signup'
import SidebarWithHeader from './components/SideBar';
import Footer from './components/footerMain';
import Home from './screens/home'
import ProductAddToCart from './components/ProductCard';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Chat from './components/chat';


function App() {
  return (
    <> <GoogleOAuthProvider clientId="413883304345-bcdbafc7lf4a7k8hpfgutqlgqng30j9r.apps.googleusercontent.com">
        <Home></Home>

      </GoogleOAuthProvider>
    </>
    );
}

export default App;