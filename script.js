function createLeaf() {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');

    const startPosition = Math.random() * 100;
    leaf.style.left = `${startPosition}vw`;
    leaf.style.top = '-10vh';

    const leafImages = ['Nak1.png', 'Nak2.png', 'Nak3.png'];
    const randomImage = leafImages[Math.floor(Math.random() * leafImages.length)];
    leaf.style.backgroundImage = `url('${randomImage}')`;

    document.getElementById('container').appendChild(leaf);

    const swayDuration = Math.random() * 2 + 3;
    leaf.style.animation = `sway ${swayDuration}s ease-in-out infinite`;

    const fallDuration = Math.random() * 5 + 5;
    leaf.animate(
        [
            { top: '-10vh' },
            { top: '110vh' }
        ],
        {
            duration: fallDuration * 1000,
            easing: 'linear',
            iterations: 1,
            fill: 'forwards'
        }
    );

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    leaf.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - leaf.getBoundingClientRect().left;
        offsetY = e.clientY - leaf.getBoundingClientRect().top;
        leaf.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            leaf.style.left = e.clientX - offsetX + 'px';
            leaf.style.top = e.clientY - offsetY + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        leaf.style.cursor = 'grab';
    });

    setTimeout(() => {
        leaf.remove();
    }, (fallDuration + 2) * 1000);
}

setInterval(createLeaf, 500);
