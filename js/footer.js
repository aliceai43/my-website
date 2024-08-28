window.addEventListener('scroll', function() {
    const footer = document.getElementById('contact-footer');
    const scrollHeight = window.innerHeight + window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight;

    //到底部時顯示
    if (scrollHeight >= documentHeight-1000) {
        footer.classList.add('visible');
    }
});