function toggleMenu() {
    var navList = document.getElementById("navList");
    navList.classList.toggle("active");
}


function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    var dropdownIcon = document.getElementById("dropdownIcon");

    if (dropdownMenu.classList.contains("show")) {
        dropdownMenu.classList.remove("show");
        dropdownIcon.src = "img/down-arrow.png";
    } else {
        dropdownMenu.classList.add("show");
        dropdownIcon.src = "img/up-arrow.png"; 
    }
}

//點擊選單外的地方收起選單
document.addEventListener('click', function(event) {
    var navList = document.getElementById("navList");
    var menuButton = document.querySelector('.menu-button');
    
    if (!menuButton.contains(event.target) && !navList.contains(event.target)) {
        navList.classList.remove("active");
    }
});


