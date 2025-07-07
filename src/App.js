import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginParent from './pages/LoginParent';
import LoginTutor from './pages/LoginTutor';
import RegisterTutor from './pages/RegisterTutor';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parent-login" element={<LoginParent />} />
        <Route path="/tutor-login" element={<LoginTutor />} />
        <Route path="/tutor-register" element={<RegisterTutor />} />
      </Routes>
    </BrowserRouter>
  );
}
