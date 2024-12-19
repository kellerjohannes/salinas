const scaleFactor = window.getComputedStyle(document.documentElement)
                          .getPropertyValue('--image-scale-factor');

window.addEventListener('load', () => {
    const images = document.querySelectorAll('.figure img');

    images.forEach(image => {
        const scaledHeight = image.clientHeight * scaleFactor;
        const verticalMargin = (scaledHeight - image.clientHeight) / 2;

        image.style.marginTop = verticalMargin + 'px';
        image.style.marginBottom = verticalMargin + 'px';
    });
});
