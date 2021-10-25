import Ani from '../../accdsc/js/Ani'
let ani = new Ani({
    targets: [
        {
            el: document.querySelector('.text'),
            animationClassName: 'divo'
        },
        {
            el: document.querySelector('.nav_left'),
            animationClassName: 'divt'
        },
        {
            el: document.querySelector('.nav_left_fth'),
            animationClassName: 'divth'
        },
        {
            el: document.querySelector('.nav_left_first'),
            animationClassName: 'divy'
        },
    ]
})