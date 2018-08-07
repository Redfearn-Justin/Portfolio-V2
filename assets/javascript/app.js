$(document).ready(function() {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCUc2p24x8ASUskcbEeIbhNyeh7jxriZoY",
        authDomain: "portfolio-intel.firebaseapp.com",
        databaseURL: "https://portfolio-intel.firebaseio.com",
        projectId: "portfolio-intel",
        storageBucket: "portfolio-intel.appspot.com",
        messagingSenderId: "725334943993"
    };

    firebase.initializeApp(config);

    //variables

    var database = firebase.database();


    
    
    //functions

    function hideNavBar() {
        $("nav").hide();
    }

    function clearFields() {

        $("input").each(function() {
    
          $(this).val("");
    
        });

        $("textarea").each(function() {
    
            $(this).val("");
      
          });
    
    }


    //on-functions

    $("#formSubmitButton").on("click", function() {

        event.preventDefault();
    
        // Local variables
    
        var userName = $("#nameInput").val().trim();
    
        var userEmail = $("#emailInput").val().trim();
    
        var userMessage = $("#messageInput").val().trim();
    
        // object to house user input; subsequently send to firebase
    
        var totalUserInput = {
    
          Name: userName,
          Email: userEmail,
          Message: userMessage,
    
        };
    
        //upload object to firebase
    
        database.ref().push(totalUserInput);
    
    
        //function to clear fields after user input
    
        clearFields();
    
    
    });


    $(window).on("scroll", function() {

        if ( $(this).scrollTop() < 270) {

            $(".headerText").slideDown("slow");

        } 
        
        else {

            $(".headerText").slideUp("slow");
        }
    });


    $(window).on("scroll", function() {

        if ( $(this).scrollTop() > 250) {

            $("nav").fadeIn(400);

        } 
        
        else {

            $("nav").fadeOut(400);
        }

    });

    //function calls

    hideNavBar();



});