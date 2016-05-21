$(function(){
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
    

    
    $("input[name=radios]").on("click",function(e){
        $(".radio-wrapper").removeClass("radio-selected");
        $(this).closest(".radio-wrapper").toggleClass("radio-selected");
    });

    $("input[name=checkboxes]").on("click",function(e){
        $(this).closest(".checkbox-wrapper").toggleClass("checkbox-selected");
    });


     

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
});