$(function(){
            
    var category = $('#gnb > li > a');

    category.click(function(e){
        e.preventDefault(); /*페이지 안넘어가게 하는것 return false말고.*/
        var isVisible = $(this).next().is(':visible');
        if(isVisible){
            // 서브메뉴가 보여짐 -> 닫기
            $(this).next().slideUp(400); // hide도 된다 
        }else{
            // 서브메뉴가 안보임 -> 열기 
            $(this).next().slideDown(400); // show도 된다
        }
    });
});