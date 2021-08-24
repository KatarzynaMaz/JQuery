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

//create a paragraph with some text and a button
//when the button is clicked,the text fades out.
$("#button").click(function(){
    $("p").fadeOut()
})

//Create a text and a button, the text is inicially hidden but apprears 
//when the button is clicked. 

$("#button2").click(function(){
    $("#hidden").fadeIn();
})