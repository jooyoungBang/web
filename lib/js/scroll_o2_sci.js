$(document).ready(function(){

    // Ŀ���� ��ũ�� �۵� ��ũ��Ʈ
    setScrollbarSize();
    $(".wrap_article").scroll(function () {
        
        //��ũ�� ��ġ
        var scrollbarHight = $(".con_table_wrap .scrollbar").height() - $(".con_table_wrap .scrollbar_face").height();
        var a = $(".wrap_article")[0].scrollTop;
        var b = $(".wrap_article")[0].scrollHeight - $(".wrap_article")[0].clientHeight;
        var c = a / b;
        $(".con_table_wrap .scrollbar_face").css({ top: scrollbarHight * c });
    });
    //--------------------------------------------------------//
    //--------------------------------------------------------//

});

function setScrollbarSize() {
    if ($(".wrap_article")[0].scrollHeight - $(".wrap_article")[0].clientHeight <= 0) $(".con_table_wrap .scrollbar").hide();
    else $(".con_table_wrap .scrollbar_face").css({ height: 100 - ($(".wrap_article")[0].scrollHeight / $(".wrap_article")[0].clientHeight * 40) + "%" });
}


