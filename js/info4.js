//#content_left_info {
//    float: left;
//    margin-left: 8%;
//    width: 20%;
//}
//
//#content_right_info {
//    float: right;
//    margin-right: 10%;
//    width: 20%;
//}
//
//#info4_right_img {
//margin-left: 0;
//}

function info4_appear() {
    document.getElementById('content_left_info').style.marginLeft = "8%";
    document.getElementById('content_right_info').style.marginRight = "15%";
    
    document.getElementById('info4_right_img').style.marginLeft = "0";
    
    document.getElementById('content_left_info').style.opacity = "1";
    document.getElementById('content_right_info').style.opacity = "1";
    
    document.getElementById('info4_right_img').style.opacity = "1";
    document.getElementById('info4_left_img').style.opacity = "1";
}