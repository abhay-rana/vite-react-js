/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', //dark mode is apply when there is change in the root class
    theme: {
        fontFamily: {
            custom: ['Poppins', 'sans-serif'], //font links should be at the index.html scripts
        },
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                primary: {
                    DEFAULT: '#01b193',
                    dark: '#229ED9',
                    light: '#e1fdf8',
                },
                secondary: { DEFAULT: '#d9dd28' },
                warning: { DEFAULT: '#fb8903', light: '#fff0ca' },
                danger: { DEFAULT: '#ff0000', light: ' #ffebeb' },
                success: { DEFAULT: '#5cb85c', light: '#ecffef' },
                gray: {
                    dark: '#2D4A58',
                    DEFAULT: '#3c4858',
                    medium: '#818181',
                    light: '#b7b7b7',
                    lightest: '#f2f2f3',
                },
                filled: {},
            },
            padding: {
                5: '1rem',
                15: '2rem',
            },
            borderWidth: {
                DEFAULT: '1px',
                0: '0px',
                1: '1px',
            },
        },
    },
    safelist: [
        // https://tailwindcss.com/docs/content-configuration#safelisting-classes
        // https://github.com/tailwindlabs/tailwindcss/discussions/10079
        // safelist pattern only for the storybook dynamic changing from the website
        // for dynamic  styling it is best to use the style prop of css
        {
            pattern: /(bg|border|text)-[^/]+$/,
            variants: ['dark', 'hover', 'focus', 'dark:hover', 'dark:focus'],
        },
        { pattern: /^from/ },
        { pattern: /^to/ },
    ],
    plugins: [],
};
