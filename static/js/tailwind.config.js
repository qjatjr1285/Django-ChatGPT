const colors = require('tailwindcss/colors');
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'white': '#ffffff',
                'purple': '#3f3cbb',
                'midnight': '#121063',
                'metal': '#565584',
                'tahiti': '#3ab7bf',
                'silver': '#ecebff',
                'bubble-gum': '#ff77e9',
                'bermuda': '#78dcca',
                'black': '#0e0e0e',
                'red': '#dc2626',
                'brown': '#b45309',
                'gray': '#a1a1a1',
                'green': '#16a34a',
                'indigo': '#4338ca',
                'skyblue': '#38bdf8',
                'yellow': '#fde047',
            },
        },
    },
}