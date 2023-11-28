
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './pages/common/Header';
import Footer from './pages/common/Footer';
import Home from './pages/Home';

function App() {
  return (
   <>
   <BrowserRouter>

  
      <Header/>

      <Home/>
      
      <Footer/>
      </BrowserRouter>

   </>
  );
}

export default App;
