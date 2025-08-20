import { Check, Star } from 'lucide-react';

const Products = () => {
    const plans = [
        {
            name: "Básico",
            subtitle: "Para pequeñas fábricas",
            price: "99",
            period: "mes",
            description: "Ideal para fábricas que están comenzando a digitalizar sus procesos",
            features: [
                "Gestión básica de inventarios",
                "Hasta 3 recetas",
                "2 usuarios incluidos",
                "Reportes básicos",
                "Soporte por email",
                "App móvil básica"
            ],
            highlighted: false,
            cta: "Empezar prueba gratuita"
        },
        {
            name: "Profesional",
            subtitle: "Para fábricas en crecimiento",
            price: "199",
            period: "mes",
            description: "La opción más popular para fábricas que buscan optimizar completamente sus operaciones",
            features: [
                "Gestión completa de inventarios",
                "Recetas ilimitadas",
                "10 usuarios incluidos",
                "Control de producción avanzado",
                "Rutas de reparto básicas",
                "Analytics avanzados",
                "Soporte prioritario 24/7",
                "App móvil completa",
                "Integraciones básicas"
            ],
            highlighted: true,
            cta: "Más popular"
        },
        {
            name: "Enterprise",
            subtitle: "Para grandes operaciones",
            price: "399",
            period: "mes",
            description: "Solución completa para fábricas que requieren máxima personalización y escalabilidad",
            features: [
                "Todo lo incluido en Profesional",
                "Usuarios ilimitados",
                "Rutas optimizadas con IA",
                "Seguimiento GPS en tiempo real",
                "Integraciones personalizadas",
                "Módulos especializados",
                "Gerente de cuenta dedicado",
                "Capacitación personalizada",
                "SLA garantizado 99.9%",
                "Análisis predictivo"
            ],
            highlighted: false,
            cta: "Contactar ventas"
        }
    ];

    const modules = [
        {
            title: "Módulo de Inventarios",
            description: "Control total de stock con alertas automáticas",
            image: "📦"
        },
        {
            title: "Módulo de Recetas",
            description: "Gestión inteligente de fórmulas y costos",
            image: "👨‍🍳"
        },
        {
            title: "Módulo de Producción",
            description: "Monitoreo en tiempo real de líneas productivas",
            image: "🏭"
        },
        {
            title: "Módulo de Rutas",
            description: "Optimización y seguimiento de repartos",
            image: "🚚"
        }
    ];

    return (
        <section id="productos" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#09046b] mb-6">
                        Módulos y
                        <span className="text-blue-600"> Precios</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Elige el plan que mejor se adapte a las necesidades de tu fábrica.
                        Todos incluyen prueba gratuita de 30 días.
                    </p>
                </div>

                {/* Módulos */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-center text-[#09046b] mb-12">
                        Módulos Especializados
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {modules.map((module, index) => (
                            <div key={index} className="card p-6 text-center hover:shadow-xl transition-all duration-300 shadow rounded-lg">
                                <div className="text-4xl mb-4">{module.image}</div>
                                <h4 className="text-lg font-semibold text-[#09046b] mb-2">
                                    {module.title}
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    {module.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Planes de precios */}
                <div className="grid lg:grid-cols-3 gap-15  py-5">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`card p-8 relative shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-lg ${plan.highlighted
                                    ? 'ring-2 ring-blue-500 shadow-xl scale-105'
                                    : 'hover:shadow-xl'
                                } transition-all duration-300 transition-transform duration-200 ease-out hover:-translate-y-1 active:translate-y-0 border-t border-gray-200 cursor-pointer`}
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                                        <Star className="h-4 w-4 mr-1" />
                                        Más Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-[#09046b] mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-gray-600 mb-4">{plan.subtitle}</p>
                                <div className="mb-4">
                                    <span className="text-4xl font-bold text-[#09046b]">${plan.price}</span>
                                    <span className="text-gray-600">/{plan.period}</span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-700 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${plan.highlighted
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                        : 'bg-gray-100 hover:bg-gray-200 text-[#09046b]'
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Garantía */}
                <div className="mt-16 text-center">
                    <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold text-[#09046b] mb-4">
                            Garantía de Satisfacción 100%
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Prueba FabriApp durante 30 días completamente gratis. Si no estás satisfecho,
                            te devolvemos tu dinero sin preguntas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#contacto" className="btn-primary">
                                Comenzar prueba gratuita
                            </a>
                            <a href="#contacto" className="btn-secondary">
                                Hablar con un experto
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
