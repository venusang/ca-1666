$(function(){
    $('.btn').on('click',function(e){
        e.preventDefault();
        console.debug(this.id);
    });
    
    //Enable Popover

    $('.teacherNotes').popover({
        trigger: "focus" 
    })


    //Enables closing of alert 
    $(".alert").alert();

    //Close Alert Animations
    $('.alert-info .close').on('click', function(e) {
        $('.alert-info').slideUp(400); 
    });
    $('.alert-danger .close').on('click', function(e) {
        $('.alert-danger').slideUp(400); 
    });
    $('.alert-warning .close').on('click', function(e) {
        $('.alert-warning').slideUp(400); 
    });
    
    

    //Button Alert Info - blue
    $("#submit-success").on("click",function(e){
        $('.alert').slideUp(400);
        $('#alert-info').slideDown(400); 

        $('#checkboxA').closest(".checkbox").removeClass('checkbox-danger');
        $('#checkboxB').closest(".checkbox").removeClass('checkbox-danger');
        $('#checkboxC').closest(".checkbox").removeClass('checkbox-success');

        $( "#checkboxA" ).prop( "checked", true );
        $( "#checkboxB" ).prop( "checked", true );
        $( "#checkboxC" ).prop( "checked", false );

        $("#checkboxC").prop("disabled", true);
        $("#checkboxD").prop("disabled", true);

        $("input").prop("disabled", true);
       
    });

    $("#submit-success-radios").on("click",function(e){
        $('.alert').slideUp(400);
        $('#alert-info-radios').slideDown(400); 

        $('#radioA').closest(".radio").removeClass('radio-danger');
        $('#radioC').closest(".radio").removeClass('radio-success');

        $("#radioA").prop("checked", true );

        $("#radioA").prop("disabled", true);
        $("input").prop("disabled",true)
    });



    //Button Alert Error - red
    $("#submit-error").on("click",function(e){
        $('.alert').slideUp(400);
        $('#alert-danger').slideDown(400); 

        $('#checkboxA').closest(".checkbox").removeClass('checkbox-danger');
        $('#checkboxB').closest(".checkbox").removeClass('checkbox-danger');
        $('#checkboxC').closest(".checkbox").removeClass('checkbox-success');


        $("input").prop("checked", false);
        $( "#checkboxA" ).prop( "checked", true );
        $( "#checkboxB" ).prop( "checked", true );
        $("input").prop("disabled", false);
    });

    //Button Alert Error - red
    $("#submit-error-radios").on("click",function(e){
        $('.alert').slideUp(400);
        $('#alert-danger-radios').slideDown(400); 

        $('#radioA').closest(".radio").removeClass('radio-danger');
        $('#radioC').closest(".radio").removeClass('radio-success');


        $("input").prop("checked", false);
        $("#radioA" ).prop("checked", true );
        $("input").prop("disabled", false);
    });


    //Button Alert Warning - yellow
    $("#submit-warning").on("click",function(e){
        $('.alert').slideUp(400);
        $('#alert-warning').slideDown(400); 
        
        $('#checkboxA').closest(".checkbox").removeClass('checkbox-danger');
        $('#checkboxB').closest(".checkbox").removeClass('checkbox-danger');
        $('#checkboxC').closest(".checkbox").removeClass('checkbox-success');

        $( "input" ).prop( "checked", false );
        $( "input" ).prop( "disabled", false );
    });

    //Button Alert Warning - yellow
    $("#submit-warning-radios").on("click",function(e){
        $('.alert').slideUp(400);
        $('#alert-warning-radios').slideDown(400); 
        
        $('#radioA').closest(".radio").removeClass('radio-danger');
        $('#radioC').closest(".radio").removeClass('radio-success');

        $( "input" ).prop( "checked", false );
        $( "input" ).prop( "disabled", false );
    });


    //Item Feedback 
    $("#submit-feedback").on("click",function(e){
        $('.alert').slideUp(400);

        $('#checkboxA').closest(".checkbox").addClass('checkbox-danger');
        $('#checkboxB').closest(".checkbox").addClass('checkbox-danger');
        $('#checkboxC').closest(".checkbox").addClass('checkbox-success');
        $( "#checkboxA" ).prop( "checked", true );
        $( "#checkboxB" ).prop( "checked", true );
        $( "#checkboxC" ).prop( "checked", true );

        
        $("input").prop("disabled", true);
        $('.alert-item-info').slideDown(400); 
    });

    $("#submit-feedback-radios").on("click",function(e){
        $('.alert').slideUp(400);

        $('#radioA').closest(".radio").addClass('radio-danger');
        $('#radioC').closest(".radio").addClass('radio-success');
        $("#radioC").prop( "checked", true );
        
        $("input").prop("disabled", true);
        $('.alert-item-info-radios').slideDown(400); 
    });



    $("#submit-reset").on("click",function(e){
        $('.alert').slideUp(400);

        $('#checkboxA').closest(".checkbox").removeClass('checkbox-danger');
        $('#checkboxB').closest(".checkbox").removeClass('checkbox-danger');
        $('#checkboxC').closest(".checkbox").removeClass('checkbox-success');


        $("input").prop("checked", false);
        $("input").prop("disabled", false);
        
    });

    $(".nav-tabs a").on("click",function(e){
        console.debug('nav-tabs clicked');
        resetform();
    });


    $(".submit-reset-radios").on("click",function(e){
        // $('.alert').slideUp(400);

        // $('#radioA').closest(".radio").removeClass('radio-danger');
        // $('#radioC').closest(".radio").removeClass('radio-success');


        // $("input").prop("checked", false);
        // $("input").prop("disabled", false);
        resetform();

        
    });


    function resetform(){
        $('.alert').slideUp(400);

        $('#radioA').closest(".radio").removeClass('radio-danger');
        $('#radioC').closest(".radio").removeClass('radio-success');


        $("input").prop("checked", false);
        $("input").prop("disabled", false);

    }
    //Hide Choice Labels
    $(".hide-labels").on("click",function(e){
        $(".choiceLabel").hide();
        $(".choiceLabel").css("width","0");
        $(".choiceText").css("width","100%");
    });
    $(".show-labels").on("click",function(e){
        $(".choiceLabel").show();
        $(".choiceLabel").css("width","5%");
        $(".choiceText").css("width","90%");
    });

    $(".hide-notes").on("click",function(e){
        $(".summaryFeedbackPanel").hide();
        $(".teacherNotes").hide();
    });

    $(".summary-feedback").on("click",function(e){
        $(".summaryFeedbackPanel").slideDown(400);
        $(".teacherNotes").slideUp(400);
    });

    $(".teacher-notes").on("click",function(e){
        $(".summaryFeedbackPanel").slideUp(400);
        $(".teacherNotes").slideDown(400);
    });


    $('form[name="alert-error"]').on("submit", function (e) {
        // var username = $(this).find('input[name="username"]');
        
        // if ($.trim(username.val()) === "") {
        //     // If its value is empty
        //     e.preventDefault();    // Stop the form from submitting
        //        // Show the Alert
        // } else {
        //     e.preventDefault();    // Not needed, just for demonstration
        //     $(".alert-danger").slideUp(400, function () {    // Hide the Alert (if visible)
        //         alert("Would be submitting form");    // Not needed, just for demonstration
        //         username.val("");    // Not needed, just for demonstration
        //     });
        // }
    });

    // $(".alert").find(".close").on("click", function (e) {
    //     // Find all elements with the "alert" class, get all descendant elements with the class "close", and bind a "click" event handler
    //     e.stopPropagation();    // Don't allow the click to bubble up the DOM
    //     e.preventDefault();    // Don't let any default functionality occur (in case it's a link)
    //     $(this).closest(".alert").slideUp(400);    // Hide this specific Alert
    // });

});