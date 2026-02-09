import { HomePage } from './pages/HomePage'; // Dosya yoluna dikkat et
import { Header } from './pages/Header';
import { Login } from './pages/Login';
import './App.css';
import { useState } from 'react';

type Page = 'home' | 'login' | 'signup' | 'dashboard' | 'discovery' | 'project-management' | 'project-details' | 'messages' | 'profile';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string, projectId?: string) => {
    setCurrentPage(page as Page);
  };
  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
  };

  if (!isAuthenticated && (currentPage === 'home' || currentPage === 'login' || currentPage === 'signup')) {
    return (
      <div className="min-h-screen bg-background">
        {currentPage !== 'login' && currentPage !== 'signup' && (
          <Header isAuthenticated={isAuthenticated} onNavigate={handleNavigate} />
        )}
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'login' && <Login onLogin={handleLogin} onNavigate={handleNavigate} />}
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header isAuthenticated={isAuthenticated} onNavigate={handleNavigate} />
        <main className="flex-1 overflow-hidden">
        </main>
      </div>
      
    </div>
  );
}

export default App;