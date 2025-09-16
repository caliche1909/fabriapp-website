import { Factory, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    producto: [
      { name: 'Características', href: '#caracteristicas' },
      { name: 'Precios', href: '#productos' },
      { name: 'Demo', href: '#demo' },
      { name: 'Integraciones', href: '#integraciones' }
    ],
    empresa: [
      { name: 'Sobre nosotros', href: '#nosotros' },
      { name: 'Carreras', href: '#carreras' },
      { name: 'Prensa', href: '#prensa' },
      { name: 'Blog', href: '#blog' }
    ],
    soporte: [
      { name: 'Centro de ayuda', href: '#ayuda' },
      { name: 'Documentación', href: '#docs' },
      { name: 'Contacto', href: '#contacto' },
      { name: 'Estado del servicio', href: '#estado' }
    ],
    legal: [
      { name: 'Privacidad', href: '#privacidad' },
      { name: 'Términos', href: '#terminos' },
      { name: 'Cookies', href: '#cookies' },
      { name: 'Seguridad', href: '#seguridad' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' }
  ];

  return (
    <footer className="bg-[#090654] text-gray-300 rounded-sm">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Factory className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">FabriApp</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              La plataforma integral que revoluciona la gestión de fábricas. 
              Optimiza inventarios, recetas, producción y rutas de reparto desde una sola aplicación.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <a href="mailto:soporte@fabriapp.com" className="hover:text-white transition-colors">
                  soporte@fabriapp.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+573232951780" className="hover:text-white transition-colors">
                  +57 323 295 1780
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 min-h-5 min-w-5 text-blue-400" />
                <span>Calle 18 # 16-10 Centro, Pasto, Nariño, Colombia</span>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="text-white font-semibold mb-4">Producto</h3>
            <ul className="space-y-3">
              {links.producto.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {links.empresa.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Soporte</h3>
            <ul className="space-y-3">
              {links.soporte.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-white font-semibold text-xl mb-2">
                Mantente actualizado
              </h3>
              <p className="text-gray-400">
                Recibe las últimas noticias, actualizaciones y consejos sobre gestión industrial.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-white border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} FabriApp. Todos los derechos reservados.
            </div>
            
            {/* Social links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-800"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
