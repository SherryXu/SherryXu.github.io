
$(document).ready(function() {


    var sticky_navigation_offset_top = $('#Navagation_Menu').offset().top;

    var sticky_navigation = function(){
    var scroll_top = $(window).scrollTop();


        if (scroll_top > sticky_navigation_offset_top) {
            $('#Navagation_Menu').css({ 'position': 'fixed', 'top':0, 'left':0 });
        } else {
          $('#Navagation_Menu').css({ 'position': 'relative'});
        }
    };




  sticky_navigation();

    $(window).scroll(function() {
         sticky_navigation();
    });

});

