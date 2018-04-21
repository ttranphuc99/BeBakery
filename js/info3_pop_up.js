jQuery(function($){
    $('.info3_img').click(function() {
//        get source of image
        var source = $(this).attr("src");
//        change to bigger source image
        source = source.replace('-300x300', '');
//        write html tag
        var appear_popup = "<div id='appear_popup_div' onclick = 'next()'></div>";
        
//        get index of image
        var index = source.substring(23, 24);
//        content index of image
        var p_content;
        
        switch (index) {
            case '1':
                p_content = '1/4';
                break;
            case '2':
                p_content = '2/4';
                break;
            case '3':
                p_content = '3/4';
                break;
            case '9':
                p_content = '4/4';
                break;
        }
        
//        image tag
        appear_popup = appear_popup.concat("<img id='appear_popup' src='"+source+"' onclick = 'next()'>");
//        icon tag
        appear_popup = appear_popup.concat("<i class='fa fa-close' id='close_icon' onclick='close_popup()'></i><i class='fa fa-caret-right' id='right_icon' onclick = 'next()'></i><i class='fa fa-caret-left' id='left_icon' onclick = 'previous()'> </i>");
        
//        p tag to show index of image
        appear_popup = appear_popup.concat("<p id='img_index'></p>");
        
//        add new div
        $('body').prepend(appear_popup);
//        add content for index of image
        $('#img_index').text(p_content);
    });
});

function close_popup() {
    $('#appear_popup').remove();
    $('#appear_popup_div').remove();
    $('#close_icon').remove();
    $('#right_icon').remove();
    $('#left_icon').remove();
    $('#img_index').remove();
}

function next() {
//    get source
    var source = $('#appear_popup').attr("src");
//    get index of present image
    var index_old = source.substring(23, 24);
    var index_new;
    
//    get index of new image
    switch (index_old) {
        case '1': 
            index_new = '2';
            break;
        case '2':
            index_new = '3';
            break;
        case '3':
            index_new = '9';
            break;
        default: index_new = '1';
    }
    
//    set information for index of image
    var p_content;
    switch (index_new) {
            case '1':
                p_content = '1/4';
                break;
            case '2':
                p_content = '2/4';
                break;
            case '3':
                p_content = '3/4';
                break;
            case '9':
                p_content = '4/4';
                break;
        }
    
//    change the source
    source = source.replace(index_old, index_new);
    $('#appear_popup').attr("src", source);
    $('#img_index').text(p_content);
}

function previous() {
//    get source
    var source = $('#appear_popup').attr("src");
//    get index of present image
    var index_old = source.substring(23, 24);
    var index_new;
    
//    get index of new image
    switch (index_old) {
        case '2': 
            index_new = '1';
            break;
        case '3':
            index_new = '2';
            break;
        case '9':
            index_new = '3';
            break;
        default: index_new = '9';
    }
    
//    set information for index of image
    var p_content;
    switch (index_new) {
            case '1':
                p_content = '1/4';
                break;
            case '2':
                p_content = '2/4';
                break;
            case '3':
                p_content = '3/4';
                break;
            case '9':
                p_content = '4/4';
                break;
        }
    
//    change the source    
    source = source.replace(index_old, index_new);
    $('#appear_popup').attr("src", source);
    $('#img_index').text(p_content);
}