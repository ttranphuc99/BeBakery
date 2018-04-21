jQuery(function($){
    $('.info3_img').click(function() {
        var source = $(this).attr("src");
        source = source.replace('-300x300', '');
        var appear_popup = "<div id='appear_popup_div' onclick = 'close_popup()'></div>";
        appear_popup = appear_popup.concat("<img id='appear_popup' src='"+source+"' >");
        appear_popup = appear_popup.concat("<i class='fa fa-close' id='close_icon' onclick='close_popup()'></i>");
        $('body').prepend(appear_popup);
    });
});

function close_popup() {
    $('#appear_popup').remove();
    $('#appear_popup_div').remove();
    $('#close_icon').remove();
}

function set_source() {
    
}