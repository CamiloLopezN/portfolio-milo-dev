import { useEffect, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import CircularGallery from '../ui/CircularGallery';
import { skillsData } from '../../data/constants';
import { createSkillIconImage } from '../../utils/createSkillIcon';

const Skills = () => {
    const [galleryItems, setGalleryItems] = useState<Array<{ image: string; text: string }>>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const generateImages = async () => {
            const items = await Promise.all(
                skillsData.map(async (skill) => ({
                    image: await createSkillIconImage(skill.icon, skill.color),
                    text: skill.name
                }))
            );
            setGalleryItems(items);
            setIsLoading(false);
        };

        generateImages();
    }, []);

    if (isLoading) {
        return (
            <section id="skills" className="py-24 relative" aria-label="Skills section">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <SectionTitle
                        title="Technical Arsenal"
                        subtitle="A curated list of technologies I use to build robust and scalable digital solutions."
                    />
                    <div className="flex items-center justify-center h-[600px]">
                        <div className="text-slate-400">Loading skills...</div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="skills" className="py-24 relative" aria-label="Skills section">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Technical Arsenal"
                    subtitle="A curated list of technologies I use to build robust and scalable digital solutions."
                />

                <div style={{ height: window.innerWidth < 768 ? '300px' : '400px', position: 'relative' }}>
                    <CircularGallery
                        items={galleryItems}
                        bend={3}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        scrollEase={0.02}
                        font="bold 60px sans-serif"
                    />
                </div>
            </div>
        </section >
    );
};

export default Skills;
