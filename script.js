$(function() {
  $('#change-text').click(function() {
    $('#text').text('ファイル感染型ウイルス,ワーム型ウイルス,トロイの木馬');
    });

    $('#language-wrapper').hover(
     function() {
       $('.language-text').fadeIn();
     },
     function() {
       $('.language-text').fadeOut();
     }
   );
   $('#top-btn').click(function(){
  
     $('html, body').animate({
       'scrollTop': 0
     }, 500);
   });

  $('#login-show').click(function() {
    $('#login-modal').fadeIn();
  });

  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('.close-modal').click(function() {
    $('#login-modal').fadeOut();
    $('#signup-modal').fadeOut();
  });

  $('.lesson-hover').hover(
    function() {
      $(this).find('.text-contents').addClass('text-active');
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
  );

});
