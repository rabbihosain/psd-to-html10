jQuery(document).ready(function(){
    "use strict";
    
    // Slider 
    $('#slider-carousel').carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,

        scroll:{
            items:1,
            duration:500,
            pouseOnHover:true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        },
        pagination:{
            container:".sliderpager",
            pageAnchorBuilder:false
        }
    });

    // sticy navigation 
    $(window).scroll(function(){
        var top =$(window).scrollTop();

        if(top>=60){
            $("header").addClass('secondary');
        }
        else if($("header").hasClass('secondary')){
            $("header").removeClass('secondary');
        }
    });

    // slick responsive nav 
    $('#menu').slicknav({
        label:'',
    });

    // Portfolio Slider
    $('.portfolio-carousel').carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,
        prev:'#prev',
        next:'#next',
        scroll:{
            items:1,
            duration:500,
            pouseOnHover:true,
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:4
            },
            height:"variable"
        }
    });

    // Counter Up 
    $('.counter').counterUp({
        dalay:10,
        time:1000
    })

    // Smooth Scroll 
    






});