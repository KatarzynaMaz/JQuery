// changing the text when the circle is clicked

$("#circle").click(function(){
    $("p").html("The circle was clicked.");
})

/*alret "hello" when there is a hover on the circle
    $("#circle").hover(function(){
      alert("hello");
    })*/

//get the width of the body of the page
//alert($("body").css("width"))

/*click on a shape and make them all disseaper
$("div").click(function(){
    $("div").css("display", "none");
})*/

/*click on a shape and that particular shape diseaper
$("div").click(function(){
    $(this).css("display", "none");
})*/

//click on a shape and that particular shape fade out
$("div").click(function(){
    $(this).fadeOut();
})