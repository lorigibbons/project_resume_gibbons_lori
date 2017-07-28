//JQ Task #1, to toggle up the sections to collapse upon a click

$(document).ready(function () {  //this means js will wait for html to load then run
    $('#testimonials').click(function () {
        $('.testToggle').slideToggle();
    });
    $('#skills-Toggle').click(function () {
        $('.testToggle2').slideToggle();
    });
    $('#education-Toggle').click(function () {
        $('.testToggle3').slideToggle();
    });
    $('#work-Toggle').click(function () {
        $('.testToggle4').slideToggle();
    });

//Plugin 1:
//Point Point Plugin
    $('#pushButton').pointPoint(
    );

/*
    // You can also pass arguments:
    $('#pushButton').pointPoint({
        "class":"myNewPointer",
        "distance":100
    });
*/

//Plugin 2:
//CIRCLE TEXT http://www.jqueryscript.net/text/jQuery-Plugin-For-Flexible-Responsive-Curving-Text-CircleType-js.html
//http://circletype.labwire.ca/

    $('#demo').circleType({radius: 400 } );

//Plugin 3: Letters to a span element https://github.com/davatron5000/Lettering.js
    $(".fancy_title").lettering();

});
