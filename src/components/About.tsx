import React from 'react';
import { Award, Users, Globe, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <BookOpen className="text-blue-600 dark:text-blue-400" size={24} />,
      title: "Educação",
      description: "Estudante de Ciência da Computação em constante aprendizado"
    },
    {
      icon: <Award className="text-green-600 dark:text-green-400" size={24} />,
      title: "Certificações",
      description: "CCNA 1 (Cisco), Cibersegurança (Santander + DIO), Redes (Bradesco)"
    },
    {
      icon: <Users className="text-purple-600 dark:text-purple-400" size={24} />,
      title: "Liderança",
      description: "Experiência como escoteiro e organizador do evento WECTI"
    },
    {
      icon: <Globe className="text-orange-600 dark:text-orange-400" size={24} />,
      title: "Idiomas",
      description: "Inglês intermediário - Estudante na Wizard"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Sobre Mim</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Sou um estudante dedicado de Ciência da Computação, apaixonado por tecnologia e 
              inovação. Minha jornada acadêmica tem sido marcada por uma busca constante de 
              conhecimento e aplicação prática em diversas áreas da computação.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Através de projetos acadêmicos e pessoais, desenvolvi experiência em redes de 
              computadores, cibersegurança, Arduino e desenvolvimento web. Cada projeto representa 
              uma oportunidade de aplicar conhecimentos teóricos em soluções reais e impactantes.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Minha experiência como escoteiro me proporcionou valiosas habilidades de liderança 
              e trabalho em equipe, competências que complementam perfeitamente minha formação 
              técnica e visão colaborativa da tecnologia.
            </p>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Valores Fundamentais</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                  Inovação com propósito social
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                  Aprendizado contínuo e adaptabilidade
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                  Colaboração e trabalho em equipe
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></span>
                  Sustentabilidade e responsabilidade ambiental
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-white dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-white dark:bg-gray-600 rounded-lg shadow-sm">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;