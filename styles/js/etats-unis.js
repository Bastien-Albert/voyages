function existMenu($parent){
    $parent.find('.select-content').animate({
        opacity: 0,
    }, 100).queue(function (next) {
        $(this).closest('.block-item-cat-list').removeClass('menu-active');
        next();
    });
}
$(document).ready(function() {
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

    $('.name').click(function() {
        $data = $(this).data("id");
        $parent = $(this).closest('.list-item');
        $id = $parent.attr("id").replace('name-', '');
        $("#" + $id).removeClass("is-select");
        $parent.attr("id", "name-" + $data);
        $(this).addClass("is-select");
        $parent = $('body');
        $parent.find('.block-cat').css('opacity', 0);
        $output = "";
        $.each(voyages, function(arrayKey, array) {
            $.each(array[$data], function(key, value) {
                $.each(value, function(i, value1) {
                    $output += htmlRender(value1[0]);
                });
            });
        });
        $parent.find('.block-cat').animate({
            opacity: 1,
        }, 300).html($output);
    });
});