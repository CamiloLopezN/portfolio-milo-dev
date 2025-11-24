import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <span className="text-xl font-bold tracking-tighter text-white">
                    CL<span className="text-indigo-500">.</span>
                </span>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {['About', 'Skills', 'Work', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item.toLowerCase())}
                            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950 border-b border-white/5 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {['About', 'Skills', 'Work', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollTo(item.toLowerCase())}
                                    className="text-left text-lg text-slate-300 hover:text-white"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
