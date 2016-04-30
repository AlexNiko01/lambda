;(function(){
    $('.menu-button').on('click', (function () {
        $('body').toggleClass('menu-active');
        $(this).toggleClass('menu-button--open');
    }));
    
})();
