$(function(){
   
    

    $("#submit-success-radios").on("click",function(e){
        $('.alert').slideUp(400);
        $('#alert-info-radios').slideDown(400); 


        $("input").prop("disabled",true);

        //when update has finished, navigate to success message
        window.location = '#success';
    });



    //Button Alert Error - red
    $("#submit-error-radios").on("click",function(e){
        $('.alert').slideUp(400);
        $('#alert-danger-radios').slideDown(400); 

       


        // $("input").prop("checked", false);
        // $("#radioA" ).prop("checked", true );
        $("input").prop("disabled", false);
        
        //when update has finished, navigate to error message
        window.location = '#error';
    });


    //Button Alert Warning - yellow
    $("#submit-warning-radios").on("click",function(e){
        $('.alert').slideUp(400);
        $('#alert-warning-radios').slideDown(400); 
      

        $( "input" ).prop( "checked", false );
        $( "input" ).prop( "disabled", false );

        $(".radio-wrapper").removeClass("radio-selected");
        
        //when update has finished, navigate to oops message
        window.location = '#oops';
    });

    $("#submit-feedback-radios").on("click",function(e){
        $('.alert').slideUp(400);
        $(".radio-wrapper").removeClass("radio-selected");
        $('#radioC').closest(".radio-wrapper").addClass("radio-selected");
        $('#radioC').closest(".radio").addClass('radio-danger');
        $('#radioA').closest(".radio").addClass('radio-success');
        $("#radioA").prop( "checked", true );
        
        $("input").prop("disabled", true);
        $('.alert-item-info-radios').slideDown(400);
        window.location = '#feedback'; 
    });



    $(".nav-tabs a").on("click",function(e){
        resetRadioForm();
    });


    $(".submit-reset-radios").on("click",function(e){
        resetRadioForm();
    });


    function resetRadioForm(){
        $(".radio-wrapper").removeClass("radio-selected");
        $('.alert').slideUp(400);

        
        $('.radio').removeClass('radio-danger');
        $('.radio').removeClass('radio-success');

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
        console.debug('submit testing');
        e.preventDefault(e);

        var radios = document.getElementsByName("radios");

        for(var i = 0; i < radios.length; i++) {
           if(radios[i].checked == true) {
               selectedRadio = radios[i].value;
               console.debug('true' +selectedRadio);
           } else {
                console.debug('the radios are not selected');
           }
         }
    });

});