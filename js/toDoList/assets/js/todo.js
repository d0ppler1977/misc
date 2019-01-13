"use strict";
// check of specific ToDos
// $("li").click(function() { // this code will not add listeners to FUTURE LI's
//     $(this).toggleClass("completed");
// });

$("ul").on("click", "li", function() { // using jquery's on method to add listers on any future LI elements
    $(this).toggleClass("completed");
});


// X/trashcan function
// $("span").click(function(e) {
//     $(this).parent().fadeOut(500, function() {
//         $(this).remove();
//     }); // not only removing the span, but also the complete li (the parent)
//     e.stopPropagation(); // stops the event to bubbeling up
// });

// X/trashcan function
// same strategy here
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    }); // not only removing the span, but also the complete li (the parent)
    e.stopPropagation(); // stops the event to bubbeling up
});


// add a listener to the enter key on the textbox
$("input[type='text'").keypress(function(keycode) {
    if (keycode.which === 13) {
        const todo = $(this).val();
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todo + "</li>");
        $(this).val(""); // clearing the text. It acts as a setter if you dont ommit a = character
    }
});


$(".fa-plus-square").click(function() {
    $("input[type='text'").fadeToggle();
});