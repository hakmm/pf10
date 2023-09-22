$(document).ready(function() {
    $("#product .container > div:nth-of-type(2)").append("<a href=''><span>BRAND STORY</span></a>");

    $('.toggle-menu').click (function(){
        $(this).toggleClass('active');
        $('#menu').toggleClass('open');
    });

    $("header form input").clone().appendTo("#menu .main-nav");

    $("#menu .main-nav input").wrap("<div><form></form></div>");

    $("#menu .main-nav form input").after("<button></button>");

    $("#menu .main-nav > div").after("<ul></ul>");
    // $("#menu .main-nav").contents().wrapAll("<ul></ul>");

    $("header .top-menu > li").clone().appendTo("#menu .main-nav ul");

    $(".messenger").clone().appendTo("#menu");

    $(".infor").clone().appendTo("#menu");

    var a=0;
    var n;
    var n2;
    $(".main-nav > ul > li").mouseenter(function(){
        n=$(this).index()+1;
    });

    $(".main-nav ul > li > a").click(function(){
        $("#menu .main-nav > ul > li > div").remove();
        var clone = $(".sub > div:nth-child("+n+")").clone();
        var appendTo = clone.appendTo("#menu .main-nav ul li:nth-child("+n+")");
        appendTo.slideToggle();
        if(a==0) {
            a=1;
            n2=n;
        } else {
            if(n==n2) {
                $(this).parents("li").find("div").css("display","none");
                a=0;
            } else {
                n2=n;
            }
        }
        $(this).parents("li").siblings().find("div").slideUp();
    });

});