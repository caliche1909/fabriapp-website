import { Package, ChefHat, Factory, MapPin, BarChart3, Users, Shield, Smartphone } from 'lucide-react';
import { smoothScrollTo } from '../../utils';

const Features = () => {
  const features = [
    {
      icon: Package,
      title: "Gestión de Inventarios",
      description: "Control total de stock, alertas automáticas de reabastecimiento y seguimiento en tiempo real de todos tus productos.",
      color: "blue"
    },
    {
      icon: ChefHat,
      title: "Recetas Inteligentes",
      description: "Crea y gestiona recetas detalladas con cálculos automáticos de costos y optimización de ingredientes.",
      color: "green"
    },
    {
      icon: Factory,
      title: "Control de Producción",
      description: "Monitorea líneas de producción, programa órdenes de trabajo y rastrea la eficiencia en tiempo real.",
      color: "purple"
    },
    {
      icon: MapPin,
      title: "Rutas Optimizadas",
      description: "Genera rutas de reparto inteligentes que minimizan tiempo y costos, maximizando la eficiencia.",
      color: "orange"
    },
    {
      icon: BarChart3,
      title: "Analytics Avanzados",
      description: "Reportes detallados y dashboard intuitivos para tomar decisiones basadas en datos reales.",
      color: "red"
    },
    {
      icon: Users,
      title: "Seguimiento de Equipos",
      description: "Rastrea en tiempo real la ubicación y actividades de tus repartidores y personal de producción.",
      color: "indigo"
    },
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description: "Protección de datos de nivel empresarial con encriptación y respaldos automáticos.",
      color: "gray"
    },
    {
      icon: Smartphone,
      title: "App Móvil",
      description: "Acceso completo desde cualquier dispositivo, con sincronización en tiempo real.",
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string; cardBg: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', cardBg: 'bg-blue-50/60' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', cardBg: 'bg-green-50/60' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', cardBg: 'bg-purple-50/60' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', cardBg: 'bg-orange-50/60' },
      red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', cardBg: 'bg-red-50/60' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', cardBg: 'bg-indigo-50/60' },
      gray: { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200', cardBg: 'bg-gray-50/60' },
      teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200', cardBg: 'bg-teal-50/60' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-[#09046b] mb-6">
            Todo lo que necesitas para tu
            <span className="text-blue-600"> fábrica</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            FabriApp integra todas las funcionalidades esenciales para optimizar
            cada aspecto de tu operación fabril en una sola plataforma intuitiva.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className={`feature-card group ${colors.border} ${colors.cardBg} border-2 border-opacity-0 hover:border-opacity-300 p-5 rounded-lg transition-all duration-300`}
              >
                <div className={`${colors.bg} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-8 w-8 ${colors.text}`} />
                </div>

                <h3 className="text-xl font-bold text-[#09046b] mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-5">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-[#09046b] mb-4">
              ¿Listo para revolucionar tu fábrica?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Únete a cientos de fábricas que ya han transformado su productividad con FabriApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://www.fabriapp.com/empresa/register', '_blank')}
                className="bg-transparent border-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 px-6 rounded-3xl transition-all duration-300 font-medium"
              >
                Comenzar prueba gratuita
              </button>
              <button
                onClick={() => smoothScrollTo('contacto')}
                className="bg-transparent border-1 border-[#09046b] text-[#09046b] hover:bg-[#09046b] hover:text-white py-3 px-6 rounded-3xl transition-all duration-300 font-medium"
              >
                Agendar demostración
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
