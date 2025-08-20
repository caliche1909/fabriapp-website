import { Users, Award, Clock, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Fábricas Activas",
      description: "Empresas confían en nuestra plataforma"
    },
    {
      icon: Award,
      number: "98%",
      label: "Satisfacción",
      description: "De nuestros clientes nos recomiendan"
    },
    {
      icon: Clock,
      number: "5+",
      label: "Años de Experiencia",
      description: "Desarrollando soluciones para la industria"
    },
    {
      icon: Globe,
      number: "15",
      label: "Países",
      description: "Donde nuestros clientes operan"
    }
  ];

  const team = [
    {
      name: "Carlos Rodríguez",
      position: "CEO & Fundador",
      description: "15 años de experiencia en gestión industrial y desarrollo de software.",
      image: "👨‍💼"
    },
    {
      name: "María González",
      position: "CTO",
      description: "Experta en arquitectura de sistemas y tecnologías de la información.",
      image: "👩‍💻"
    },
    {
      name: "José Martínez",
      position: "Head of Operations",
      description: "Especialista en optimización de procesos y logística industrial.",
      image: "👨‍🔧"
    }
  ];

  const values = [
    {
      title: "Innovación Constante",
      description: "Siempre a la vanguardia de la tecnología para ofrecer las mejores soluciones.",
      emoji: "🚀"
    },
    {
      title: "Excelencia en Servicio",
      description: "Nuestro compromiso es brindar el mejor soporte y experiencia a nuestros clientes.",
      emoji: "⭐"
    },
    {
      title: "Transparencia Total",
      description: "Comunicación clara y honesta en cada etapa de nuestra relación comercial.",
      emoji: "🤝"
    },
    {
      title: "Resultados Medibles",
      description: "Nos enfocamos en generar un impacto real y cuantificable en tu negocio.",
      emoji: "📈"
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#09046b] mb-6">
            Sobre 
            <span className="text-blue-600"> FabriApp</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos una empresa tecnológica dedicada a revolucionar la industria manufacturera 
            a través de soluciones digitales innovadoras y fáciles de usar.
          </p>
        </div>

        {/* Historia y Misión */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-[#09046b] mb-6">Nuestra Historia</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              FabriApp nació de la necesidad real de modernizar los procesos industriales. 
              Nuestros fundadores, con más de 15 años de experiencia en el sector manufacturero, 
              identificaron las principales ineficiencias que enfrentan las fábricas diariamente.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Desde 2019, hemos trabajado incansablemente para crear una plataforma que no solo 
              digitalice procesos, sino que los optimice de manera inteligente, ayudando a las 
              empresas a ser más productivas y rentables.
            </p>
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-semibold text-blue-900 mb-2">Nuestra Misión</h4>
              <p className="text-blue-800">
                Democratizar el acceso a tecnología de clase mundial para que cualquier fábrica, 
                sin importar su tamaño, pueda competir en el mercado global.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#09046b] mb-6">¿Por qué FabriApp?</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="text-2xl">{value.emoji}</div>
                  <div>
                    <h4 className="font-semibold text-[#09046b] mb-1">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl p-8 lg:p-12 mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-12">
            Números que Hablan por Nosotros
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white bg-opacity-20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-blue-100 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-blue-200">
                    {stat.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Equipo */}
        <div className="text-center mb-16">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#09046b] mb-6">
            Nuestro Equipo
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Un equipo multidisciplinario de expertos comprometidos con el éxito de tu empresa.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-8 text-center group hover:shadow-xl rounded-lg transition-all duration-300">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <h4 className="text-xl font-bold text-[#09046b] mb-2">
                  {member.name}
                </h4>
                <p className="text-blue-600 font-semibold mb-4">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#09046b] mb-4">
              ¿Listo para formar parte de nuestra historia?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a cientos de empresas que ya han transformado sus operaciones con FabriApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto" className="btn-primary">
                Empezar ahora
              </a>
              <a href="#productos" className="btn-secondary">
                Ver planes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
