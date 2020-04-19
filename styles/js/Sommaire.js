function existMenu($parent){
    $parent.find('.select-content').animate({
        opacity: 0,
    }, 100).queue(function (next) {
        $(this).closest('.block-item-cat-list').removeClass('menu-active');
        next();
    });
}
$(document).ready(function() {
    $("a[href*='#']:not([href='#'])").click(function() {
        if (
            location.hostname === this.hostname
            && this.pathname.replace(/^\//,"") === location.pathname.replace(/^\//,"")
        ) {
            $hash = $(this.hash);
            $hash = $hash.length ? $hash : $("[name=" + this.hash.slice(1) +"]");
            if ( $hash.length ) {
                $("html, body").animate( { scrollTop: $hash.offset().top }, 1000);
            }
        }
    });
    $('.select-title span').click(function() {
        $parent = $(this).closest('.block-item-cat-list');
        $type = $parent.data("type");
        if($parent.hasClass('menu-active'))
        {
            existMenu($parent);
        }
        else
        {
            $parent.addClass('menu-active').find('.select-content').animate({
                opacity: 1,
            }, 100);
        }
    });
    $('.name-chose').click(function(){
        $parent = $(this).closest('.block-chose');
        if($parent.hasClass('active')){
            $parent.removeClass('active');
            $parent.find('.content-chose').stop(true,true).slideUp();
        }else{
            $parent.addClass('active');
            $parent.find('.content-chose').stop(true,true).slideDown();
        }
    });
    $('.js-click').click(function(){
        $id = $(this).data("id-chose");
        $parent = $("#" + $id);
        $parent.addClass('active');
        $parent.find('.content-chose').stop(true,true).slideDown();
    });
    $('body').click(function(e) {
        $div =  $(this).find('.select-continent');
        if(!$(e.target).is($div) && !$.contains($div[0],e.target))
        {
            existMenu($div);
        }
    });
});