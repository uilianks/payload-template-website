import React from 'react';
import type { TemplateBlock as TemplateBlockProps } from '@/payload-types'

export const TemplateBlock: React.FC<TemplateBlockProps> = (props) => {
    const { field } = props
    console.log(`This is a template block with id: ${field}`)
    return (
        <div>
            <h1>Hello, World!</h1>
            <p>This is a simple React component.</p>
            <p>{field}</p>
        </div>
    );
};