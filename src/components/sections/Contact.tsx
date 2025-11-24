import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { socialLinks } from '../../data/constants';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden" aria-label="Contact section">


            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's build something amazing together</h2>
                    <p className="text-xl text-slate-400 mb-12">
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a href="mailto:cristian.lopez09825@gmail.com" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/25 flex items-center gap-2">
                            <Send size={20} />
                            Say Hello
                        </a>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 bg-slate-800 hover:bg-slate-700 rounded-xl text-white transition-colors border border-slate-700"
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Contact;
