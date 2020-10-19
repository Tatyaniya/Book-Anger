$( function() {

    $('#humburger-header').click(function(){
        $( ".navigation__nav" ).toggleClass("navigation__nav-open");
    });

    $('#humburger-footer').click(function(){
        $( ".footer__nav" ).toggleClass("footer__nav-open");
    });

    
    // click on the button "Read more" on the page "Home"
    $('.aboutContent__link').click(function(){
        $( ".aboutContent__desc" ).toggleClass("full-height");
        if($(".aboutContent__desc").hasClass("full-height")) {
            $(".aboutContent__more").text('Hide');
        } else {
            $(".aboutContent__more").text('Read more');
        }
    });

    // click on the button "Read more" on the page "About company"
    $('.aboutCompany__link').click(function(){
        $( ".aboutCompany__desc" ).toggleClass("full-height");
        if($(".aboutCompany__desc").hasClass("full-height")) {
            $(".aboutCompany__more").text('Hide');
        } else {
            $(".aboutCompany__more").text('Read more');
        }
    });    
});
