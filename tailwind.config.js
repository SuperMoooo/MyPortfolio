/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            keyframes: {
                topY: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(150%)' },
                },
            },
        },
        plugins: [],
    },
};
