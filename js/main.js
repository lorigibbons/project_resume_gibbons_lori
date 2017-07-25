//JQ Task #1, to toggle up the sections to collapse upon a click

$(document).ready(function () {
    $('#testimonials').click(function () {
        $('.testToggle').slideToggle();
    });
    $('#skills-Toggle').click(function () {
        $('.testToggle2').slideToggle();
    });
    $('#education-Toggle').click(function () {
        $('.testToggle3').slideToggle();
    $('#work-Toggle').click(function () {
        $('.testToggle4').slideToggle();
    });

//https://code.google.com/archive/p/jquery-tubular/

//Point Point Plugin
$('#pushButton').pointPoint();

/*
    // You can also pass arguments:
    $('#pushButton').pointPoint({
        "class":"myNewPointer",
        "distance":100
    });
*/
});
