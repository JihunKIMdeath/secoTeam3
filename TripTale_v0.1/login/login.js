// form 요소를 가져와 이벤트 리스너 추가
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼의 기본 제출 동작을 방지

    // 사용자 입력값을 가져오기
    const id = document.querySelector('input[name="id"]').value;
    const pw = document.querySelector('input[name="pw"]').value;

    // 입력값 확인 (간단한 유효성 검사)
    if (id.trim() === '' || pw.trim() === '') {
        alert('아이디와 비밀번호를 입력해주세요.');
        return;
    }

    // 서버에 로그인 정보 전송 (Ajax)
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: id, pw: pw })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // 로그인 성공 시 대시보드로 리다이렉션
            window.location.href = '/dashboard';
        } else {
            // 로그인 실패 시 경고 메시지
            alert('로그인 실패: ' + data.message);
        }
    })
    .catch(error => {
        console.error('로그인 중 오류 발생:', error);
        alert('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
    });
});


document.getElementById('nextBtn').addEventListener('click', function() {
    if (selectedMainOption) {
      window.location.href = `tagChoice.html?type=${selectedMainOption}`;
    }
  });
