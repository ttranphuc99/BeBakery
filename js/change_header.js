var disabledClick = false;
var firstTime = true;

function autoplay() {
    if (firstTime === true) {
        
        change();
    }
}

$(document).ready(function() {
    setTimeout(function(){
            $(".brand").animate({
                top: '110px',
                opacity: '1'
            }, {
                duration: 500,
                //            queue: true,
                complete: function() {
                    $("#slogan1").animate({
                        top: '353px',
                        opacity: '1'
                    }, {
                        duration: 500,
                        //                    queue: true,
                        complete: function() {
                            $(".shadow").animate({
                                opacity: '1'
                            }, {
                                duration: 500,
                                //                            queue: true
                            })
                        }
                    })
                }
            })}, 250);
    setTimeout(function() {autoplay();}, 6000);
});

function change() {
    firstTime = false;
    if (disabledClick === true) return;
    disabledClick = true;
    if (
        $(".header_img").css("background-image") ===
        'url("http://betheme.muffingroupsc.netdna-cdn.com/be/baker/wp-content/uploads/2014/11/home_bakery_header_pattern.png"), url("http://betheme.muffingroupsc.netdna-cdn.com/be/baker/wp-content/uploads/2014/11/home_bakery_slide_bg1.jpg")'
    ) {
        //            From 1st to 2nd layout

        //            fadeOutClass1;


        $("#slogan1").animate({
            top: '400px',
            opacity: '0'
        }, {
            duration: 500,
            //            queue: false
        });

        $(".brand").animate({
            top: '150px',
            opacity: '0'
        }, {
            duration: 500,
            //            queue: false
        });

        $(".shadow").animate({
            opacity: '0'
        }, {
            duration: 500,
            //            queue: false,
            complete: function() {
                $(".header_img").css("background", 
                                     "url(http://betheme.muffingroupsc.netdna-cdn.com/be/baker/wp-content/uploads/2014/11/home_bakery_header_pattern.png) repeat-x top, url(http://betheme.muffingroupsc.netdna-cdn.com/be/baker/wp-content/uploads/2014/11/home_bakery_slide_bg2.jpg) no-repeat");
            }
        });

        setTimeout(function() {
            $(".brand").animate({
                top: '110px',
                opacity: '1'
            }, {
                duration: 500,
                //            queue: true,
                complete: function() {
                    $("#slogan2").animate({
                        top: '-784px',
                        opacity: '1'
                    }, {
                        duration: 500,
                        //                    queue: true,
                        complete: function() {
                            $(".shadow").animate({
                                opacity: '1'
                            }, {
                                duration: 500,
                                //                            queue: true
                            })
                        }
                    })
                }
            })}, 1000);

    } else {
        //            From 2nd to 1st layout

        //            fadeOutClass2;
        $("#slogan2").animate({
            top: '-730px',
            opacity: '0'
        }, {
            duration: 500,
            //            queue: false
        });

        $(".brand").animate({
            top: '150px',
            opacity: '0'
        }, {
            duration: 500,
            //            queue: false
        });

        $(".shadow").animate({
            opacity: '0'
        }, {
            duration: 500,
            //            queue: false,
            complete: function() {
                $(".header_img").css("background", 
                                     "url(http://betheme.muffingroupsc.netdna-cdn.com/be/baker/wp-content/uploads/2014/11/home_bakery_header_pattern.png) repeat-x top, url(http://betheme.muffingroupsc.netdna-cdn.com/be/baker/wp-content/uploads/2014/11/home_bakery_slide_bg1.jpg) no-repeat");
            }
        });

        setTimeout(function(){
            $(".brand").animate({
                top: '110px',
                opacity: '1'
            }, {
                duration: 500,
                //            queue: true,
                complete: function() {
                    $("#slogan1").animate({
                        top: '353px',
                        opacity: '1'
                    }, {
                        duration: 500,
                        //                    queue: true,
                        complete: function() {
                            $(".shadow").animate({
                                opacity: '1'
                            }, {
                                duration: 500,
                                //                            queue: true
                            })
                        }
                    })
                }
            })}, 1000);
    };
    setTimeout(function() {
        disabledClick = false;
    },3000);
    
    setTimeout(function() {
        change();
    }, 6000);
};

