import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Rout from './components/Rout/rout';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Rout />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;