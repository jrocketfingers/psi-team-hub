$('#login').on('click', function(){

  $('#login-modal').modal('show');

});

$('.team.subscribe').on('click', function(){

  $('#team-modal').modal('show');

});

$('#subscribe-accept').on('click', function(){

  //temporary
  $('#team-modal').modal('hide');

});

$('#subscribe-reject').on('click', function(){

  //temporary
  $('#team-modal').modal('hide');

});

$('#register').on('click',function(){

  $('#register-modal').modal('show');

});

$('.call.student').on('click', function(){

  $('#student-modal').modal('show');

});

$('#call-accept').on('click', function(){

  //temporary
  $('#student-modal').modal('hide');

});

$('#call-reject').on('click', function(){

  //temporary
  $('#student-modal').modal('hide');

});


$(document).ready(function() {

    $('#main-content').css('display', 'none');

    $('#main-content').fadeIn(500);

    $('a.switch').click(function(event) {

        event.preventDefault();

        newLocation = this.href;

        if($(this).hasClass('drawer')){

            $('.ui.sidebar').sidebar('toggle');
        }

        $('#main-content').fadeOut(500, newpage);
    });

    function newpage() {

        window.location = newLocation;

    }

});
