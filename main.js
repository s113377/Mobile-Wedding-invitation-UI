$(function(){
    //버튼 이미지 주소값 
    $('.photoList a').click(function(){
        var imgSrc = $(this).find('img').attr('src');
      
     $('figure img').attr('src', imgSrc);
     return false; // 기본이벤트 해제
    })
});