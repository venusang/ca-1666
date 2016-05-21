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

    
    $("input[name=checkboxes]").on("click",function(e){
        $(this).closest(".checkbox-wrapper").toggleClass("checkbox-selected");
    });

    $("#summaryfeedback").on("click",function(e){
        console.debug('console.debug');
    });


    $("#answer").on("click",function(e){
        e.preventDefault();
        $("#checkboxA-success").prop( "disabled", true );
    });

    $(".reset").on("click",function(e){
        e.preventDefault();
        resetCheckboxForm();
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

    function resetCheckboxForm(){
        $('.inline-answer').fadeOut(400);
        $("#correct-choice").fadeIn(400)

        $(".collapse").collapse('hide');
        $('.submission-messages .alert').slideUp(400); 
        $('.checkbox-wrapper .alert').slideUp(400); 
        $('.answer-wrapper').css('display','none');
        $('.summaryFeedbackPanel').css('display','none');

        $('.correct-choice').slideUp(400); 
        

        $('.checkbox-wrapper').removeClass('checkbox-selected');
        $('.checkbox-wrapper .checkbox').removeClass('checkbox-success');
        $('.checkbox-wrapper .checkbox').removeClass('checkbox-danger');
        $(".checkbox-wrapper input").prop("checked", false);
        $(".checkbox-wrapper input").prop("disabled", false);
        $("input[type=submit]").prop("disabled", false);

        //remove the show class and reset to closed
        $(".answer-wrapper .panel-title").html('<i class="answerIcon fa fa-eye"></i> Show Correct Answer');
        $(".answer-wrapper .panel-title").removeClass('show');
    }

    $(".checkbox").on("click",function(){
        $('.submission-messages .alert').slideUp(400);
        $('#submit').ScrollTo({
                duration: 2000,
                easing: 'linear'
            });
    });

    $('form[name="alert-error"]').on("submit", function (e) {
        e.preventDefault(e);
        $(".choices-wrapper").removeClass("checkbox-selected");

        if($("#checkboxA").prop("checked") && $("#checkboxC").prop("checked") ){
            
            $(".checkbox-wrapper input").prop("disabled", true);
            $('#checkboxA').closest(".checkbox").addClass('checkbox-danger');
            

            $("#checkboxC").prop("checked", true );  
            $('#checkboxC').closest(".checkbox").addClass('checkbox-danger');

            $('.checkbox-wrapper .alertA').slideDown(400);
            $('.checkbox-wrapper .alertC').slideDown(400, function(){
                showPanels();
            }); 

        } else if($("#checkboxA").prop("checked") && $("#checkboxB").prop("checked") ){
            
            $(".checkbox-wrapper input").prop("disabled", true);
            $('#checkboxA').closest(".checkbox").addClass('checkbox-danger');
            

            $('.inline-answer').fadeIn(100);
          
            $('.alert-success').slideDown(400); 

            $("#checkboxB").prop("checked", true );  
            
            $(".checkbox-wrapper input").prop("disabled", true);

            $("#correct-choice").css('display','none');
            $('.inline-answer').slideDown(100); 


            $('.checkbox-wrapper .alertA').slideDown(400, function(){
                $('.summaryFeedbackPanel').slideDown(400);
                $('#submit').ScrollTo({
                    duration: 2000,
                    easing: 'linear'
                });
            }); 

        } else if($("#checkboxA").prop("checked") && $("#checkboxE").prop("checked") ){
            $('#checkboxA').closest(".checkbox").addClass('checkbox-danger');
            $('#checkboxE').closest(".checkbox").addClass('checkbox-danger');
            
            $('.checkbox-wrapper .alertA').slideDown(400, function(){
                showPanels();
            });

            $(".checkbox-wrapper input").prop("disabled", true);

             

        } else if($("#checkboxA").prop("checked")){
            $(".checkbox-wrapper input").prop("disabled", true);
            $('#checkboxA').closest(".checkbox").addClass('checkbox-danger');
            
            $('.checkbox-wrapper .alertA').slideDown(400, function(){
                showPanels();
            }); 

        } else if($("#checkboxB").prop("checked")){
            $('.inline-answer').fadeIn(100);
          
            $('.alert-success').slideDown(400); 

            $("#checkboxB").prop("checked", true );  
            
            $(".checkbox-wrapper input").prop("disabled", true);

            $("#correct-choice").css('display','none');
            $('.inline-answer').slideDown(100); 

        } else if($("#checkboxC").prop("checked")){
            $("#checkboxC").prop("checked", true );  
            $('#checkboxC').closest(".checkbox").addClass('checkbox-danger');
            
            $('.checkbox-wrapper .alertC').slideDown(400, function(){
                showPanels();
            }); 
            
            $(".checkbox-wrapper input").prop("disabled", true);

        } else if($("#checkboxD").prop("checked")){
            $('.submission-messages .alert-info').slideDown(400);
            $(".checkbox-wrapper input").prop("disabled", true);
        } else if($("#checkboxE").prop("checked")){
            
            $('#checkboxE').closest(".checkbox").addClass('checkbox-danger');
            showPanels();
            $(".checkbox-wrapper input").prop("disabled", true);
        }  else {
            $('.submission-messages .alert-warning').slideDown(400);
            $('#submit').ScrollTo({
                duration: 2000,
                easing: 'linear'
            });
        }

    });

});