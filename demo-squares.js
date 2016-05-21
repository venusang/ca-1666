$(function(){
    //Enable Popover

    $('.teacherNotes').popover({
        trigger: "focus"
    });


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

        $("#checkboxC").prop("disabled", true);
        $("#checkboxD").prop("disabled", true);

        $("input").prop("disabled", true);
       
    });


    //Button Alert Error - red
    $("#submit-error").on("click",function(e){
        $('.alert').slideUp(400);
        $('#alert-danger').slideDown(400); 

        $('input').removeClass('checkbox-danger');
        $('input').removeClass('checkbox-success');
        $("input").prop("disabled", false);
    });



    //Button Alert Warning - yellow
    $("#submit-warning").on("click",function(e){
        $('.alert').slideUp(400);
        $('#alert-warning').slideDown(400); 
        
        $('input').removeClass('checkbox-danger');
        $('input').removeClass('checkbox-success');
        $( '.checkbox-wrapper').removeClass('checkbox-selected');


        $( "input" ).prop( "checked", false );
        $( "input" ).prop( "disabled", false );
    });

    

    //Item Feedback 
    $("#submit-feedback").on("click",function(e){
        $('.alert').slideUp(400);

        $('input').removeClass("checkbox-danger");
        $('input').removeClass("checkbox-success");

        $('#checkboxA').closest(".checkbox").addClass('checkbox-danger');
        $('#checkboxB').closest(".checkbox").addClass('checkbox-success');
        $('#checkboxC').closest(".checkbox").addClass('checkbox-danger');

        $( "#checkboxA" ).prop( "checked", true );
        $( "#checkboxA" ).closest('.checkbox-wrapper').addClass('checkbox-selected');


        $( "#checkboxB" ).prop( "checked", true );
        

        $( "#checkboxC" ).prop( "checked", true );
        $( "#checkboxC" ).closest('.checkbox-wrapper').addClass('checkbox-selected');
        
        $("input").prop("disabled", true);
        $('.alert-item-info').slideDown(400); 
    });

   
    $(".nav-tabs a").on("click",function(e){
        resetform();
    });


    $(".submit-reset").on("click",function(e){
        resetform();
    });


    function resetform(){
       $('.alert').slideUp(400);
        $('input').removeClass('checkbox-danger');
        $('input').removeClass('checkbox-success');
        $( '.checkbox-wrapper').removeClass('checkbox-selected');
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