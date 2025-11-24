import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { WorkExperience } from '../../data/constants';

interface ProjectModalProps {
    project: WorkExperience | null;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-slate-900 border border-slate-800 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl"
            >
                <div className="sticky top-0 bg-slate-900/95 backdrop-blur z-10 p-6 border-b border-slate-800 flex justify-between items-center">
                    <div>
                        <h3 className="text-2xl font-bold text-white">{project.company}</h3>
                        <p className="text-indigo-400">{project.role}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-6 md:p-8 space-y-8">
                    <p className="text-slate-300 text-lg leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag: string) => (
                            <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium bg-slate-800 text-slate-300 border border-slate-700">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {project.screenshots && project.screenshots.length > 0 ? (
                        <div className="grid md:grid-cols-2 gap-4 mt-8">
                            {project.screenshots.map((img: string, idx: number) => (
                                <div key={idx} className="rounded-lg overflow-hidden border border-slate-800 group relative aspect-video">
                                    <img src={img} alt={`Screenshot ${idx} `} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors" />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-8 border border-dashed border-slate-800 rounded-xl text-center text-slate-500">
                            <ExternalLink className="mx-auto mb-2 opacity-50" />
                            <p>Screenshots strictly confidential or not available.</p>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectModal;
