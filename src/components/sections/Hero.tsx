import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { smoothScrollTo } from '../../utils';

const Hero = () => {
    return (
        <section
            id="inicio"
            className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-10  ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Contenido de texto */}
                    <div className="lg:pr-8 pt-10">


                        <h1 className="text-4xl lg:text-6xl font-bold text-[#09046b] mb-6 leading-tight">
                            Transforma tu
                            <span className="text-blue-600"> fábrica</span> con
                            <span className="text-blue-600"> FabriApp</span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-8  leading-[1.3]">
                            Sistema integral de gestión que revoluciona la forma en que manejas inventarios,
                            recetas, producción y rutas de reparto. Todo en tiempo real, desde una sola plataforma.
                        </p>

                        {/* Beneficios clave */}
                        <div className="mb-8 space-y-3">
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span className="text-gray-700">Control total de inventarios en tiempo real</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span className="text-gray-700">Gestión inteligente de recetas y producción</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-500" />
                                <span className="text-gray-700">Rutas optimizadas y seguimiento de repartidores</span>
                            </div>
                        </div>

                        {/* Botones de acción */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => smoothScrollTo('contacto')}
                                className="btn-primary inline-flex items-center justify-center group bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded transition-transform duration-200 hover:scale-105"
                            >
                                Empezar gratis ahora
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => smoothScrollTo('productos')}
                                className="btn-secondary inline-flex items-center justify-center group bg-green-200 hover:bg-green-300 text-green-800 py-2 px-3 rounded transition-transform duration-200 hover:scale-105"
                            >
                                <Play className="mr-2 h-5 w-5" />
                                Ver demo en vivo
                            </button>
                        </div>

                        {/* Estadísticas */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="grid grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="text-2xl lg:text-3xl font-bold text-blue-600">500+</div>
                                    <div className="text-sm text-gray-600">Fábricas confían en nosotros</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl lg:text-3xl font-bold text-blue-600">99.9%</div>
                                    <div className="text-sm text-gray-600">Tiempo de actividad</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl lg:text-3xl font-bold text-blue-600">24/7</div>
                                    <div className="text-sm text-gray-600">Soporte técnico</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Imagen/Gráfico */}
                    <div className="lg:pl-8">
                        <div className="relative">
                            {/* Dashboard mockup */}
                            <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
                                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="font-semibold text-gray-800">Panel de Control</h3>
                                        <div className="flex space-x-1">
                                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                        </div>
                                    </div>

                                    {/* Métricas del dashboard */}
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="bg-blue-50 p-3 rounded-lg">
                                            <div className="text-sm text-blue-600">Inventario</div>
                                            <div className="text-lg font-bold text-blue-800">2,847</div>
                                            <div className="text-xs text-green-600">+12% esta semana</div>
                                        </div>
                                        <div className="bg-green-50 p-3 rounded-lg">
                                            <div className="text-sm text-green-600">Producción</div>
                                            <div className="text-lg font-bold text-green-800">98.5%</div>
                                            <div className="text-xs text-green-600">Eficiencia</div>
                                        </div>
                                    </div>

                                    {/* Gráfico simple */}
                                    <div className="bg-white p-3 rounded-lg">
                                        <div className="flex items-end space-x-1 h-20">
                                            <div className="bg-blue-400 w-4 h-12 rounded-t"></div>
                                            <div className="bg-blue-500 w-4 h-16 rounded-t"></div>
                                            <div className="bg-blue-600 w-4 h-20 rounded-t"></div>
                                            <div className="bg-blue-500 w-4 h-14 rounded-t"></div>
                                            <div className="bg-blue-400 w-4 h-18 rounded-t"></div>
                                            <div className="bg-blue-600 w-4 h-16 rounded-t"></div>
                                            <div className="bg-blue-500 w-4 h-12 rounded-t"></div>
                                        </div>
                                        <div className="text-xs text-gray-500 mt-2">Ventas últimos 7 días</div>
                                    </div>
                                </div>
                            </div>

                            {/* Elementos flotantes */}
                            <div className="absolute -top-4 -right-4 bg-green-400 text-white p-3 rounded-full shadow-lg animate-bounce">
                                📊
                            </div>
                            <div className="absolute -bottom-4 -left-4 bg-blue-400 text-white p-3 rounded-full shadow-lg animate-pulse">
                                🚚
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
