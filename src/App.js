import { BrowserRouter } from 'react-router-dom';
import Rout from './components/Rout/rout';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Rout />
      </BrowserRouter>
    </div>
  );
}

export default App;