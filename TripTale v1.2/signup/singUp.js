document.getElementById('signUpform').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 제출 동작 방지

    // 입력된 값 가져오기
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // 입력값 검증
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        alert('모든 필드를 채워주세요.');
        return;
    }

    if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    // 검증이 성공적이면 로그인 페이지로 이동
    window.location.href = '../login/login.html';
});