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
