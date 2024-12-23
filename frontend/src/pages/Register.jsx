import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/register`, formData);
      alert('Account created successfully!');
      console.log(response.data);
    } catch (error) {
      alert('Error creating account. Please try again.');
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

      {/* Sign-Up Card */}
      <div className="z-10 w-full max-w-lg bg-[#E5CBBE] bg-opacity-50 rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-black text-center mb-8">
          Sign up to Room Designer
        </h1>
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-[#616161] text-sm font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              className="w-full px-4 py-2 bg-[#E5CBBE] border border-[#A09C9C] rounded focus:outline-none focus:border-black text-black"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-[#616161] text-sm font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="w-full px-4 py-2 bg-[#E5CBBE] border border-[#A09C9C] rounded focus:outline-none focus:border-black text-black"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
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

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-[#616161] text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="w-full px-4 py-2 bg-[#E5CBBE] border border-[#A09C9C] rounded focus:outline-none focus:border-black text-black"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4 relative">
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

          {/* Confirm Password */}
          <div className="mb-6 relative">
            <label className="block text-[#616161] text-sm font-medium mb-1">Confirm Password</label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              className="w-full px-4 py-2 bg-[#E5CBBE] border border-[#A09C9C] rounded focus:outline-none focus:border-black text-black"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <button
              type="button"
              className="absolute top-2 right-4 text-black"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? '👁️' : '🙈'}
            </button>
          </div>

          {/* Terms and Conditions */}
          <div className="mb-6">
            <label className="flex items-center text-[#616161]">
              <input
                type="checkbox"
                required
                className="form-checkbox bg-[#181818] border-black text-black rounded focus:ring-black"
              />
              <span className="ml-2">
                I agree to the <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-16 bg-black text-white rounded hover:bg-[#616161] text-lg"
          >
            Create an Account
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

export default SignUp;
