import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-white py-10">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4">
        {/* First Part: Links */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo */}
          <div>
            <div className="text-2xl font-bold">Room Designer</div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-bold mb-2">Links</h3>
            <ul className="space-y-2">
              <li><a href="/features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="/docs" className="text-gray-400 hover:text-white">Docs</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-bold mb-2">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="/drag-drop" className="text-gray-400 hover:text-white">Drag & Drop</a></li>
              <li><a href="/graphic-design" className="text-gray-400 hover:text-white">Graphic Design</a></li>
              <li><a href="/ai-system" className="text-gray-400 hover:text-white">AI System</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-2">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Second Part: Icons */}
        <div className="flex justify-between items-center mb-10">
          {/* Left Icons */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-16 bg-gray-700"></div>
            <div className="w-[1px] h-16 bg-[#35302D]"></div>
            <div className="w-14 h-16 bg-gray-700"></div>
            <div className="w-[1px] h-16 bg-[#35302D]"></div>
            <div className="w-14 h-16 bg-gray-700"></div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-16 bg-gray-700"></div>
            <div className="w-[1px] h-16 bg-[#35302D]"></div>
            <div className="w-14 h-16 bg-gray-700"></div>
            <div className="w-[1px] h-16 bg-[#35302D]"></div>
            <div className="w-14 h-16 bg-gray-700"></div>
          </div>
        </div>

        {/* Third Part: Copyright */}
        <div className="text-center text-gray-400">
          <p>Copyright © 2024 Wahby. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
