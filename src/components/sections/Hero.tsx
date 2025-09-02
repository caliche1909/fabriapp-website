import { ArrowRight, CheckCircle } from 'lucide-react';
import { smoothScrollTo } from '../../utils';
import { GrMapLocation } from "react-icons/gr";
import { FiTruck } from "react-icons/fi";

const Hero = () => {
    return (
        <section
            id="inicio"
            className="relative py-18 bg-gradient-to-br from-indigo-50 via-blue-50 to-blue-100 overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #dbeafe 100%)'
            }}>
            {/* Borde inferior ondulado */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg
                    className="relative block w-full h-12 sm:h-16 md:h-20"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,800.21,0,0,1,0,27.35V120H1200V95.8C1132.19,100.63,1055.71,111.31,985.66,92.83Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Div principal que contiene todo */}
                <div className="flex flex-col space-y-12">

                    {/* Div superior - Contenido principal */}
                    <div className="flex flex-col md:flex-row gap-12 items-center">

                        {/* Div izquierda - Contenido de texto */}
                        <div className="w-full md:w-1/2 order-1 md:order-1">

                            <h1 className="text-5xl sm:text-6xl font-bold text-[#09046b] mb-10 leading-12 sm:leading-16 ">
                                Transforma tu
                                <span className="text-blue-600"> fabrica</span> con
                                <span className="text-blue-600"> FabriApp</span>
                            </h1>



                            {/* Beneficios clave */}
                            <div className="mb-8 space-y-3">
                                <div className="flex items-center space-x-3 leading-5">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span className="text-gray-700 text-xl leading-5">Control total de inventarios en tiempo real</span>
                                </div>
                                <div className="flex items-center space-x-3 leading-5">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span className="text-gray-700 text-xl leading-5">Gestión inteligente de recetas y producción</span>
                                </div>
                                <div className="flex items-center space-x-3 leading-5">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    <span className="text-gray-700 text-xl leading-5">Rutas optimizadas y seguimiento de repartidores</span>
                                </div>
                            </div>
                        </div>

                        {/* Div derecha - Imagen */}
                        <div className="w-full md:w-1/2 order-2 md:order-2">
                            <div className="relative">
                                {/* FabriApp Screenshot */}
                                <div className="bg-white rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                                    <img
                                        src="https://res.cloudinary.com/duhursjga/image/upload/v1756784614/SystemApp/FabriApp/fabriapp-website/fabriapp-hero.png"
                                        alt="FabriApp Dashboard"
                                        className="w-full h-auto rounded-xl object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Elementos flotantes */}
                                <div className="absolute -top-4 -right-4 bg-green-400 text-white p-3 rounded-full shadow-lg animate-bounce">
                                    <GrMapLocation style={{ fontSize: '1.5rem' }} />
                                </div>
                                <div className="absolute -bottom-4 -left-4 bg-blue-400 text-white p-3 rounded-full shadow-lg animate-pulse">
                                    <FiTruck style={{ fontSize: '1.5rem' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Botones de acción */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-5">
                        <button
                            onClick={() => smoothScrollTo('contacto')}
                            className="btn-primary inline-flex items-center justify-center group bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded transition-transform duration-200 hover:scale-105"
                        >
                            Empezar gratis ahora
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        {/* <button
                                    onClick={() => smoothScrollTo('productos')}
                                    className="btn-secondary inline-flex items-center justify-center group bg-green-200 hover:bg-green-300 text-green-800 py-2 px-3 rounded transition-transform duration-200 hover:scale-105"
                                >
                                    <Play className="mr-2 h-5 w-5" />
                                    Ver demo en vivo
                                </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
