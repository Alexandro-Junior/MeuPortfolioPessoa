import React from 'react';
import { Code, Database, Globe, Wrench, Languages, Award } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Linguagens de Programação",
      icon: <Code className="text-blue-600 dark:text-blue-400" size={24} />,
      skills: [
        { name: "Python", level: 85, description: "Desenvolvimento de aplicações e automação" },
        { name: "C", level: 80, description: "Programação de sistemas e estruturas de dados" },
        { name: "Java", level: 60, description: "Conhecimentos básicos em POO" },
        { name: "HTML/CSS", level: 75, description: "Desenvolvimento front-end responsivo" },
        { name: "SQL", level: 70, description: "Manipulação e consulta de bancos de dados" }
      ]
    },
    {
      title: "Ferramentas & Tecnologias",
      icon: <Wrench className="text-green-600 dark:text-green-400" size={24} />,
      skills: [
        { name: "Arduino", level: 85, description: "Desenvolvimento de projetos IoT" },
        { name: "GitHub", level: 80, description: "Versionamento e colaboração de código" },
        { name: "SQLite", level: 75, description: "Banco de dados local para aplicações" },
        { name: "Pacote Office", level: 90, description: "Produtividade e documentação" }
      ]
    },
    {
      title: "Áreas de Especialização",
      icon: <Database className="text-purple-600 dark:text-purple-400" size={24} />,
      skills: [
        { name: "Redes de Computadores", level: 80, description: "Configuração e administração" },
        { name: "Cibersegurança", level: 75, description: "Segurança da informação" },
        { name: "Desenvolvimento Web", level: 70, description: "Aplicações web modernas" },
        { name: "IoT & Arduino", level: 85, description: "Internet das Coisas e automação" }
      ]
    }
  ];

  const certifications = [
    {
      name: "CCNA 1",
      issuer: "Cisco",
      icon: <Award className="text-blue-600 dark:text-blue-400" size={20} />,
      description: "Fundamentos de redes"
    },
    {
      name: "Cibersegurança",
      issuer: "Santander + DIO",
      icon: <Award className="text-red-600 dark:text-red-400" size={20} />,
      description: "Segurança da informação"
    },
    {
      name: "Curso de Redes",
      issuer: "Bradesco",
      icon: <Award className="text-green-600 dark:text-green-400" size={20} />,
      description: "Infraestrutura de rede"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Habilidades</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conjunto diversificado de competências técnicas adquiridas através de estudos, 
            projetos práticos e certificações profissionais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white dark:bg-gray-600 rounded-xl shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white ml-4">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Certifications Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Certificações</h3>
            <p className="text-gray-600 dark:text-gray-300">Reconhecimentos oficiais da minha expertise técnica</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {cert.icon}
                  <div className="ml-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Language Skills */}
        <div className="mt-12 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <div className="flex items-center justify-center mb-6">
            <Languages className="text-purple-600 dark:text-purple-400 mr-3" size={24} />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Idiomas</h3>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-gray-900 dark:text-white">Inglês</span>
                <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">Intermediário</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Estudante na Wizard - Em constante aperfeiçoamento</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;