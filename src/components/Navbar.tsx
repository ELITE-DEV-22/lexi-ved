import React from 'react';
import { Link } from 'react-router-dom';
import { Scale } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">Lexi</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:text-blue-400 transition-colors py-2">
              Home
            </Link>
            <Link
              to="/legal-help"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md transition-colors"
            >
              Legal Help
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;