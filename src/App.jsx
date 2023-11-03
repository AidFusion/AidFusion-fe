import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import DonationHistory from './pages/Donations';
import { Donate } from './pages/Donate';
import { Payment } from './pages/Payment';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { ForgotPassword } from './pages/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donation-history" element={<DonationHistory />} />
        <Route path="/donate" element={<Donate />} />
        <Route path='/donation-payment' element={<Payment />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/log-in' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App