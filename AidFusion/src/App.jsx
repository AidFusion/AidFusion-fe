import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App