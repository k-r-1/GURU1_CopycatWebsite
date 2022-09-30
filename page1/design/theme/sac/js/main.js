function setCookie( name, value, expirehours ) {
    var todayDate = new Date();
    todayDate.setHours( todayDate.getHours() + expirehours );
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}
function closeWin(id, checkbox) {
    if ( checkbox.checked ){
        setCookie(id, "done", 1);
    }
}

$(function(){
    ani1 = $(".main_quick .t, .main_quick .tit .txt")
    ani2 = $(".main_quick .icon")
    ani1.delay(1800).animate({top:"0",opacity:1},1000,'easeInQuad')
    ani2.delay(2500).animate({opacity:1},800)
    
    /*
    var $main = $('#main_visual .ms')
    $('#main_visual .ms').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          dots: true,
            autoplay: true,
            autoplaySpeed: 5000,
            prevArrow: $('#main_visual .prev'),
            nextArrow: $('#main_visual .next'),
            appendDots:'.thumb_w',
            customPaging: function (slider, i) {
           //var thumb = $(slider.$slides[i]).find('img.thumb').attr('src')
           //return '<a><img src="'+thumb+'" alt=""></a>';
               return '<a role="button" class="tab" href="#">' + $('.ms2 li:nth-child(' + (i + 1) + ')').html() + '</a>';
            },
              responsive: [
                {
                  breakpoint: 640,
                 slidesToShow: 3,
                  settings: {
                      fade:false,
                    dots: true,
              //centerMode: true,
                  }
                }
              ]
          //asNavFor: '.ms2'
    });
    */
        /*$('.ms2').slick({
          slidesToShow: 10,
          slidesToScroll: 1,
          asNavFor: '.ms',
          focusOnSelect: true,
            prevArrow: $('#main_visual .prev'),
            nextArrow: $('#main_visual .next'),
        });*/
    var $main = $('#main_visual .ms')
    $('#main_visual .ms').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $('#main_visual .prev'),
        nextArrow: $('#main_visual .next'),
        appendDots:'.thumb_w',
        customPaging: function (slider, i) {
            //var thumb = $(slider.$slides[i]).find('img.thumb').attr('src')
            //return '<a><img src="'+thumb+'" alt=""></a>';
            return '<a role="button" class="tab" href="#">' + $('.ms2 li:nth-child(' + (i + 1) + ')').html() + '</a>';
        },
        /*
        responsive: [
            {
            breakpoint: 640,
            slidesToShow: 1,
                settings: {
                    fade:true,
                    dots: true,
                    centerMode: true,
                }
            }
        ]
        */
        //asNavFor: '.ms2'
    });
    $(function() {
        $('.slick-dots').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            asNavFor: '#main_visual .ms',
            infinite: false,
            autoplay: true,
            autoplaySpeed: 3000,
            focusOnSelect: true,
            prevArrow: $('#main_visual .prev'),
            nextArrow: $('#main_visual .next'),
            /*
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        //arrows: true,
                        //centerMode: true,
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        //arrows: true,
                        //centerMode: true,
                        slidesToShow: 5
                    }
                },
            ]
            */
        });
        $('.slick-dots').show();
    });
    
    
    $("#main_visual .next").click(function(){
        $("#main_visual .stop").click();
        //alert("111")
    });
    
    
    /*
    $(".slick-dots li:first-child a").attr({"title":"�좏깮��"});

        $('#main_visual .ms').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
            if ($(".slick-dots li").hasClass("slick-active")){
                $(".slick-dots a").removeAttr( "title" )
                $(".slick-dots .slick-active a").attr({"title":"�좏깮��"})
            }else{
                $(".slick-dots a").removeAttr( "title" )
            }
    });
    */

        /*var size = "";
        $(window).resize(function(){
          var m_w = $(window).width();
          var q_w = $(".main_quick").outerWidth();
            $(".btn-quick").removeClass("close").addClass("open").find("span").text("Open")
            $(".main_quick").css("right",-280 + "px")
        }).resize();

        $(".btn-quick").click(function(){
            if($(this).hasClass('open')){
                $(".main_quick > dl > dt > ul > li").removeClass("on");
                $(".main_quick > dl > dd.quick-txt .box").removeClass("on");
                $(".quick-btn01").addClass("on");
                $(".main_quick > dl > dd.quick-txt .box:nth-child(1)").addClass("on");
                $(".main_quick").stop().animate({"right":0},300)
                $(".main_quick .icon").delay(150).stop().fadeIn(300)
              $(this).removeClass('open').addClass('close').find("span").text('Close');
              $('.quick-btn01').addClass('on');
            }else{
                $(".main_quick").stop().animate({"right": -280},300)
                $(".main_quick .icon").delay(150).stop().fadeOut(300)
              $(this).removeClass('close').addClass('open').find("span").text('Open');
                $('.quick-btn01').removeClass('on');
                $(".main_quick > dl > dt > ul > li").removeClass("on");
                $(".main_quick > dl > dd.quick-txt .box").removeClass("on");
            }
        })*/
        //2020-11-09
        $(".quick-txt-close").click(function(){
            $(".main_quick > dl > dd.quick-txt .box").removeClass("on");
            $(".main_quick > dl > dt > ul > li").removeClass("on");
        });
        //2020-11-09

    $('#main_visual .controls').click(function(e){
    if($(this).hasClass('stop')){
        $main.slick('slickPause');
        $(this).removeClass('stop').addClass('play').text('�ъ깮');
    }else{
        $main.slick('slickPlay');
        $(this).removeClass('play').addClass('stop').text('�뺤�');
    }
    });
    $('.m_social .controls').click(function(e){
    if($(this).hasClass('stop')){
        $m3.slick('slickPause');
        $(this).removeClass('stop').addClass('play').text('�ъ깮');
    }else{
        $m3.slick('slickPlay');
        $(this).removeClass('play').addClass('stop').text('�뺤�');
    }
    });



    $('.top .controls').click(function(e){
    if($(this).hasClass('stop')){
        $m4.slick('slickPause');
        $(this).removeClass('stop').addClass('play').text('�ъ깮');
    }else{
        $m4.slick('slickPlay');
        $(this).removeClass('play').addClass('stop').text('�뺤�');
    }
    });





})




