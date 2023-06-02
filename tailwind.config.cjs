/** @type {import('tailwindcss').Config} */
const colors=require("./src/styles/theme-var.js")
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', //dark mode is apply when there is change in the root class
    theme: {
        fontFamily: {
            custom: ['Poppins', 'sans-serif'], //font links should be at the index.html scripts
        },
        extend: {
            colors: colors,
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
    // safelist: [
    //     // https://tailwindcss.com/docs/content-configuration#safelisting-classes
    //     // https://github.com/tailwindlabs/tailwindcss/discussions/10079
    //     // safelist pattern only for the storybook dynamic changing from the website
    //     // for dynamic  styling it is best to use the style prop of css
    //     {
    //         pattern: /(bg|border|text)-[^/]+$/,
    //         variants: ['dark', 'hover', 'focus', 'dark:hover', 'dark:focus'],
    //     },
    //     { pattern: /^from/ },
    //     { pattern: /^to/ },
    // ],
    plugins: [],
};
