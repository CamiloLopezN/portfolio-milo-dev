'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Children, cloneElement, useEffect, useMemo, useRef, useState, ReactElement } from 'react';

import './Dock.css';

interface DockItemProps {
    children: ReactElement;
    className?: string;
    onClick?: () => void;
    mouseX: any;
    spring: any;
    distance: number;
    magnification: number;
    baseItemSize: number;
    isActive: boolean;
    onActivate: () => void;
    color?: string;
}

function DockItem({
    children,
    className = '',
    onClick,
    mouseX,
    spring,
    distance,
    magnification,
    baseItemSize,
    isActive,
    onActivate,
    color
}: DockItemProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isHovered = useMotionValue(0);

    const mouseDistance = useTransform(mouseX, (val: number) => {
        const rect = ref.current?.getBoundingClientRect() ?? {
            x: 0,
            width: baseItemSize
        };
        return val - rect.x - baseItemSize / 2;
    });

    const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]);
    const size = useSpring(targetSize, spring);

    const handleClick = () => {
        onActivate();
        onClick?.();
    };

    return (
        <motion.div
            ref={ref}
            style={{
                width: size,
                height: size,
                ['--item-color' as any]: color
            }}
            onHoverStart={() => isHovered.set(1)}
            onHoverEnd={() => isHovered.set(0)}
            onFocus={() => isHovered.set(1)}
            onBlur={() => isHovered.set(0)}
            onClick={handleClick}
            className={`dock-item ${className} ${isActive ? 'active' : ''}`}
            tabIndex={0}
            role="button"
            aria-haspopup="true"
        >
            {Children.map(children, child => {
                // Pass isHovered only to components that need it (DockLabel)
                if (child && typeof child === 'object' && 'type' in child) {
                    const childType = (child as any).type;
                    // Only pass isHovered to DockLabel, not to div or DockIcon
                    if (childType?.name === 'DockLabel' || childType === DockLabel) {
                        return cloneElement(child as ReactElement, { isHovered } as any);
                    }
                }
                return child;
            })}
        </motion.div>
    );
}

interface DockLabelProps {
    children: React.ReactNode;
    className?: string;
    isHovered?: any;
}

