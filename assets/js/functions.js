$('#login').on('click', function(){

  $('#login-modal').modal('show');

});

$('#register').on('click',function(){

  $('#register-modal').modal('show');

});


$(document).ready(function() {

    $('#main-content').css('display', 'none');

    $('#main-content').fadeIn(500);

    $('a.switch').click(function(event) {

        event.preventDefault();

        newLocation = this.href;

        $('#main-content').fadeOut(500, newpage);
    });

    function newpage() {

        window.location = newLocation;

    }

});
