import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import DonationHistory from './pages/Donations';
import { Donate } from './pages/Donate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donationhistory" element={<DonationHistory />} />
        <Route path="/donate" element={<Donate />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App