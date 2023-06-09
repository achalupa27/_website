'use client';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const DarkModeButtonIcon = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div>
            {currentTheme === 'dark' ? (
                <div className='flex cursor-pointer items-center' onClick={() => setTheme('light')}>
                    <i className='fi fi-rr-brightness text-lg leading-none'></i>
                </div>
            ) : (
                <div className='flex cursor-pointer items-center' onClick={() => setTheme('dark')}>
                    <i className='fi fi-rr-moon-stars text-lg leading-none'></i>
                </div>
            )}
        </div>
    );
};

export default DarkModeButtonIcon;
