// 切换导航栏显示
function toggleMenu() {
    var navList = document.getElementById("navList");
    navList.classList.toggle("active");
}

// 监听点击事件，收起菜单
document.addEventListener('click', function(event) {
    var navList = document.getElementById("navList");
    var menuButton = document.querySelector('.menu-button');
    
    // 如果点击的不是菜单按钮或菜单列表，且菜单是打开的，关闭菜单
    if (!menuButton.contains(event.target) && !navList.contains(event.target)) {
        navList.classList.remove("active");
    }
});
