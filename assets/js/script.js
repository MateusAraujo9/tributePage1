$(function() {

    $(".menu a").click(function(e) {

        e.preventDefault();

        goTo($(this), 700)
    });

});

function goTo(element, speed) {
    var href = element.attr('href');
    let elemento = $(href);
    var top = elemento.offset().top;
    
	$("html,body").animate({scrollTop : top}, speed);
}