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

$('.team.creation').on('click', function(){

  $('#team-creation-modal').modal('show');

});

$('#team-done').on('click', function(){

  $('#team-creation-modal').modal('hide');

});

$('#team-close').on('click', function(){

  $('#team-creation-modal').modal('hide');

});


$(document).ready(function() {

    $('#main-content').css('display', 'none');

    $('#main-content').fadeIn(500);

    $('.switch').click(function(event) {

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

$('#nav-drawer-button').on('click', function(){

  $('.ui.sidebar').sidebar('toggle');

});

$('.checker').on('click', function(){

  if($(this).hasClass('striked')){
    $(this).removeClass('striked');
  }else{
    $(this).addClass('striked');
  }

});
