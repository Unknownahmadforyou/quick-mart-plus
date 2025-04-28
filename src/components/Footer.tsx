
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">QuickMart+</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-quickmart-green transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-quickmart-green transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-quickmart-green transition-colors">Blog</Link></li>
              <li><Link to="/press" className="text-gray-600 hover:text-quickmart-green transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Help</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-600 hover:text-quickmart-green transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-quickmart-green transition-colors">Contact Us</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-quickmart-green transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-quickmart-green transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">For Business</h3>
            <ul className="space-y-2">
              <li><Link to="/partner" className="text-gray-600 hover:text-quickmart-green transition-colors">Become a Partner</Link></li>
              <li><Link to="/advertise" className="text-gray-600 hover:text-quickmart-green transition-colors">Advertise</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-3">Download App</h3>
            <div className="flex flex-col space-y-2">
              <button className="bg-black text-white rounded-md px-4 py-2 flex items-center justify-center">
                <div className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"/><path d="M16 19h6"/><path d="M19 16v6"/></svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-medium">App Store</div>
                </div>
              </button>
              
              <button className="bg-black text-white rounded-md px-4 py-2 flex items-center justify-center">
                <div className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 16 5 3 5-3"/><path d="m3 12 5-3 5 3"/><path d="m13 12 5-3 5 3"/><path d="m13 16 5 3 5-3"/><path d="M12 22v-6"/><path d="M12 8V2"/></svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-10 border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">© 2025 QuickMart+ All rights reserved</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-quickmart-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-quickmart-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-quickmart-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
