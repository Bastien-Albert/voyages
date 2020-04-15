$(function ($) {
    'use strict';
    $.each(voyages, function(arrayKey, array) {
        $.each(array, function(key, value) {
            $.each(value, function(i, value1) {
                $.each(value1, function(b, valueVoyage) {
                    var voyage = valueVoyage[0];
                    $('.block-cat').prepend(htmlRender(voyage));
                });
            });
        });
    });
});
