function LoadingWithMask(gif) {
    //화면의 높이와 너비를 구합니다.
    var maskHeight = $(document).height();
    var maskWidth  = window.document.body.clientWidth;
    var body = document.querySelector('body')

    //화면에 출력할 마스크를 설정해줍니다.
    let mask = `<div id='mask' style='position: fixed; z-index:1; background-color:#000000;
                left:0; top:0; width: 100%; height: 100%; opacity: 0.2;'></div>`
    var loadingImg = '';

    loadingImg += `<div id='loadingImg'>
                    <img src='./src/img/LoadingImg.svg' style='position: fixed; z-index:2; top: 50%; left: 50%; transform: translate(-50%, -50%);'/>
                </div>`
    //화면에 레이어 추가
    $('body')
        .append(mask)
        .append(loadingImg)
    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채웁니다.
    $('#mask').css({
            'width' : maskWidth,
            'height': maskHeight,
            'opacity' : '0.2'
    }); 

    //마스크 표시
    $('#mask').show();

    //로딩중 이미지 표시
    $('#loadingImg').show();
}

function closeLoadingWithMask() {
    $('#mask, #loadingImg').hide();
    $('#mask, #loadingImg').empty();  
}