import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

// Esquema de validación con Yup
const schema = yup.object({
    name: yup
        .string()
        .required('Escriba su nombre (*)')
        .min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: yup
        .string()
        .required('Escriba su email (*)')
        .email('Debe ser un email válido'),
    company: yup
        .string()
        .required('Escriba el nombre de la empresa (*)')
        .min(2, 'El nombre de la empresa debe tener al menos 2 caracteres'),
    phone: yup
        .string()
        .required('Escriba su teléfono (*)')
        .matches(/^[+]?[0-9\s\-()]+$/, 'Formato de teléfono inválido (*)'),
    employees: yup
        .string()
        .required('Selecciona el tamaño de tu empresa (*)'),
    message: yup
        .string()
        .required('Escriba su mensaje (*)')
        .min(10, 'El mensaje no es claro, por favor sea más específico')
        .max(300, 'El mensaje es demaciado largo.')
});

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Configuración de React Hook Form con Yup
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange' // Validación en tiempo real
    });

    const onSubmit = (data: yup.InferType<typeof schema>) => {
        // Aquí iría la lógica para enviar el formulario
        console.log('Formulario enviado:', data);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            reset(); // Limpiar formulario después del envío
        }, 5000);
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email",
            detail: "soporte@fabriapp.com",
            link: "mailto:soporte@fabriapp.com"
        },
        {
            icon: Phone,
            title: "Teléfono",
            detail: "+(57) 3232951780",
            link: "https://wa.me/573232951780?text=Hola%2C%20vengo%20de%20la%20página%20de%20FabriApp%2C%20y%20estoy%20aquí%20porque%20me%20gustaría%20tener%20más%20información"
        },
        {
            icon: MapPin,
            title: "Oficina Principal",
            detail: "Calle 18 # 16-10 Centro, Pasto, Nariño, Colombia",
            link: "#"
        },
        {
            icon: Clock,
            title: "Horario de Atención",
            detail: "Lun-Vie: 8:00 AM - 12:00 PM y de 2:00 PM - 6:00 PM",
            link: "#"
        }
    ];

    return (
        <section id="contacto" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-[#09046b] mb-6">
                        Contacta con
                        <span className="text-blue-600"> Nosotros</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        ¿Listo para transformar tu fábrica? Nuestro equipo de expertos está aquí
                        para ayudarte a encontrar la solución perfecta para tu negocio.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Información de contacto */}
                    <div>
                        <h3 className="text-2xl font-bold text-[#09046b] mb-8">
                            Múltiples formas de conectar
                        </h3>

                        <div className="space-y-6 mb-10">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;

                                const handleCardClick = () => {
                                    if (info.link !== "#") {
                                        if (info.link.startsWith("https://wa.me/")) {
                                            window.open(info.link, '_blank');
                                        } else {
                                            window.location.href = info.link;
                                        }
                                    }
                                };

                                return (
                                    <div
                                        key={index}
                                        className={`flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 ${info.link !== "#" ? "cursor-pointer hover:scale-[1.02]" : ""
                                            }`}
                                        onClick={handleCardClick}
                                    >
                                        <div className="bg-blue-50 p-3 rounded-lg">
                                            <Icon className="h-6 w-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#09046b] mb-1">{info.title}</h4>
                                            <p className={`${info.link !== "#" ? "text-gray-600 hover:text-blue-600" : "text-gray-600"} transition-colors`}>
                                                {info.detail}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* FAQ rápido */}
                        <div className="bg-white rounded-xl p-6 shadow-sm">
                            <h4 className="font-bold text-[#09046b] mb-4">Preguntas Frecuentes</h4>
                            <div className="space-y-3">
                                <div>
                                    <p className="font-medium text-gray-700 text-sm">¿Cuánto tiempo toma la implementación?</p>
                                    <p className="text-gray-600 text-sm">Entre 2-4 semanas dependiendo del tamaño de tu operación.</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-700 text-sm">¿Ofrecen capacitación?</p>
                                    <p className="text-gray-600 text-sm">Sí, incluimos capacitación completa para todo tu equipo.</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-700 text-sm">¿Hay costos de setup?</p>
                                    <p className="text-gray-600 text-sm">No, la configuración inicial está incluida en todos los planes.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulario de contacto */}
                    <div className="bg-white rounded-2xl shadow-lg p-2 md:p-4 lg:p-8">
                        {!isSubmitted ? (
                            <>
                                <h3 className="text-2xl font-bold text-[#09046b] mb-6 leading-5 m-1">
                                    Solicita tu demo gratuita
                                </h3>
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Nombre completo *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                {...register('name')}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.name ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Tu nombre"
                                            />
                                            {errors.name && (
                                                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email corporativo *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                {...register('email')}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="tu@empresa.com"
                                            />
                                            {errors.email && (
                                                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                                Empresa *
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                {...register('company')}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.company ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="Nombre de tu empresa"
                                            />
                                            {errors.company && (
                                                <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Teléfono *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                {...register('phone')}
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                                    }`}
                                                placeholder="+57 323 256 9856"
                                            />
                                            {errors.phone && (
                                                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                                            Tamaño de tu empresa *
                                        </label>
                                        <select
                                            id="employees"
                                            {...register('employees')}
                                            className={`w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none bg-white ${errors.employees ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                                backgroundPosition: 'right 0.75rem center',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: '1.5em 1.5em'
                                            }}
                                        >
                                            <option value="">Seleccionar opción</option>
                                            <option value="1-10">1-10 empleados</option>
                                            <option value="11-50">11-50 empleados</option>
                                            <option value="51-200">51-200 empleados</option>
                                            <option value="201-500">201-500 empleados</option>
                                            <option value="500+">Más de 500 empleados</option>
                                        </select>
                                        {errors.employees && (
                                            <p className="mt-1 text-sm text-red-600">{errors.employees.message}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Cuéntanos sobre tu proyecto *
                                        </label>
                                        <textarea
                                            id="message"
                                            {...register('message')}
                                            rows={4}
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            placeholder="Describe tus necesidades actuales y cómo podemos ayudarte..."
                                        ></textarea>
                                        {errors.message && (
                                            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={!isValid}
                                        className={`w-full btn-primary flex items-center justify-center group text-white p-3 rounded-lg transition-all duration-300 ${isValid
                                                ? 'bg-blue-600 hover:bg-blue-700 hover:scale-[1.01] cursor-pointer'
                                                : 'bg-gray-400 cursor-not-allowed opacity-60'
                                            }`}
                                    >
                                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                                        Solicitar Demo Gratuita
                                    </button>

                                    <p className="text-xs text-gray-500 text-center">
                                        Al enviar este formulario, aceptas nuestros términos de servicio y política de privacidad.
                                    </p>
                                </form>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-[#09046b] mb-4">
                                    ¡Mensaje enviado exitosamente!
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    Gracias por tu interés en FabriApp. Nuestro equipo se pondrá en contacto
                                    contigo dentro de las próximas 24 horas.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="btn-primary"
                                >
                                    Enviar otro mensaje
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
