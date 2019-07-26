var footer = document.querySelector("#footer");
footer.style.backgroundColor = "#5e5e5e";
footer.style.color="#ffffff"
var header = document.querySelector("#header");
header.style.position = "sticky";

$(function () {
    $(document).scroll(function(){
        var $nav = $("#mainNav");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());

    })
})