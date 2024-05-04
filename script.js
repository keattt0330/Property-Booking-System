document.addEventListener('click', event => {
    const current = event.target;

    const isReadMoreBtn = current.classList.contains('readmore-btn');

    if (!isReadMoreBtn) return;

    const currentText = current.parentNode.querySelector('.readmore-text');

    currentText.classList.toggle('readmore-text--show');

    current.textContent = currentText.classList.contains('readmore-text--show') ?
        "Read Less..." : "Read More...";
});
