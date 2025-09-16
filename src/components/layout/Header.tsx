import { useState, useRef, useEffect } from 'react';
import { Menu, X, Factory, LogIn, UserRoundPlus } from 'lucide-react';
import { smoothScrollTo } from '../../utils';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // Efecto para cerrar el menú al hacer clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMenuOpen && 
                menuRef.current && 
                buttonRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavClick = (sectionId: string) => {
        smoothScrollTo(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-white/90 backdrop-blur-xs  shadow-lg sticky top-0.5 z-50 border-gray-200 ">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-5">
                    {/* Logo */}
                    <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick('inicio')}>
                        <Factory className="h-8 w-8 text-blue-600" />
                        <span className="text-2xl font-bold text-[#09046b]">FabriApp</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-5 lg:space-x-6">
                        <button
                            onClick={() => handleNavClick('inicio')}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                        >
                            Inicio
                        </button>
                        <button
                            onClick={() => handleNavClick('caracteristicas')}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                        >
                            Características
                        </button>
                        <button
                            onClick={() => handleNavClick('productos')}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                        >
                            Productos
                        </button>
                        <button
                            onClick={() => handleNavClick('nosotros')}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                        >
                            Nosotros
                        </button>
                        <button
                            onClick={() => handleNavClick('contacto')}
                            className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                        >
                            Contacto
                        </button>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        {<button
                            onClick={() => window.open('https://www.fabriapp.com/empresa/login', '_blank')}
                            className="flex items-center justify-center gap-2 btn-secondary bg-blue-600 py-2 rounded-3xl text-white px-2 lg:px-3 hover:bg-blue-700 cursor-pointer transition-transform duration-200 hover:scale-105">
                            <LogIn className="px-0" />
                            <span className='md:hidden lg:inline'>Iniciar sesión</span>
                        </button>}
                        <button
                            onClick={() => window.open('https://www.fabriapp.com/empresa/register', '_blank')}
                            className="flex items-center justify-center gap-2 btn-primary bg-[#09046b] py-2 rounded-3xl text-white px-2 lg:px-3 hover:bg-[#09046b]/90 cursor-pointer transition-transform duration-200 hover:scale-105">
                            <UserRoundPlus className="px-0" />
                            <span className='md:hidden lg:inline'>Registrarse</span>
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2 gap-1 ">
                        <button
                            onClick={() => window.open('https://www.fabriapp.com/empresa/login', '_blank')}
                            className="text-gray-700 hover:text-blue-600 transition-colors shadow-sm p-2 rounded-full"
                        >
                            <LogIn className="h-5 w-5" />
                        </button>
                        <button
                            ref={buttonRef}
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-blue-600 transition-colors shadow-sm p-2 rounded-full"
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div ref={menuRef} className="md:hidden border-t border-gray-200 py-4">
                        <nav className="flex flex-col space-y-4">
                            <button
                                onClick={() => handleNavClick('inicio')}
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-left"
                            >
                                Inicio
                            </button>
                            <button
                                onClick={() => handleNavClick('caracteristicas')}
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-left"
                            >
                                Características
                            </button>
                            <button
                                onClick={() => handleNavClick('productos')}
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-left"
                            >
                                Productos
                            </button>
                            <button
                                onClick={() => handleNavClick('nosotros')}
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-left"
                            >
                                Nosotros
                            </button>
                            <button
                                onClick={() => handleNavClick('contacto')}
                                className="text-gray-700 hover:text-blue-600 font-medium transition-colors text-left"
                            >
                                Contacto
                            </button>
                            <div className="pt-4 space-y-2">
                                {/*<button onClick={() => handleNavClick('productos')} className="block btn-secondary text-center w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg">
                                    Ver Demo
                                </button>*/}
                                <button onClick={() => window.open('https://www.fabriapp.com/empresa/register', '_blank')} className="block btn-primary text-center w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg">
                                    Empezar Ahora
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
