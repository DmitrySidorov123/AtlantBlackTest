$(document).ready(function () {

    $('.icon').hover(
        function(){
            $(this).addClass('hover');
            $('.hover .front').addClass('hidden'); // for mozilla, IE
        },
        function(){
            $('.hover .front').removeClass('hidden'); // for mozilla, IE
            $(this).removeClass('hover');
        });



        $('.description .button').click(function(){
            sentForm.elements[0].value = '';
            $(".pop-up").fadeIn(400);
        });

        $('.cancel').click(function(){
            $('.pop-up').hide('slow', function(){
                $(".pop-up").fadeOut(400);
            });
        });

});