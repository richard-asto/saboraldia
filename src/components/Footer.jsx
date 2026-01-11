import React from 'react';
import { ChefHat, Facebook, Instagram, Twitter, Youtube, Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: 'hover:text-blue-600' },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:text-pink-600' },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-sky-500' },
        { icon: Youtube, href: 'https://youtube.com', label: 'YouTube', color: 'hover:text-red-600' },
        { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-900' },
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Contenido principal del footer */}
                <div className="grid md:grid-cols-3 gap-8 mb-6">
                    {/* Sección 1: Sobre Saboría */}
                    <div>
                        <h3 className="text-xl font-bold mb-3 gradient-text-footer"
                            style={{ fontFamily: 'Playfair Display, serif' }}>
                            Sabor al <span className="text-orange-600">Día</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Tu compañero culinario perfecto. Descubre, planifica y cocina las mejores recetas del mundo.
                        </p>
                    </div>

                    {/* Sección 2: Enlaces rápidos */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3">Enlaces Rápidos</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                                    Acerca de
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                                    Contacto
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                                    Política de Privacidad
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                                    Términos de Uso
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Sección 3: Redes Sociales */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3">Síguenos</h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`bg-gray-800 p-3 rounded-full ${social.color} transition-all transform hover:scale-110 hover:bg-gray-700`}
                                    aria-label={social.label}
                                    title={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                        {/* Newsletter */}
                        <div className="mt-4">
                            <p className="text-sm text-gray-400 mb-2">Suscríbete a nuestro newsletter</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="tu@email.com"
                                    className="flex-1 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                                <button className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-2 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105">
                                    <Mail className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Separador */}
                <div className="border-t border-gray-700 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-sm text-gray-400 text-center md:text-left">
                            © {currentYear} Sabor al Día. Todos los derechos reservados.
                        </p>

                        {/* Hecho con amor */}
                        <p className="flex items-center gap-2 text-sm text-gray-400">
                            Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> para los amantes de la cocina
                        </p>

                        {/* API Credit */}
                        <p className="text-xs text-gray-500">
                            Powered by{' '}
                            <a
                                href="https://www.themealdb.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-400 hover:text-orange-300 transition-colors"
                            >
                                TheMealDB
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;