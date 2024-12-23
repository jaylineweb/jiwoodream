(function ($) {

    'use strict';

    $(function () {
        $('.gnb_item > .gnb_link').on('mouseover focusin', function() {
            $(this).siblings('.depth2').addClass('active');
        });
        $('.depth_2_link').on('focusout', function() {
            // 현재 포커스를 벗어난 요소가 속한 depth2 내부에서 마지막 요소인지 확인
            const $depth2 = $(this).closest('.depth2');
            const $lastLink = $depth2.find('.depth_2_link').last();
        
            if ($(this).is($lastLink)) {
                // 마지막 링크에서 포커스가 벗어나면 depth2의 active 클래스 제거
                $depth2.removeClass('active');
            }
        });
    
        $('.gnb_item').on('mouseleave', function() {
            $(this).find('.depth2').removeClass('active');
        });
        // slide_list를 slick으로 초기화
        $('.slide_list').slick({
            infinite:true,
            autoplay:true,
            speed:2000,
            autoplaySpeed:2000,
            fade:true,
            arrows:false,
            dots:false,
            speed:500,
        });

       
        $('.slide_controls_btn').on('click', function (e) {
            e.preventDefault();
            var index = $(this).parent().index();
            $('.slide_list').slick('slickGoTo', index);
            
            $(this).addClass('active').parent().siblings().find('a').removeClass('active');
        });
    });


    $(window).on('load', function (event) {
        $(window).on('screen:resize', function (event) {

        }).triggerHandler('screen:resize');
    });
})(jQuery);