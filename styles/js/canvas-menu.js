function closeMenu($this){
    $parent = $this.closest('body');
    setTimeout(function(){
        $('.CanvasMenu').removeClass('active')
    },740);
    $parent.find('.menu-nav-left').animate({opacity:0}).delay(400).queue(function (next) {
        $(this).css('display', 'none');
        next();
    });
    $parent.find('.menu-nav-right').animate({left: -$parent.find('.menu-nav-left').width()}, 700).queue(function (next) {
        $(this).css('display', 'none');
        next();
    });
}
function existMenuDeroulant($parent){
    $parent.find('.menu-deroulant').animate({
        opacity: 0,
    }, 100).queue(function (next) {
        $(this).removeClass('menu-active-deroulant');
        next();
    });
}
$(document).ready(function() {
    $('.cat-nav-menu').click(function() {
        $id = $(this).data('type-menu');
        if($id === "Continent")
        {
            existMenuDeroulant($('#prenom-nav-menu'));
        }
        if($id === "Prenom")
        {
            existMenuDeroulant($('#continent-nav-menu'));
        }
        if($(this).find('.menu-deroulant').hasClass('menu-active-deroulant'))
        {
            existMenuDeroulant($(this));
        }
        else
        {
            $(this).find('.menu-deroulant').addClass('menu-active-deroulant').animate({
                opacity: 1,
            }, 100);
        }
    });
    $('body').click(function(e) {
        $div = $(this).find('.cat-nav-menu');
        $toggel = $(this).find('.toggle-menu-deroulant');
        if((!$(e.target).is($div) && !$.contains($div[0],e.target)) && (!$(e.target).is($toggel) && !$.contains($toggel[0],e.target)))
        {
            existMenuDeroulant($div);
        }
    });
    $('.hamburger-menu').click(function () {
        $parent = $(this).closest('body');
        $parent.find('.CanvasMenu').addClass('active');
        $parent.find('.menu-nav-left').css('display', 'block').animate({opacity:1});
        $parent.find('.menu-nav-right').css('display', 'block').animate({left: '0'}, 600);
    });
    $('.menu-nav-left').click(function () {
        closeMenu($(this));
    });
    $('.CanvasMenu-close').click(function () {
        closeMenu($(this));
    });
    $('.CanvasMenu-open').click(function(){
        $parent = $(this).closest('.CanvasMenu-cat');
        if($parent.hasClass('active')){
            $parent.removeClass('active');
            $parent.find('.CanvasMenu-all-item').stop(true,true).slideUp();
        }else{
            $parent.addClass('active');
            $parent.find('.CanvasMenu-all-item').stop(true,true).slideDown();
        }
    });
    $('.CanvasMenu-open-child').click(function(){
        $parent = $(this).closest('.CanvasMenu-child');
        if($parent.hasClass('active')){
            $parent.removeClass('active');
            $parent.find('.CanvasMenu-child-all-item').stop(true,true).slideUp();
        }else{
            $parent.addClass('active');
            $parent.find('.CanvasMenu-child-all-item').stop(true,true).slideDown();
        }
    });
});