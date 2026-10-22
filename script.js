const cursor = document.getElementById('cursor');
const navBtns = document.querySelectorAll('.nav-btn');
const pages = document.querySelectorAll('.page');
const animationBoxes = document.querySelectorAll('.animation-box');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
    cursor.classList.add('grow');
});

document.addEventListener('mouseup', () => {
    cursor.classList.remove('grow');
});

document.addEventListener('keydown', (e) => {
    animationBoxes.forEach(box => {
        if (e.key === 'Enter') {
            box.style.transform = 'scale(1.5) rotate(45deg)';
            box.style.backgroundColor = '#e94560';
        } else {
            box.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
            box.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 50%)`;
        }
    });
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        animationBoxes.forEach(box => {
            box.style.transform = 'scale(1) rotate(0deg)';
            box.style.backgroundColor = '#533483';
        });
    }
});

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetPage = btn.getAttribute('data-page');

        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === targetPage) {
                page.classList.add('active');
            }
        });
    });
});
