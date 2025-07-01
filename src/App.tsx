import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Loading from './components/Loading';
import { scrollToSection, getActiveSection } from './utils/scrollTo';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  
  const sections = ['home', 'about', 'projects', 'skills', 'contact'];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const handleScroll = () => {
      const currentSection = getActiveSection(sections);
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  const handleNavigate = (sectionId: string) => {
    scrollToSection(sectionId);
    setActiveSection(sectionId);
  };

  if (isLoading) {
    return (
      <ThemeProvider>
        <Loading isLoading={isLoading} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header activeSection={activeSection} onNavigate={handleNavigate} />
        <main>
          <Hero onNavigate={handleNavigate} />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <div className="text-2xl font-bold mb-4">
                <span className="text-blue-400">A</span>lexandro de Araujo Junior
              </div>
              <p className="text-gray-400 dark:text-gray-500 mb-6">
                "Motivado a usar a tecnologia para tornar o mundo um lugar melhor."
              </p>
              <div className="flex justify-center space-x-6 mb-8">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="mailto:contato@exemplo.com"
                  className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200"
                >
                  Email
                </a>
              </div>
              <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
                <p className="text-gray-500 dark:text-gray-600 text-sm">
                  © 2025 Alexandro de Araujo Junior. Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;