$(document).ready(function(){
    $('.vertical-center').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 800,
      centerMode: true,
      centerPadding: '0',
      slidesToShow: 3,
      slidesToScroll: 1,
      slickPause: true,
      slickPlay: true,
      responsive: [
        {
          breakpoint: 1001,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '300px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 950,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '250px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 850,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '200px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 770,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '150px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '100px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 550,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '70px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 450,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 400,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1
          }
        }
      ],
      dots: true,
        dotsClass: 'custom_paging',
        customPaging: function (slider, i) {
            //console.log(slider);
            //return  "<span>" + "0" + (i + 1) + "</span>" + '/' + "<span>" + "0" + slider.slideCount + "</span>";
            return  "";
        }
    });
    var sltop = $(".main-floor2 .slick-slide.slick-center > div").height();
    $(".main-floor2 .slick-slide > div").height(sltop);
    $('.main-scon .banner-pic').bxSlider({
        auto: true,
        controls: true,
        autoControls: true,
        pager: true,
        autoReload: true,
        pause: 3000,
        infiniteLoop : true,
        mode: 'fade',
    });
    $('.main-pobup .banner-pic').bxSlider({
        auto: true,
        controls: true,
        autoControls: false,
        pager: false,
        autoReload: true,
        pause: 3000,
        infiniteLoop : true,
    });
    $('.slickPause').on('click', function() {
      $('.vertical-center').slick('slickPause');
    });
    $('.slickPlay').on('click', function() {
      $('.vertical-center').slick('slickPlay');
    });

    $(".main_quick dt li").click(function(){
        var indext = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".main_quick .quick-txt").find(".box").eq(indext).addClass("on").siblings().removeClass("on");
    });

    $(".mf2-tab ul > li").click(function(){
        var index = $(this).index();
        var inml = index*-100;
        $(this).addClass("on").siblings().removeClass("on");
        $(".mf2-con > div").animate({marginLeft:inml + "%"});
    });

    $(".mf-r > div > ul li").on("mouseover focus", function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
    $(".mf-l dt p").mouseover(function(){
        $(this).addClass("on").siblings().removeClass("on");
    });
    $(".mf-rt-r > .tab li").click(function(){
        var indext = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".mf-r-top > div.mf-rt-r > .text").find(".text-sub").eq(indext).addClass("on").siblings().removeClass("on");
    });


	/*focus*/
	$("#toTop").bind("click", function () {
		$("html, body").animate({ scrollTop: 0 }, 300);
	});
	$(".sitemap-btn").blur(function () { 
		document.getElementById("ups-icon-videoplay").click();
		document.getElementById("focusA").focus();
	});
	$(".swiper-button-prev").blur(function () { 
		$(".gallery-top-main .swiper-slide.swiper-slide-active .photo a").focus();
	});
	$("#focusT").blur(function () { 
		$(".slickPause").focus();
		$(".slickPause").click();
	});
	$("#focusU").blur(function () { 
		$(".banner-pic").focus();
		$(".bx-stop").click();
	});
	$(".main-scon .bx-controls-auto a.bx-stop").blur(function () { 
		$("#video-container").focus();
	});
	$("#all-menu").click(function(e){ 
		document.getElementById("dpFirst-focus").focus();
	});
	$("#dpLast-focus").blur(function(e){ 
		document.getElementById("menuClose-focus").focus();
	});
	$("#menuClose-focus").blur(function(e){ 
		$(".gnb").css('top', "-600px");
		$("#logo").focus();
	});
	$(".search-btn").click(function(e){ 
		document.getElementById("search-input").focus();
	});
	$(".search-close").blur(function(e){ 
		$("#header-search").css('top', "-1000px");
		$(".search-btn").focus();
	});



});
$(window).on("load resize", function(){
    var sltop = $(".main-floor2 .slick-slide.slick-center a img").height() + 5;
    $(".main-floor2 .slick-slide > div").height(sltop);
});

$(window).scroll(function(){
    var mbst ;
    if ($(".main-bg").length){
        $(".main-bg").offset().top
    }
    
    var mbsts = $(window).scrollTop();
    if(mbsts >= mbst){
        $(".main-pobup").addClass("on");    
    }else{
        $(".main-pobup").removeClass("on");
    }
});