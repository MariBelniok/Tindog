// ***** JQUERY METHODS *****
/*$("h1").addClass("big-tittle margin-50");
$("h1").text("Bye")
$("button").html("<em>Click</em>")
$("a").attr("href", "https://www.yahoo.com")


// ***** JQUERY ADD_EVENT_LISTENER EXAMPLE *****
$("h1").click(function() {
    $("h1").css("color", "purple")
})*/


// ***** JAVASCRIPT VANILLA EXAMPLE / JQUERY EXAMPLE *****
/*for (var i = 0; i < 5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color = "purple";
    });
}

$("button").click(function(){
    $("h1").css("color", "purple"); //DONT NEED THE FOR LOOP, JQUERY SELECT ALL 
});*/

// ***** JQUERY KEYDOWN *****
/*$("input").keydown(function(event){
    console.log(event.key);
})

// *****CHANGE THE H1 WHEN THE KEY IS PRESSED *****
$("body").keydown(function(event){
    $("h1").text(event.key)
})*/

// *****CHANGE THE COLOR ONCE MOUSE IS OVER H1***** 
/*$("h1").on("mouseover", function(){
    $("h1").css("color", "purple");
});*/

// *****HIDE H1***** 
/*$("button").on("click", function(){
    $("h1").fadeToggle(); //slideUp, slideDown, slideToggle
});*/

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({ opacity: 0.5});
});