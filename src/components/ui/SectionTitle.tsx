import React from 'react';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => (
    <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500 mb-4">
            {title}
        </h2>
        <div className="h-1 w-20 bg-indigo-500 rounded-full mb-4" />
        {subtitle && <p className="text-slate-400 max-w-2xl text-lg">{subtitle}</p>}
    </div>
);

export default SectionTitle;
