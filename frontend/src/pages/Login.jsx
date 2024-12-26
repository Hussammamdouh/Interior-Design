import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/login`, formData);
  
      // Save the auth token or user data in localStorage
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data)); // Save user data
  
      alert('Login successful!');
      console.log(response.data);
  
      // Redirect to home or another page
      window.location.href = '/';
    } catch (error) {
      alert('Error logging in. Please try again.');
      console.error(error);
    }
  };
  

  return (
    <div className="min-h-screen bg-[#181818] flex items-center justify-center relative">
      {/* Background Blur */}
      <div
        className="absolute inset-0 bg-[url('/path-to-image.jpg')] bg-cover opacity-20 z-0"
        style={{ backdropFilter: 'blur(12px)' }}
      ></div>

      {/* Login Card */}
      <div className="z-10 w-full max-w-lg bg-[#E5CBBE] bg-opacity-50 rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-black text-center mb-8">
          Login to Room Designer
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-6">
            <label className="block text-[#616161] text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-4 py-2 bg-[#E5CBBE] border border-[#A09C9C] rounded focus:outline-none focus:border-black text-black"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6 relative">
            <label className="block text-[#616161] text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              className="w-full px-4 py-2 bg-[#E5CBBE] border border-[#A09C9C] rounded focus:outline-none focus:border-black text-black"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button
              type="button"
              className="absolute top-2 right-4 text-black"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '👁️' : '🙈'}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-16 bg-black text-white rounded hover:bg-[#616161] text-lg"
          >
            Login
          </button>

          {/* Social Login */}
          <div className="flex justify-center mt-6 space-x-4">
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">G</div>
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">A</div>
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full">F</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
