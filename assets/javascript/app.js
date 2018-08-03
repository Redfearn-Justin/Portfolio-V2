$(document).ready(function() {

    //variables


    
    
    //functions

    $(window).on("scroll", function() {

        if ($(this).scrollTop() > 300) {

            $("nav").fadeIn(500);

        } 
        
        else {

            $("nav").fadeOut(500);
        }
    });








}