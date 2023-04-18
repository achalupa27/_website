/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#c2410c',
                secondary: '#e4e4e7',
                'primary-dark': '#bbf7d0',
                'secondary-dark': '#18181b',
            },
        },
    },
    plugins: [],
};
