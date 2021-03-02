$("p").click(function() {
    $(this).slideToggle('slow');
})

$("button").mouseenter(function() {
    $("button").removeClass('makeRed').addClass('makeBlue');
})

$("button").mouseleave(function() {
    $("button").removeClass('makeBlue').addClass('makeRed');
})