$(document).ready(function(){

  $('#wall').show();

  $("#wall").slideReveal({ trigger: $("#button"), position: "right", width: "100vw", speed: "1000"});

  $('#intro').show().textition({map: {x: 100, y: 0, z: 0},autoplay: true});
  setTimeout(function() { $('#intro').remove();}, 17000);
  $( "#console" ).setAsTerminal("#console", "user", "host", "~", "$", PROGRAMS);

  $('#code').click(function(){$('#console').fadeToggle("slide").delay(800);});

  $('#contacts').click(function(){
      $('#contact').fadeToggle("slide").delay(800);
      $('#email').fadeToggle("slide").delay(1200);
  });

  $('#socials').click(function(){$('#social').fadeToggle("slide").delay(800);});
  $('#bhome').click(function () {
      $('#pages').attr('src', 'blog.html');
  });
  $('#stats').click(function () {
      $('#pages').attr('src', 'blog2.html');
  });



});
