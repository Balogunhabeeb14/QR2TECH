import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">QR2TECH</span>
          </a>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary-600">Services</a>
          </nav>

          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}