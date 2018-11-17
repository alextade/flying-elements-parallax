(function($) {

  $(document).ready(function() {

    var flyingItem1 = parseInt($('.flying-item:nth-of-type(1)').css("top"));
    var flyingItem2 = parseInt($('.flying-item:nth-of-type(2)').css("top"));
    var flyingItem3 = parseInt($('.flying-item:nth-of-type(3)').css("top"));

    $(window).scroll(function() {
  
      $('.flying-item:nth-of-type(1)').css('top', ( flyingItem1 + (($(window).scrollTop())/1.1)));
      $('.flying-item:nth-of-type(2)').css('top', ( flyingItem2 + (($(window).scrollTop())/1.4)));
      $('.flying-item:nth-of-type(3)').css('top', ( flyingItem3 + (($(window).scrollTop())/1.2)));

    });

  });
})(jQuery);
