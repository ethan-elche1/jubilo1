$(function(){

    $(window).on('scroll',function(){
        findPositioAndStartAnimation1();
        findPositioAndStartAnimation2();
        findPositioAndStartAnimation3();
        findPositioAndStartAnimation4();
        findPositioAndStartAnimation5();
    });

    function findPositioAndStartAnimation1(){
        var section1 = document.getElementsByClassName("story1");
        $('.story1').each(function(){
            if( ($(this).offset().top - $(window).scrollTop() ) < 600){
                $(section1).css("animation-name","fadeIn");
                $(section1).css("animation-duration","1.5s");
                $(section1).css("animation-iteration-count","1");
                $(section1).css("animation-timing-function","ease-in");
                $(section1).css("animation-fill-mode","both");
            }
        });
    }

    function findPositioAndStartAnimation2(){
        var section2 = document.getElementsByClassName("story2");
        $('.story2').each(function(){
            if( ($(this).offset().top - $(window).scrollTop() ) < 600){
                $(section2).css("animation-name","fadeIn");
                $(section2).css("animation-duration","1.5s");
                $(section2).css("animation-iteration-count","1");
                $(section2).css("animation-timing-function","ease-in");
                $(section2).css("animation-fill-mode","both");
            }
        });
    }

    function findPositioAndStartAnimation3(){
        var section3 = document.getElementsByClassName("story3");
        $('.story3').each(function(){
            if( ($(this).offset().top - $(window).scrollTop() ) < 600){
                $(section3).css("animation-name","fadeIn");
                $(section3).css("animation-duration","1.5s");
                $(section3).css("animation-iteration-count","1");
                $(section3).css("animation-timing-function","ease-in");
                $(section3).css("animation-fill-mode","both");
            }
        });
    }

    function findPositioAndStartAnimation4(){
        var section4 = document.getElementsByClassName("story4");
        $('.story4').each(function(){
            if( ($(this).offset().top - $(window).scrollTop() ) < 600){
                $(section4).css("animation-name","fadeIn");
                $(section4).css("animation-duration","1.5s");
                $(section4).css("animation-iteration-count","1");
                $(section4).css("animation-timing-function","ease-in");
                $(section4).css("animation-fill-mode","both");
            }
        });
    }

    function findPositioAndStartAnimation5(){
        var section5 = document.getElementsByClassName("branch");
        $('.branch').each(function(){
            if( ($(this).offset().top - $(window).scrollTop() ) < 600){
                $(section5).css("animation-name","fadeIn");
                $(section5).css("animation-duration","1.5s");
                $(section5).css("animation-iteration-count","1");
                $(section5).css("animation-timing-function","ease-in");
                $(section5).css("animation-fill-mode","both");
            }
        });
    }




    findPositioAndStartAnimation1();
    findPositioAndStartAnimation2();
    findPositioAndStartAnimation3();
    findPositioAndStartAnimation4();
    findPositioAndStartAnimation5();
});


