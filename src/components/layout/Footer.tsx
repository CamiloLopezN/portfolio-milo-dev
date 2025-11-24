import { socialLinks } from '../../data/constants';

const Footer = () => (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Cristian López. All rights reserved.</p>
            <div className="flex gap-6">
                {socialLinks.map((social) => (
                    <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-indigo-400 transition-colors">
                        <social.icon size={20} />
                    </a>
                ))}
            </div>
        </div>
    </footer>
);

export default Footer;
