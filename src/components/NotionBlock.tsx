import React from 'react';

interface NotionBlockProps {
    children: React.ReactNode;
    type?: 'text' | 'h2' | 'h3' | 'list-item';
    icon?: React.ReactNode;
}

const NotionBlock: React.FC<NotionBlockProps> = ({ children, type = 'text', icon }) => {
    const styles = {
        h2: 'text-xs font-bold uppercase tracking-widest text-[var(--text-muted)] mt-10 mb-4',
        h3: 'text-lg font-semibold mt-4 mb-2 text-[var(--text-main)]',
        text: 'text-lg leading-relaxed text-[var(--text-secondary)] mb-4',
        'list-item': 'flex items-center gap-3 text-[var(--text-secondary)] mb-3 text-base font-medium',
    };

    return (
        <div className={styles[type]}>
            {icon && <span className={`text-[var(--accent-blue-text)] opacity-80 flex items-center justify-center ${type === 'list-item' ? 'w-5' : 'mr-2'}`}>{icon}</span>}
            {children}
        </div>
    );
};

export default NotionBlock;
