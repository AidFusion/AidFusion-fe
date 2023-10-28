import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import DonationHistory from './pages/Donations';
import { Donate } from './pages/Donate';
import { Payment } from './pages/Payment';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation-history" element={<DonationHistory />} />
        <Route path="/donate" element={<Donate />} />
        <Route path='/donation-payment' element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App