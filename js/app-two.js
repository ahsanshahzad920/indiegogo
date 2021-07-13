//  carousel
$('.carousel').carousel();

// Dropdown arrow Down
$(".rotate-class").click(function () {
    $(".rotate").toggleClass("down");
})

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
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
  });