import { Link } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Rocket className="text-primary h-6 w-6" />
          <span className="font-bold text-xl tracking-tight">Sarvam <span className="text-primary">Digital</span></span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link to="/services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
          <Link to="/portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</Link>
          <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <div className="h-4 w-px bg-white/20 mx-2"></div>
          
          {user ? (
            <>
              <Link to={`/dashboard/${user.role}`} className="text-sm font-medium hover:text-primary transition-colors">Dashboard</Link>
              <button onClick={logout} className="bg-red-500/20 hover:bg-red-500/30 text-red-500 px-4 py-2 rounded-md text-sm font-medium transition-all">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium hover:text-primary transition-colors">Login</Link>
              <Link to="/register" className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-all">Get Started</Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass absolute top-16 left-0 w-full flex flex-col p-4 gap-4 border-b border-white/10">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-sm font-medium">Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="text-sm font-medium">Services</Link>
          <Link to="/portfolio" onClick={() => setIsOpen(false)} className="text-sm font-medium">Portfolio</Link>
          <Link to="/blog" onClick={() => setIsOpen(false)} className="text-sm font-medium">Blog</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-sm font-medium">About</Link>
          
          {user ? (
            <>
              <Link to={`/dashboard/${user.role}`} onClick={() => setIsOpen(false)} className="text-sm font-medium">Dashboard</Link>
              <button onClick={() => { logout(); setIsOpen(false); }} className="w-full text-center bg-red-500/20 text-red-500 px-4 py-2 rounded-md text-sm font-medium">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setIsOpen(false)} className="text-sm font-medium">Login</Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="w-full text-center bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">Get Started</Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
