import React from 'react';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
    return (
        <footer id="contact" className="bg-green-900 text-gray-200 py-10">
            <div className="container mx-auto text-center">
                {/* App Logo and Name */}
                <div className="flex items-center justify-center mb-6">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/189/189656.png" 
                        alt="AgrioPredict Logo" 
                        className="w-12 h-12 mr-3 animate-bounce" 
                    />
                    <h3 className="text-3xl font-semibold text-white">AgroAI</h3>
                </div>

                {/* Contact Info */}
                <p className="mb-4">Ministry of Agriculture and Farmers Welfare | UASD | ICAR</p>
                <p className="mb-4">
                    Email: <a href="mailto:info@agriculture.gov.in" className="hover:text-white transition-colors duration-300">info@agriculture.gov.in</a> | 
                    Phone: <a href="tel:+911234567890" className="hover:text-white transition-colors duration-300">+91-1234567890</a>
                </p>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-6 mt-6">
                    <Link to="/facebook" className="transform hover:scale-110 transition-transform duration-300">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/733/733547.png" 
                            alt="Facebook" 
                            className="w-6 h-6" 
                        />
                    </Link>
                    <Link to="/twitter" className="transform hover:scale-110 transition-transform duration-300">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/733/733558.png" 
                            alt="Twitter" 
                            className="w-6 h-6" 
                        />
                    </Link>
                    <Link to="/linkedin" className="transform hover:scale-110 transition-transform duration-300">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/733/733553.png" 
                            alt="LinkedIn" 
                            className="w-6 h-6" 
                        />
                    </Link>
                </div>

                {/* Copyright */}
                <p className="mt-6">&copy; 2024 AgroAI. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default FooterComponent;
