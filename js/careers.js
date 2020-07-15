$(document).ready(function() {
  $('a.linkModalEng').click( function(event){
    event.preventDefault();
    $('#modalCustomerEng__overlay').fadeIn(297,	function(){
      $('#modalCustomerEng')
      .css('display', 'flex')
      .animate({opacity: 1}, 198);
    });
  });
  $('#modalCustomerEng__close, #overlay').click( function(){
    $('#modalCustomerEng').animate({opacity: 0}, 198,
    function(){
      $(this).css('display', 'none');
      $('#modalCustomerEng__overlay').fadeOut(297);
    });
  });
});


$(document).ready(function() {
  $('a.linkModalEngMalayChinese').click( function(event){
    event.preventDefault();
    $('#modalEngMalayChinese__overlay').fadeIn(297,	function(){
      $('#modalEngMalayChinese')
      .css('display', 'flex')
      .animate({opacity: 1}, 198);
    });
  });
  $('#modalEngMalayChinese__close, #modalEngMalayChinese__overlay').click( function(){
    $('#modalEngMalayChinese').animate({opacity: 0}, 198,
    function(){
      $(this).css('display', 'none');
      $('#modalEngMalayChinese__overlay').fadeOut(297);
    });
  });
});

$(document).ready(function() {
  $('a.linkModalEngViet').click( function(event){
    event.preventDefault();
    $('#modalEngViet__overlay').fadeIn(297,	function(){
      $('#modalEngViet')
      .css('display', 'flex')
      .animate({opacity: 1}, 198);
    });
  });
$('#modalEngViet__close, #modalEngViet__overlay').click( function(){
  $('#modalEngViet').animate({opacity: 0}, 198,
  function(){
      $(this).css('display', 'none');
      $('#modalEngViet__overlay').fadeOut(297);
    });
  });
});

$(document).ready(function() {
  $('a.linkModalEngThai').click( function(event){
    event.preventDefault();
    $('#modalEngThai__overlay').fadeIn(297,	function(){
      $('#modalEngThai')
      .css('display', 'flex')
      .animate({opacity: 1}, 198);
    });
  });
  $('#modalEngThai__close, #modalEngThai__overlay').click( function(){
    $('#modalEngThai').animate({opacity: 0}, 198,
    function(){
      $(this).css('display', 'none');
      $('#modalEngThai__overlay').fadeOut(297);
    });
  });
});

$(document).ready(function() {
  $('a.linkModalEngInd').click( function(event){
    event.preventDefault();
    $('#modalEngInd__overlay').fadeIn(297,	function(){
      $('#modalEngInd')
      .css('display', 'flex')
      .animate({opacity: 1}, 198);
    });
  });
  $('#modalEngInd__close, #modalEngInd__overlay').click( function(){
    $('#modalEngInd').animate({opacity: 0}, 198,
    function(){
      $(this).css('display', 'none');
      $('#modalEngInd__overlay').fadeOut(297);
    });
  });
});

$(document).ready(function() {
  $('a.linkModalMotionDes').click( function(event){
    event.preventDefault();
    $('#modalMotionDes__overlay').fadeIn(297,	function(){
      $('#modalMotionDes')
      .css('display', 'flex')
      .animate({opacity: 1}, 198);
    });
  });
  $('#modalMotionDes__close, #modalMotionDes__overlay').click( function(){
    $('#modalMotionDes').animate({opacity: 0}, 198,
    function(){
      $(this).css('display', 'none');
      $('#modalMotionDes__overlay').fadeOut(297);
    });
  });
});

$(document).ready(function() {
  $('a.linkModalBusDev').click( function(event){
    event.preventDefault();
    $('#modalBusDev__overlay').fadeIn(297,	function(){
      $('#modalBusDev')
      .css('display', 'flex')
      .animate({opacity: 1}, 198);
    });
  });
  $('#modalBusDev__close, #modalBusDev__overlay').click( function(){
    $('#modalBusDev').animate({opacity: 0}, 198,
    function(){
      $(this).css('display', 'none');
      $('#modalBusDev__overlay').fadeOut(297);
    });
  });
});
