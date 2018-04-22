var disabledClick = false;
var firstTime = true;

var background_image = [$(".header_img").css("background-image") , ''];

background_image[1] = background_image[0].replace('bg1', 'bg2');

var background = ['' , ''];

background[0] = background_image[0].replace('home_bakery_header_pattern.png")', 'home_bakery_header_pattern.png") repeat-x top');

background[1] = background[0].replace('bg1', 'bg2');


var slogan = ["#slogan1" , "#slogan2"];

function autoplay() {
    if (firstTime == true) {
        
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
    if (disabledClick == true) return;
    disabledClick = true;
    if (
        $(".header_img").css("background-image") == background_image[0]) {
        //            From 1st to 2nd layout
        //            fadeOutClass1;        
        $(slogan[0]).animate({
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
                $(".header_img").css("background", background[1]);
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
                    $(slogan[1]).animate({
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
        $(slogan[1]).animate({
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
                $(".header_img").css("background", background[0]);
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

