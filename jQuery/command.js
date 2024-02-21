$(function(){
    // 메뉴

    $(".main>li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    },function(){
        $(".sub").stop().slideUp();
    })


    // fade 이미지
    
    $(".fade li").eq(0).siblings().hide();

    var n = 0; // 0  1   2 

    setInterval(function(){
        
        // $(".fade li").eq(n).fadeOut();

        if(n == 2){
            n=0;
        }else{
            n++;
        }

        $(".fade li").eq(n).siblings().fadeOut();
        $(".fade li").eq(n).fadeIn();

    }, 3000)



    // tab
        $(".tab h2").click(function(){
            $(".tab h2").removeClass("on");
            $(this).addClass("on");
            $(".tab ul").removeClass("act");
            $(this).next().addClass("act");
        })



    // 팝업

    $(".p_click").click(function(){
        $(".popup").show();
    })//
    $(".close").click(function(){
        $(".popup").hide();
    })//


})//jquery