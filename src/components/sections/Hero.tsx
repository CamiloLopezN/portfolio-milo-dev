import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { MY_NAME, MY_TITLE, MY_DESCRIPTION } from '../../data/constants';
import TextType from '../ui/TextType';
import FloatingLines from '../ui/FloatingLines';
import MiloIcon from '../../assets/icons/MiloIcon.svg';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section
            id="about"
            className="relative min-h-screen flex flex-col justify-center py-24 overflow-hidden"
            aria-label="About section"
        >
            {/* Background Elements */}
            <motion.div style={{ y: y1 }} className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

            {/* Floating Lines Overlay - Behind content */}
            <div className="absolute inset-0 z-0">
                <FloatingLines
                    enabledWaves={['top', 'middle', 'bottom']}
                    lineCount={[6, 10, 12]}
                    lineDistance={[8, 6, 4]}
                    bendRadius={5.0}
                    bendStrength={-0.5}
                    interactive={true}
                    parallax={true}
                    mixBlendMode="screen"
                    animationSpeed={0.5}
                />
            </div>

            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-[5]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center flex-grow">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="mb-6 flex justify-start"
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 border border-green-500/50 rounded-full text-green-300 text-sm font-semibold backdrop-blur-md shadow-xl shadow-green-500/20">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                            Available for new projects
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
                        Hi, I'm <br />
                        <TextType
                            text={MY_NAME}
                            as="span"
                            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 drop-shadow-md"
                            typingSpeed={100}
                            loop={false}
                            showCursor={false}
                        />
                    </h1>

                    <p className="text-xl text-white mb-8 max-w-lg leading-relaxed drop-shadow-md font-medium" dangerouslySetInnerHTML={{ __html: MY_DESCRIPTION }} />

                    <div className="flex gap-4">
                        <a href="#work" className="px-8 py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2 shadow-lg shadow-white/10">
                            View Work <ChevronRight size={18} />
                        </a>
                        <a href="#contact" className="px-8 py-3 bg-slate-800 text-white font-medium rounded-lg hover:bg-slate-700 transition-colors shadow-lg shadow-black/20 border border-slate-700">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative hidden md:block"
                >
                    {/* Brand Mark */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="absolute -top-16 left-0 right-0 flex justify-center z-20"
                    >
                        <img src={MiloIcon} alt="Milo Logo" className="h-6 w-auto drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                    </motion.div>

                    {/* Abstract Code Visualization */}
                    <div className="relative z-10 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-4 border-b border-slate-800 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <pre className="text-xs md:text-sm text-slate-300 font-mono leading-relaxed">
                            <code>
                                <span className="text-purple-400">const</span> <span className="text-blue-400">SeniorDev</span> = {'{'}
                                {'\n'}  name: <span className="text-green-400">"{MY_NAME}"</span>,
                                {'\n'}  exp: <span className="text-orange-400">"+4 Years"</span>,
                                {'\n'}  stack: [<span className="text-green-400">"React"</span>, <span className="text-green-400">".NET"</span>, <span className="text-green-400">"Python"</span>, <span className="text-green-400">"Others"</span>],
                                {'\n'}  cloud: [<span className="text-green-400">"Azure"</span>, <span className="text-green-400">"AWS"</span>],
                                {'\n'}  versatile: <span className="text-yellow-400">true</span>
                                {'\n'}{'}'};
                            </code>
                        </pre>
                    </div>
                    <div className="absolute top-10 -right-10 w-full h-full bg-indigo-600/10 rounded-2xl -z-10 rotate-6 border border-indigo-500/20" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
