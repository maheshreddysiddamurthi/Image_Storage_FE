'use client';

import React, { useState, useEffect } from 'react';

interface TypingTextProps {
    text: string;
    speed?: number;
    className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({ text, speed = 100, className }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText(displayedText + text[index]);
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeoutId);
        }
    }, [index, text, speed, displayedText]);

    return (
        <span className={className}>
            {displayedText}
        </span>
    );
};

export default TypingText; 