import React, { type ReactNode } from 'react';

// We use { children }: { children: ReactNode } to tell TypeScript 
// that 'children' can be any valid React element (text, components, etc.)

export function Section({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <section className={'kto-layout-section' + (className ? ' ' + className : '')}>
            {children}
        </section>
    );
}

export function Container({ children }: { children: ReactNode }) {
    return (
        <div className="kto-layout-container">
            {children}
        </div>
    );
}