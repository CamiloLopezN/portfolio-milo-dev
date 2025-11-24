import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { workData, WorkExperience } from '../../data/constants';
import SectionTitle from '../ui/SectionTitle';
import SpotlightCard from '../ui/SpotlightCard';
import ProjectModal from '../ui/ProjectModal';
import DotGrid from '../ui/DotGrid';

const Work = () => {
    const [selectedProject, setSelectedProject] = useState<WorkExperience | null>(null);

    return (
        <section id="work" className="relative py-24 overflow-hidden" aria-label="Work and projects section">
            {/* DotGrid Background */}
            <DotGrid
                dotSize={3}
                gap={40}
                baseColor="#334155"
                activeColor="#6366f1"
                proximity={120}
                speedTrigger={80}
                shockRadius={200}
                shockStrength={4}
            />

            {/* Top Fade Gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-10" />

            {/* Bottom Fade Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-10" />

            <div className="relative z-20 max-w-7xl mx-auto px-6">
                <SectionTitle
                    title="Selected Projects"
                    subtitle="A showcase of projects where I've contributed technically and strategically."
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workData.map((work) => (
                        <SpotlightCard
                            key={work.id}
                            onClick={() => setSelectedProject(work)}
                            className="h-full flex flex-col cursor-pointer group hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-slate-800 p-2 flex items-center justify-center border border-slate-700">
                                        {/* Simulating company logo */}
                                        <span className="font-bold text-xs text-white text-center leading-none">{work.company.substring(0, 2).toUpperCase()}</span>
                                    </div>
                                    <div className="p-2 rounded-full bg-slate-800 text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                        <ChevronRight size={16} />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">{work.company}</h3>
                                <p className="text-sm font-medium text-slate-500 mb-4">{work.role}</p>
                                <p className="text-slate-400 text-sm line-clamp-3 mb-6">
                                    {work.description}
                                </p>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {work.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800/50 border border-slate-700 text-slate-400">
                                            {tag}
                                        </span>
                                    ))}
                                    {work.tags.length > 3 && <span className="text-xs px-2 py-1 text-slate-500">+{work.tags.length - 3}</span>}
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
            </AnimatePresence>
        </section>
    );
};

export default Work;
