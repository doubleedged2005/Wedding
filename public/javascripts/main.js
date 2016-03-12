/**
 * Created by Briana on 3/11/16.
 */
$(document).ready(function(){


    function animateInfo(divClass, infoID){
        $(infoID).stop().removeClass('hidden').animate({height: "100%"}).css({color: "white"});
        $(divClass).mouseleave(function(){
            $(infoID).stop().animate({height: "0px"}).css({color: "rgba(0,0,0,0)"}).addClass('hidden');
        })
    }

    $('.jackStack').hover(function(){
        animateInfo('.jackStack','#jackStack');
    })

    $('.kcJoes').hover(function(){
        animateInfo('.kcJoes', '#kcJoes');
    })

    $('.kinLin').hover(function(){
        animateInfo('.kinLin','#kinLin');
    })

    $('.classicCup').hover(function(){
        animateInfo('.classicCup', '#classicCup');
    })

    $('.nelson').hover(function(){
        animateInfo('.nelson','#nelson');
    })

    $('.plaza').hover(function(){
        animateInfo('.plaza', '#plaza');
    })

    $('.loose').hover(function(){
        animateInfo('.loose','#loose');
    })

    $('.wwi').hover(function(){
        animateInfo('.wwi', '#wwi');
    })

    $('.kemper').hover(function(){
        animateInfo('.kemper','#kemper');
    })

    $('.gardens').hover(function(){
        animateInfo('.gardens', '#gardens');
    })
})