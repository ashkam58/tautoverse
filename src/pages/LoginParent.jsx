import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginParent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/parent/login', { email, password });
      localStorage.setItem('token', res.data.token);
      alert("🎉 Welcome, awesome parent!");
      navigate('/');
    } catch (err) {
      alert("🚨 Login failed!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100">
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-md w-full animate-bounceSlow">
        <h1 className="text-3xl font-cartoon text-center mb-4">👩‍👧 Parent Login</h1>
        <input className="w-full p-2 border rounded-xl mb-3" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input className="w-full p-2 border rounded-xl mb-4" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
        <button onClick={login} className="w-full bg-pink-400 text-white p-2 rounded-xl hover:bg-pink-500 transition">
          🎈 Login
        </button>
      </div>
    </div>
  );
}
