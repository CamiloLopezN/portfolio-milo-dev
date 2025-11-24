import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { iconMap } from '../data/constants.tsx';
import { Code2 } from 'lucide-react';

// Simple utility to create skill icon images with actual icons
export async function createSkillIconImage(iconKey: string, color: string): Promise<string> {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    // Fill background with dark gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#1e293b');
    gradient.addColorStop(1, '#0f172a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Parse color class to actual color
    const colorMap: Record<string, string> = {
        'text-orange-500': '#f97316',
        'text-blue-500': '#3b82f6',
        'text-yellow-400': '#facc15',
        'text-red-500': '#ef4444',
        'text-blue-600': '#2563eb',
        'text-cyan-400': '#22d3ee',
        'text-red-600': '#dc2626',
        'text-green-500': '#22c55e',
        'text-white': '#ffffff',
        'text-green-600': '#16a34a',
        'text-purple-500': '#a855f7',
        'text-blue-400': '#60a5fa'
    };

    const iconColor = colorMap[color] || '#ffffff';

    // Get the icon component
    const IconComponent = iconMap[iconKey] || Code2;

    // Create SVG string from React icon
    const iconElement = createElement(IconComponent, {
        size: 200,
        strokeWidth: 1.5,
        color: iconColor
    });

    const svgString = renderToStaticMarkup(iconElement);

    // Create a promise to load the SVG as an image
    return new Promise((resolve) => {
        const img = new Image();
        const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);

        img.onload = () => {
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2 - 50;

            // Draw glow effect
            ctx.shadowBlur = 50;
            ctx.shadowColor = iconColor;

            // Draw the icon centered
            const iconSize = 250;
            const x = centerX - iconSize / 2;
            const y = centerY - iconSize / 2;

            ctx.drawImage(img, x, y, iconSize, iconSize);

            // Draw again for stronger glow
            ctx.shadowBlur = 30;
            ctx.drawImage(img, x, y, iconSize, iconSize);

            ctx.shadowBlur = 0;

            URL.revokeObjectURL(url);
            resolve(canvas.toDataURL());
        };

        img.onerror = () => {
            // Fallback: draw a simple circle with letter if SVG fails
            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2 - 50;
            const radius = 120;

            ctx.shadowBlur = 40;
            ctx.shadowColor = iconColor;
            ctx.fillStyle = iconColor + '30';
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.fill();

            ctx.shadowBlur = 0;
            ctx.fillStyle = iconColor;
            ctx.font = 'bold 100px monospace';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(iconKey[0].toUpperCase(), centerX, centerY);

            URL.revokeObjectURL(url);
            resolve(canvas.toDataURL());
        };

        img.src = url;
    });
}
