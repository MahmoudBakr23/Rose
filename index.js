const bars = document.querySelector('.fa-bars')
const navList = document.querySelector('.nav-list')
const close = document.querySelector('.fa-times')

setTimeout(() => {
    bars.classList.remove('noone');
}, 10000);

bars.addEventListener('click', () => {
    if(navList.classList.contains('none')) {
        navList.classList.remove('none')
        navList.classList.add('unactive')
        navList.classList.remove('active')
        navList.style.display = 'flex';
        close.classList.remove('none')
        bars.classList.add('none')
    }
})

close.addEventListener('click', () => {
    if(!navList.classList.contains('none')) {
        navList.classList.add('none')
        navList.classList.remove('unactive')
        navList.classList.add('active')
        setTimeout(() => {
            navList.style.display = 'none';
        }, 1000)
        close.classList.add('none')
        bars.classList.remove('none')
    }
})