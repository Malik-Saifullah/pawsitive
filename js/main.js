$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() < 50) {
            $("#header").css("box-shadow","none");
            $("#header").css("background","transparent");
        } else {
            $("#header").css("position","fixed");
            $("#header").css("background","#fff");
            $("#header").css("box-shadow","0 0 10px 0 rgba(0, 0, 0 , .1)");
        }
    });
});


$(function () {
    $(".feature_slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        dots: true,
        autoplayHoverPause: true
    });
});

$(function () {
    $("#slider-range-min").slider({
        range: "min",
        value: 1,
        min: 0,
        max: 1000,
        step: 100,
        slide: function (event, ui) {
            $("#amount").val("$ " + ui.value + ".00");
        }
    });
    $("#amount").val("$ " + $("#slider-range-min").slider("value") + ".00");
});