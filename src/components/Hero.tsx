import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="mb-16 mt-16">
            <h1 className="text-6xl font-bold tracking-tight mb-6 text-[var(--accent-blue-text)] font-serif italic">
                Jayee Zheng
            </h1>
            <p className="text-xl text-[var(--text-secondary)] font-normal max-w-xl leading-relaxed font-mono">
                Building cool AI experiences ~
            </p>
        </section>
    );
};

export default Hero;
