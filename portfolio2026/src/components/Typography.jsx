import React from 'react';
import './Typography.css';

const Typography = ({ variant = 'p1', children, className = "", style = {} }) => {
    // Mapping variant names to semantic HTML tags
    const tagMap = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        p1: 'p',
        p2: 'span'
    };

    const Tag = tagMap[variant] || 'p';

    return (
        <Tag
            className={`text-base variant-${variant} ${className}`}
            style={style}
        >
            {children}
        </Tag>
    );
};

export default Typography;