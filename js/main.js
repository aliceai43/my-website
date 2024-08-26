window.addEventListener('scroll', function() {
    const footer = document.getElementById('contact-footer');
    const scrollHeight = window.innerHeight + window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight;

    // 当用户滚动接近页面底部时显示页脚
    if (scrollHeight >= documentHeight-1000) {
        footer.classList.add('visible');
    }
});