
$('.ui.button.primary').on('click', function(){

  $('.ui.modal').modal('show');

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