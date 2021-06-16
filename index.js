const bars = document.querySelector('.fa-bars')
const navList = document.querySelector('.nav-list')

setTimeout(() => {
    bars.classList.remove('none');
}, 10000);

bars.addEventListener('click', () => {
    if(navList.classList.contains('none')) {
        navList.classList.remove('none')
        navList.classList.add('unactive')
        navList.classList.remove('active')
        navList.style.display = 'flex';
    } else {
        navList.classList.add('none')
        navList.classList.remove('unactive')
        navList.classList.add('active')
        setTimeout(() => {
            navList.style.display = 'none';
        }, 1000)
    }
})