// alert("red color");

// document.querySelector("h1").style.color = "red";

$("h1").css("color" , "blue");
$("h1").addClass("bigtext");

$("h1").click(function(){
    $("h1").css("color", "yellow");
});

$("input").click(function(){
    $("h1").css("color", "yellow");
});

$(document).keypress(function(event){
    console.log(event.key);
})

$(document).keypress(function(event){
    $("h1").text(event.key);
})

//animation using jquery
$("button").on("click", function(){
    // $("h1").fadeIn();
    // $("h1").fadeOut();
    //  $("h1").slideUp();
    //  $("h1").toggle();
    
    // $("h1").animate({margin: "20%"});
    $("h1").fadeIn().fadeOut().slideUp().slideDown().animate({opacity: 0.5})
})

