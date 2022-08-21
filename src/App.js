import { MainPage } from './pages/Mainpage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
      
    </BrowserRouter>
    
  );
}

export default App;
