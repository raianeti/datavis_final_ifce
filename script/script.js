$( document ).ready(function() {
    //Controla o menu hamburguer
    $('#hamb-menu').click(function(e){

        var hamb = $('#main-menu').parent('.sidebar').children('#hamb-menu').children('i');

        if($('#main-menu').css('display') == 'none'){
            $('#main-menu').css('display', 'block');
            hamb.removeClass('fa fa-bars');
            hamb.addClass('fa fa-times');
        }else{
            $('#main-menu').css('display', 'none');
            hamb.removeClass('fa fa-times');
            hamb.addClass('fa fa-bars');
        }
    });
});
