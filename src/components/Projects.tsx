import React from 'react';
import { ExternalLink, Github, Thermometer, Menu, Globe, ShoppingCart } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Guardião do Clima",
      description: "Sistema meteorológico com Arduino equipado com sensores de temperatura e umidade. Projeto focado em sustentabilidade e monitoramento ambiental para promover tranquilidade e consciência ecológica.",
      technologies: ["Arduino", "C++", "Sensores DHT", "Display LCD"],
      icon: <Thermometer className="text-green-600 dark:text-green-400" size={32} />,
      category: "IoT & Hardware",
      features: ["Monitoramento em tempo real", "Interface amigável", "Sustentabilidade", "Alertas automáticos"]
    },
    {
      title: "Cardápio Digital",
      description: "Sistema de gerenciamento de cardápio implementado em C, utilizando estruturas de dados avançadas como filas e listas para otimizar a organização e consulta de itens do menu.",
      technologies: ["C", "Estruturas de Dados", "Filas", "Listas"],
      icon: <Menu className="text-orange-600 dark:text-orange-400" size={32} />,
      category: "Algoritmos & ED",
      features: ["Estruturas de dados otimizadas", "Interface console", "Gestão eficiente", "Operações CRUD"]
    },
    {
      title: "Site CRAS",
      description: "Website informativo desenvolvido em equipe como projeto extensionista. Plataforma dedicada a fornecer informações sobre serviços sociais e assistência à comunidade local.",
      technologies: ["HTML", "CSS", "JavaScript", "Trabalho em equipe"],
      icon: <Globe className="text-blue-600 dark:text-blue-400" size={32} />,
      category: "Web Development",
      features: ["Design responsivo", "Conteúdo informativo", "Acessibilidade", "SEO otimizado"]
    },
    {
      title: "Sistema de Vendas",
      description: "Aplicação familiar para gestão de vendas de salgados, desenvolvida com banco de dados SQLite. Sistema completo com controle de estoque, vendas e relatórios financeiros.",
      technologies: ["Python", "SQLite", "Tkinter", "Relatórios"],
      icon: <ShoppingCart className="text-purple-600 dark:text-purple-400" size={32} />,
      category: "Desktop App",
      features: ["Banco de dados local", "Controle de estoque", "Relatórios", "Interface intuitiva"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projetos</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cada projeto representa uma jornada de aprendizado e aplicação prática de conhecimentos, 
            sempre com foco em soluções que agregam valor real.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors duration-300">
                      {project.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">{project.category}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Principais Recursos:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <button className="flex items-center px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 font-medium">
                    <Github size={16} className="mr-2" />
                    Código
                  </button>
                  <button className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 font-medium">
                    <ExternalLink size={16} className="mr-2" />
                    Detalhes
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;