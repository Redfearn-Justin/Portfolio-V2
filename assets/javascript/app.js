$(document).ready(function() {

    //variables


    
    
    //functions


    //on-functions

    $(window).on("scroll", function() {

        if ( $(this).scrollTop() > 300) {

            $(".headerText").slideDown("slow");

        } 
        
        else {

            $(".headerText").slideUp("slow");
        }
    });


    $(window).on("scroll", function() {

        if ( $(this).scrollTop() > 200) {

            $("nav").fadeIn(400);

        } 
        
        else {

            $("nav").fadeOut(400);
        }
    });



});