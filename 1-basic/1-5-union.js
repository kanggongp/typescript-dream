{
    function move(direction) {
        console.log(direction);
    }
    ;
    move('down');
    var title = 16;
    // 로그인 성공시 특정 객체 리턴, 실패시 이유 메시지 출력
    function loginCheck(isLogin) {
        var response;
        if (isLogin) {
            response = {
                result: isLogin,
                message: 'login success',
            };
            return response;
        }
        else {
            response = {
                result: isLogin,
                message: 'login faliled',
            };
            return response;
        }
    }
    var result = loginCheck(true);
    console.log(result);
}
