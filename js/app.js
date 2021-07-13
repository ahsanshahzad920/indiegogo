//  carousel
$('.carousel').carousel();

// Dropdown arrow Down
$(".rotate-class").click(function () {
    $(".rotate").toggleClass("down");
})

// Slide Speed dropdown
$(document).ready(function () {
    $(".dropdown-toggle").click(function () {
        $(".dropdown-menu").slideToggle("slow");
    });
});

// search box
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

// crrunt year
var currentYear = (new Date).getFullYear();
$(document).ready(function () {
    $("#year").text((new Date).getFullYear());
});

// Multi Slider
$('#projectCarousel').carousel({
    interval: false
});

// ToolTip
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// Explore All
// icon rotate tech-and-innovation
document.getElementById("tech-innovation-category", "creative-works-category").addEventListener('click', function () {
    var icon = this.querySelector('.fa-chevron-down');
    icon.classList.toggle('rotate-icon');
});

// icon rotate creative-works-category
document.getElementById("creative-works-category").addEventListener('click', function () {
    var icon = this.querySelector('.fa-chevron-down');
    icon.classList.toggle('rotate-icon');
});
// icon rotate community-projects-category
document.getElementById("community-projects-category").addEventListener('click', function () {
    var icon = this.querySelector('.fa-chevron-down');
    icon.classList.toggle('rotate-icon');
});
// Explore All  

