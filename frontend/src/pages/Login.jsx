import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/auth/login', {
        email,
        password
      });

      const { access_token } = response.data;
      
      // Fetch user profile to get role
      const userResponse = await axios.get('http://127.0.0.1:8000/api/v1/users/me', {
        headers: { Authorization: `Bearer ${access_token}` }
      });

      const userData = userResponse.data;
      login(access_token, userData);

      // Redirect based on role
      if (userData.role === 'admin') {
        navigate('/dashboard/admin');
      } else {
        navigate('/dashboard/user');
      }
      
    } catch (err) {
      setError(err.response?.data?.detail || 'An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen pt-20 pb-12 relative overflow-hidden flex-align-center justify-center">
      <div className="absolute inset-0 bg-background -z-20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 flex justify-center items-center h-full mt-10">
        <motion.div 
          className="glass p-8 md:p-10 rounded-2xl w-full max-w-md border border-white/10 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 tracking-tight">Welcome Back</h1>
            <p className="text-foreground/60 text-sm">Sign in to your Sarvam Digital account</p>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm p-3 rounded-lg mb-4 text-center">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground/90 ml-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-foreground/50">
                  <Mail className="h-5 w-5" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-secondary/50 border border-border rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                  placeholder="name@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-foreground/90">Password</label>
                <a href="#" className="text-xs text-primary hover:text-primary/80 transition-colors">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-foreground/50">
                  <Lock className="h-5 w-5" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-secondary/50 border border-border rounded-lg py-2.5 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-center mt-2">
              <input type="checkbox" id="remember" className="rounded border-gray-400 text-primary focus:ring-primary/50 bg-secondary/50 h-4 w-4" />
              <label htmlFor="remember" className="ml-2 text-sm text-foreground/70">Remember me for 30 days</label>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all mt-6 shadow-lg shadow-primary/20 disabled:opacity-70"
            >
              {isLoading ? 'Signing In...' : (
                <>Sign In <LogIn className="h-4 w-4" /></>
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-foreground/70">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors">
              Create account <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