function DockLabel({ children, className = '', isHovered }: DockLabelProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isHovered) return;
        const unsubscribe = isHovered.on('change', (latest: number) => {
            setIsVisible(latest === 1);
        });
        return () => unsubscribe();
    }, [isHovered]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: -10 }}
                    exit={{ opacity: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`dock-label ${className}`}
                    role="tooltip"
                    style={{ x: '-50%' }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

interface DockIconProps {
    children: React.ReactNode;
    className?: string;
}

function DockIcon({ children, className = '' }: DockIconProps) {
    return <div className={`dock-icon ${className}`}>{children}</div>;
}

interface DockItemConfig {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    className?: string;
    color?: string;
}

interface DockProps {
    items: DockItemConfig[];
    className?: string;
    spring?: { mass: number; stiffness: number; damping: number };
    magnification?: number;
    distance?: number;
    panelHeight?: number;
    dockHeight?: number;
    baseItemSize?: number;
    particleCount?: number;
    particleDistances?: [number, number];
    particleR?: number;
    timeVariance?: number;
    animationTime?: number;
    colors?: number[];
    initialActiveIndex?: number;
}

export default function Dock({
    items,
    className = '',
    spring = { mass: 0.1, stiffness: 150, damping: 12 },
    magnification = 70,
    distance = 200,
    panelHeight = 68,
    dockHeight = 256,
    baseItemSize = 50,
    particleCount = 15,
    particleDistances = [90, 10],
    particleR = 100,
    timeVariance = 300,
    animationTime = 600,
    colors = [1, 2, 3, 1, 2, 3, 1, 4],
    initialActiveIndex = 0
}: DockProps) {
    const mouseX = useMotionValue(Infinity);
    const isHovered = useMotionValue(0);
    const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
    const gooeyRef = useRef<HTMLDivElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    // Sync activeIndex with prop
    useEffect(() => {
        setActiveIndex(initialActiveIndex);
    }, [initialActiveIndex]);

    const maxHeight = useMemo(
        () => Math.max(dockHeight, magnification + magnification / 2 + 4),
        [magnification, dockHeight]
    );
    const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
    const height = useSpring(heightRow, spring);

    const noise = (n = 1) => n / 2 - Math.random() * n;

    const getXY = (distance: number, pointIndex: number, totalPoints: number) => {
        const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
        return [distance * Math.cos(angle), distance * Math.sin(angle)];
    };

    const createParticle = (i: number, t: number, d: [number, number], r: number) => {
        let rotate = noise(r / 10);
        return {
            start: getXY(d[0], particleCount - i, particleCount),
            end: getXY(d[1] + noise(7), particleCount - i, particleCount),
            time: t,
            scale: 1 + noise(0.2),
            color: colors[Math.floor(Math.random() * colors.length)],
            rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
        };
    };

    const makeParticles = (element: HTMLElement) => {
        const d = particleDistances;
        const r = particleR;
        const bubbleTime = animationTime * 2 + timeVariance;
        element.style.setProperty('--time', `${bubbleTime}ms`);

        for (let i = 0; i < particleCount; i++) {
            const t = animationTime * 2 + noise(timeVariance * 2);
            const p = createParticle(i, t, d, r);
            element.classList.remove('active');

            setTimeout(() => {
                const particle = document.createElement('span');
                const point = document.createElement('span');
                particle.classList.add('particle');
                particle.style.setProperty('--start-x', `${p.start[0]}px`);
                particle.style.setProperty('--start-y', `${p.start[1]}px`);
                particle.style.setProperty('--end-x', `${p.end[0]}px`);
                particle.style.setProperty('--end-y', `${p.end[1]}px`);
                particle.style.setProperty('--time', `${p.time}ms`);
                particle.style.setProperty('--scale', `${p.scale}`);
                particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
                particle.style.setProperty('--rotate', `${p.rotate}deg`);

                point.classList.add('point');
                particle.appendChild(point);
                element.appendChild(particle);
                requestAnimationFrame(() => {
                    element.classList.add('active');
                });
                setTimeout(() => {
                    try {
                        element.removeChild(particle);
                    } catch {
                        // Do nothing
                    }
                }, t);
            }, 30);
        }
    };

    const updateGooeyPosition = (index: number) => {
        if (!panelRef.current || !gooeyRef.current) return;

        const items = panelRef.current.querySelectorAll('.dock-item');
        const targetItem = items[index] as HTMLElement;
        if (!targetItem) return;

        const panelRect = panelRef.current.getBoundingClientRect();
        const itemRect = targetItem.getBoundingClientRect();

        const styles = {
            left: `${itemRect.left - panelRect.left}px`,
            top: `${itemRect.top - panelRect.top}px`,
            width: `${itemRect.width}px`,
            height: `${itemRect.height}px`
        };
        Object.assign(gooeyRef.current.style, styles);

        // Update gooey color based on active item
        const activeColor = targetItem.getAttribute('style')?.match(/--item-color:\s*([^;]+)/)?.[1];
        if (activeColor) {
            gooeyRef.current.style.setProperty('--gooey-color', activeColor);
        }
    };

    const handleActivate = (index: number) => {
        if (activeIndex === index) return;

        setActiveIndex(index);
        updateGooeyPosition(index);

        if (gooeyRef.current) {
            const particles = gooeyRef.current.querySelectorAll('.particle');
            particles.forEach(p => gooeyRef.current?.removeChild(p));
            makeParticles(gooeyRef.current);
        }
    };

    useEffect(() => {
        if (gooeyRef.current) {
            updateGooeyPosition(activeIndex);
            gooeyRef.current.classList.add('active');
        }
    }, [activeIndex]);

    return (
        <>
            {/* SVG Filter for gooey effect */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>

            <motion.div style={{ height, scrollbarWidth: 'none' }} className="dock-outer">
                <motion.div
                    ref={panelRef}
                    onMouseMove={({ pageX }) => {
                        isHovered.set(1);
                        mouseX.set(pageX);
                    }}
                    onMouseLeave={() => {
                        isHovered.set(0);
                        mouseX.set(Infinity);
                    }}
                    className={`dock-panel ${className}`}
                    style={{ height: panelHeight }}
                    role="toolbar"
                    aria-label="Application dock"
                >
                    <div ref={gooeyRef} className="gooey-effect" />
                    {items.map((item, index) => (
                        <DockItem
                            key={index}
                            onClick={item.onClick}
                            className={item.className}
                            mouseX={mouseX}
                            spring={spring}
                            distance={distance}
                            magnification={magnification}
                            baseItemSize={baseItemSize}
                            isActive={activeIndex === index}
                            onActivate={() => handleActivate(index)}
                            color={item.color}
                        >
                            <div>
                                <DockIcon>{item.icon}</DockIcon>
                                <DockLabel>{item.label}</DockLabel>
                            </div>
                        </DockItem>
                    ))}
                </motion.div>
            </motion.div>
        </>
    );
}
