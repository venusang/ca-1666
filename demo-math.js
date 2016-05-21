$(function(){

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

        // $("#radioA").prop("checked", true );

        // $("#radioA").prop("disabled", true);
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


        // $("input").prop("checked", false);
        // $("#radioA" ).prop("checked", true );
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
        $('.radio').removeClass('radio-danger');


        $("input").prop("checked", false);
        $("input").prop("disabled", false);

    }
     $('form[name="alert-error"]').on("submit", function (e) {
        console.debug('submit testing');
        e.preventDefault(e);

        // var radios = $(this).find('input[name="radios"]');
        // console.debug(radios);


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