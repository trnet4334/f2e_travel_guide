module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/components/*.{js,jsx}'],
    mode: 'jit',
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary': '#1A237E',
                'primary-light': '#534BAE',
                'primary-dark': '#000051',
                'secondary': '#AB47BC',
                'secondary-light': '#DF78EF',
                'secondary-dark': '#790E8B',
                'gray-0': '#FAFAFA',
                'gray-1': '#F5F5F5',
                'gray-2': '#EEEEEE',
                'gray-4': '#BDBDBD',
                'gray-9': '#212121',
                'scrim': ''
            },
            screens: {
                'xs': '480px',
                'xs-max': {'max': '479px'},
                'xs-r': {'min': '480px', 'max': '639px'},
                'sm-r': {'min': '640px', 'max': '767px'},
                'md-r': {'min': '768px', 'max': '1023px'},
                'lg-r': {'min': '1024px', 'max': '1279px'},
                'xl-r': {'min': '1280px', 'max': '1535px'},
                '2xl-r': {'min': '1536px'},
            },
            listStyleType: {},
            backgroundImage: {
                'header-img': "url(./assets/images/header-img.png)",
                'feature-1': "url(./assets/images/bg-feature-1.jpeg)",
                'feature-2': "url(./assets/images/bg-feature-2.jpeg)",
                'feature-3': "url(./assets/images/bg-feature-3.jpeg)",
                'feature-4': "url(./assets/images/bg-feature-4.jpeg)",
                'feature-5': "url(./assets/images/bg-feature-5.jpeg)",
                'feature-6': "url(./assets/images/bg-feature-6.jpeg)",
                'feature-7': "url(./assets/images/bg-feature-7.jpeg)",
                'feature-8': "url(./assets/images/bg-feature-8.jpeg)",
                'feature-9': "url(./assets/images/bg-feature-9.jpeg)",
                'feature-10': "url(./assets/images/bg-feature-10.jpeg)",
                'feature-11': "url(./assets/images/bg-feature-11.jpeg)",
                'feature-12': "url(./assets/images/bg-feature-12.jpeg)",
                'special-1': "url(./assets/images/bg-special-1.jpeg)",
                'special-2': "url(./assets/images/bg-special-2.jpeg)",
                'special-3': "url(./assets/images/bg-special-3.jpeg)",
                'special-4': "url(./assets/images/bg-special-4.jpeg)",
                'special-5': "url(./assets/images/bg-special-5.jpeg)",
                'special-6': "url(./assets/images/bg-special-6.jpeg)",
                'special-7': "url(./assets/images/bg-special-7.jpeg)",
                'special-8': "url(./assets/images/bg-special-8.jpeg)",
            },
            borderWidth: {
                '1': '1px'
            },
        },
        fontFamily: {
            'inter': '\'Inter\', sans-serif',
            'roboto': '\'Roboto\', sans-serif'
        }
    },
    variants: {
        extend: {
            borderWidth: ['hover'],
            fontWeight: ['hover', 'focus'],
            transform: ['hover'],
            backgroundColor: ['odd', 'even'],
            ringWidth: ['hover'],
            ringColor: ['hover'],
            brightness: ['hover'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
