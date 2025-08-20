

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: '#4F46E5',
                secondary: '#10B981',
                accent: '#F59E0B',
                dark: '#1F2937',
                light: '#F9FAFB'
            },
            fontFamily: {
                inter: ['Inter', 'system-ui', 'sans-serif'],
            },
        }
    },
    plugins: [],
}