$(function(){
    wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       150,          // default
        mobile:       true,       // default
        live:         true        // default
      }
      )
      wow.init();

      $('.header__menu-btn').on('click', function(){
        $('.header__menu ul').slideToggle();
      });
});
