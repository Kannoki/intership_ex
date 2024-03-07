import React, { ReactNode } from 'react';

interface PagesProps {
    children: ReactNode;
}

function Pages({ children }: PagesProps) {
    return <nav>{children}</nav>;
}

export default Pages;
