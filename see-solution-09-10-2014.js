$(function(){
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
    

    
    $("input[name=radios]").on("click",function(e){
        $(".radio-wrapper").removeClass("radio-selected");
        $(this).closest(".radio-wrapper").toggleClass("radio-selected");
    });

    $("#summaryfeedback").on("click",function(e){
        console.debug('console.debug');
    });


    $("#answer").on("click",function(e){
        e.preventDefault();
        $("#radioA-success").prop( "disabled", true );
    });

    $(".reset").on("click",function(e){
        e.preventDefault();
        resetRadioForm();
    });

    $(".answer-wrapper .panel-title").on("click",function(e){
        $(this).toggleClass('show');
        if($(this).hasClass('show')){
            $(".answer-wrapper .panel-title").html('<i class="answerIcon fa fa-eye-slash"></i> Hide Answer');
            $('#end-of-answer').ScrollTo({
                duration: 2000,
                easing: 'linear'
            });
        } else {
            $(".answer-wrapper .panel-title").html('<i class="answerIcon fa fa-eye"></i> Show Correct Answer');
        }
    });

    $(".summaryFeedbackPanel .panel-title").on("click",function(e){
        $('#end-of-feedback').ScrollTo({
                duration: 2000,
                easing: 'linear'
            });
    });

    function showPanels(){

        $('.answer-wrapper').slideDown(400,function(){
            $('.summaryFeedbackPanel').slideDown(400);
        });

        $('.answer-wrapper').ScrollTo({
            duration: 2000,
            easing: 'linear'
        });
    }

    function resetRadioForm(){
        $('.inline-answer').fadeOut(400);
        $("#correct-choice").fadeIn(400)

        $(".collapse").collapse('hide');
        $('.submission-messages .alert').slideUp(400); 
        $('.choices-wrapper .alert').slideUp(400); 
        $('.answer-wrapper').css('display','none');
        $('.summaryFeedbackPanel').css('display','none');

        $('.correct-choice').slideUp(400); 
        

        $('.choices-wrapper .radio-wrapper').removeClass('radio-selected');
        $('.choices-wrapper .radio').removeClass('radio-success');
        $('.choices-wrapper .radio').removeClass('radio-danger');
        $(".choices-wrapper input").prop("checked", false);
        $(".choices-wrapper input").prop("disabled", false);
        $("input[type=submit]").prop("disabled", false);

        //remove the show class and reset to closed
        $(".answer-wrapper .panel-title").html('<i class="answerIcon fa fa-eye"></i> Show Correct Answer');
         $(".answer-wrapper .panel-title").removeClass('show');
    }

    $(".radio").on("click",function(){
        $('.submission-messages .alert').slideUp(400);
        $('#submit').ScrollTo({
                duration: 2000,
                easing: 'linear'
            });
    });

    $('form[name="alert-error"]').on("submit", function (e) {
        e.preventDefault(e);
        $(".choices-wrapper").removeClass("radio-selected");
        if($("#radioA").prop("checked")){
            $('.submission-messages .alert-error').slideUp(400); 
           
            $(".choices-wrapper input").prop("disabled", true);
            $('.inline-answer').fadeIn(100);
            $("#correct-choice").css('display','none');

        } else if($("#radioB").prop("checked")){
            $('.submission-messages .alert-error').slideUp(400); 

            $("#radioB").prop("checked", false );  
            $('#radioB').closest(".radio").addClass('radio-danger');
            showPanels();
            $(".choices-wrapper input").prop("disabled", true);
        } else if($("#radioC").prop("checked")){
            $('.submission-messages .alert-error').slideUp(400); 

            $("#radioC").prop("checked", false );  
            $('#radioC').closest(".radio").addClass('radio-danger');
            
            $('.radio-wrapper .alert-warning').slideDown(400, function(){
                showPanels();
            }); 
            
            $(".choices-wrapper input").prop("disabled", true);


        } else if($("#radioD").prop("checked")){
            $('.submission-messages .alert-error').slideUp(400); 
             $('.submission-messages .alert-info').slideDown(400); 

            // $("#radioD").prop( "checked", false );  
            // $('#radioD').closest(".radio").addClass('radio-danger');
            // showPanels();
            $(".choices-wrapper input").prop("disabled", true);
        } else {
            $('.submission-messages .alert-danger').slideDown(400); 
            $('#submit').ScrollTo({
                duration: 2000,
                easing: 'linear'
            });
        }

    });

});