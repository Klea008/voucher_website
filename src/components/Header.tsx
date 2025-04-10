// components/Header.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Voucher
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="space-y-2">
            <span className={`block h-1 w-8 bg-indigo-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-3' : ''}`}></span>
            <span className={`block h-1 w-8 bg-indigo-600 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-1 w-8 bg-indigo-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-3' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-indigo-600 transition">Home</Link>
          <Link to="/features" className="text-gray-700 hover:text-indigo-600 transition">Features</Link>
          <Link to="/screenshots" className="text-gray-700 hover:text-indigo-600 transition">Screenshots</Link>
          <Link to="/video" className="text-gray-700 hover:text-indigo-600 transition">Video</Link>
          <Link to="/faq" className="text-gray-700 hover:text-indigo-600 transition">FAQ</Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition">Contact</Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 transition" onClick={toggleMenu}>Home</Link>
            <Link to="/features" className="text-gray-700 hover:text-indigo-600 transition" onClick={toggleMenu}>Features</Link>
            <Link to="/screenshots" className="text-gray-700 hover:text-indigo-600 transition" onClick={toggleMenu}>Screenshots</Link>
            <Link to="/video" className="text-gray-700 hover:text-indigo-600 transition" onClick={toggleMenu}>Video</Link>
            <Link to="/faq" className="text-gray-700 hover:text-indigo-600 transition" onClick={toggleMenu}>FAQ</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600 transition" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;