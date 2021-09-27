module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: {
                'main': 'hsl(235, 16%, 14%)',
                'cards':'#2C2C44',

            },
            width:{
              '100':'35rem',
            },
            gradientColorStops: {
                'main': 'hsl(235, 16%, 14%)',
                'secondary': 'hsl(235, 16%, 14%)',
                'cards':'#2C2C44',

            },
            backgroundImage:{
                'stars':"url('images/bg-stars.svg')",
                'hills':"url('images/pattern-hills.svg')",
            },
            textColor:{
              'soft':'hsl(345, 95%, 68%)',
                'date':'#2C2C44',

            },
            inset:{
                '62':'15.5rem',
              '98':'40.25rem',
            },
            backgroundSize:{
              '50':'50% 50%',
            },
            letterSpacing:{
              'large':'0.5rem',
                'small':'0.1rem',
            },
            screens:{
                'fold':'300px',
                'se':'330px',
                'nse':'370px',
                'imax':'390px',
                'duo':'520px',
                'ipro':'1020px',
                'd':'1900px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
