$(document).foundation();
$('a[href^="#"]').click(function(){var t=$(this).attr("href");
    return $("html, body").animate({scrollTop:$(t).offset().top},1250),!1})

$(window).scroll(function(){
    if($(window).scrollTop()>300){
        $('.go-top').css('display', 'flex');
    } else {
        $('.go-top').css('display', 'none');
    }
})


$('.carousel-main').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    navText: ["<i class='icon icon-left'></i>","<i class='icon icon-right'></i>"],
    responsive:{
        0:{
           nav:false, 
        },
        1024:{
            nav:false,
        },
        1600:{
            nav:true
        }
    }
});

$('.carousel-project').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    navText: ["<i class='icon icon-left'></i>","<i class='icon icon-right'></i>"],
    nav:true
});

$('.carousel-popular').owlCarousel({
    loop:false,
    margin: 0,
    stagePadding: 0,
    dots: false,
   	nav:true,
    navText: ["<i class='icon icon-prev'></i>","<i class='icon icon-next'></i>"],
    responsive:{
        0:{
          
           items:1,
        },
        640:{
        	items:2
        },
        1024:{
        	items:4,
        }
    }
});

$('.carousel-card').owlCarousel({
    loop:true,
    margin:0,
    items:1,
    nav:false,
    dots: false,
    URLhashListener:true,
});

$('.carousel-card-mini').owlCarousel({
    loop:false,
    margin:15,
    items:3,
    nav:false,
    dots: false,
});

$('.catalog-menu').click(function() {
    $('.catalog-menu-area').toggleClass('open');
    var img = $('.catalog-menu-img').attr('src');
        src = img.slice(-5);

    switch (src) {
        case '1.png':
            $('.catalog-menu-img').attr('src','img/png/menu-2.png');
        break;
        case '2.png':
            $('.catalog-menu-img').attr('src','img/png/menu-3.png');
        break;
        case '3.png':
            $('.catalog-menu-img').attr('src','img/png/menu-1.png');
        break;
        default:
            $('.catalog-menu-img').attr('src','img/png/menu-1.png');
    }
});

$('.catalog-menu-close').click(function() {
    $('.catalog-menu-area').toggleClass('open');
    $('.catalog-menu-img').toggleClass('open');
});

$('.about-menu').click(function() {
    $('.about-menu-area').toggleClass('open');
    var img = $('.about-menu-img').attr('src');
        src = img.slice(-5);

    switch (src) {
        case '1.png':
            $('.about-menu-img').attr('src','img/png/menu-2.png');
        break;
        case '2.png':
            $('.about-menu-img').attr('src','img/png/menu-3.png');
        break;
        case '3.png':
            $('.about-menu-img').attr('src','img/png/menu-1.png');
        break;
        default:
            $('.about-menu-img').attr('src','img/png/menu-1.png');
    }
});

$('.about-menu-close').click(function() {
    $('.about-menu-area').toggleClass('open');
    $('.about-menu-img').toggleClass('open');
});

if ($(window).width() < '640'){
   $('.carousel-instagram').owlCarousel({
        loop:false,
        margin: 0,
        stagePadding: 0,
        dots: false,
        nav:false,
        items: 1,
        center: true,
        stagePadding: 50,
        margin: 15
    });

    $('.catalog-menu').click(function() {
      $(this).children('.catalog-menu-burder').toggleClass('close');
      $('.catalog-menu-area').slideToggle('fast');
    });

    $('.about-menu').click(function() {
        $(this).children('.about-menu-burder').toggleClass('close');
      $('.about-menu-area').slideToggle('fast');
    });

    $('.menu-burger').click(function() {
        $('.header-mobile').slideToggle('fast');
    });
}


$('.brochures-header').click(function(event) {
    $(this).next('.brochures-body').slideToggle('fast')
});

$('.phones-btn, .catalog-card-btn .btn').click(function(event) {
   $('.modal').addClass('active');
   $('.modal .modal-block').addClass('active');
});

$('.modal-close').click(function() {
    $(this).parent('.modal-block').removeClass('active');
    $(this).parents('.modal').removeClass('active');
});



if ($('#map').length > 0) {
 $(document).ready(function() {
    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark([55.661574, 37.573856], {
            balloonContent: 'Это красивая метка'
        },{
            iconLayout: 'default#image',
            iconImageHref: 'img/png/placeholder.png',
            iconImageSize: [45, 57],
            iconImageOffset: [-22.5, -57]
        });


    myMap.geoObjects
        .add(myPlacemark)
    });
});   
}

var wrapper = $( ".form-upload" ),
    inp = wrapper.find( "input" ),
    btn = wrapper.find( "button" ),
    lbl = wrapper.find( "div" );
lbl.focus(function(){
    inp.focus()
});
// Crutches for the :focus style:
inp.focus(function(){
    wrapper.addClass( "focus" );
}).blur(function(){
    wrapper.removeClass( "focus" );
});

var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

inp.change(function(){
    var file_name;
    if( file_api && inp[ 0 ].files[ 0 ] )
        file_name = inp[ 0 ].files[ 0 ].name;
    else
        file_name = inp.val().replace( "C:\\fakepath\\", '' );

    if( ! file_name.length )
        return;

    if( lbl.is( ":visible" ) ){
        lbl.text( file_name );
    }else
        lbl.text( file_name );
}).change();

$( window ).resize(function(){
    $( ".form-upload input" ).triggerHandler( "change" );
});