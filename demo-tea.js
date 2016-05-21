$(function(){

    $("#submit-success-radios").on("click",function(e){
        $('.alert').slideUp(400);
        $('#alert-info-radios').slideDown(400); 

        $("input").prop("disabled",true);

        window.location = '#success';
    });



   
    //Button Alert Error - red
    $("#submit-error-radios").on("click",function(e){
        $('.alert').slideUp(400);
        $('#alert-danger-radios').slideDown(400); 

        $("input").prop("disabled", false);
        window.location = '#error';
    });


    //Button Alert Warning - yellow
    $("#submit-warning-radios").on("click",function(e){
        $('.alert').slideUp(400);
        $('#alert-warning-radios').slideDown(400); 
   
        $( "input" ).prop( "checked", false );
        $( "input" ).prop( "disabled", false );

         window.location = '#oops';
    });



    $("#submit-feedback-radios").on("click",function(e){
        $('.alert').slideUp(400);
        $(".radio-wrapper").removeClass('radio-selected');
        $('#radioA').closest(".radio").addClass('radio-danger');
        $('#radioA').closest(".radio-wrapper").addClass('radio-selected');
        $('#radioC').closest(".radio").addClass('radio-success');
        $("#radioC").prop( "checked", true );
        
        $("input").prop("disabled", true);
        $('.alert-item-info-radios').slideDown(400); 

        window.location = '#feedback'; 
    });



    $(".nav-tabs a").on("click",function(e){
        resetform();
    });


    $(".submit-reset-radios").on("click",function(e){
        resetform();
    });


    function resetform(){
        $('.alert').slideUp(400);
        $('.radio').removeClass('radio-danger');
        $('.radio').removeClass('radio-success');
        $('.radio-wrapper').removeClass('radio-selected');
        $("input").prop("checked", false);
        $("input").prop("disabled", false);

    }
    
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