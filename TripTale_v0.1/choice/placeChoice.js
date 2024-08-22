let selectedMainOption = ''; // 선택된 옵션 저장

// 옵션 선택 시 호출되는 함수
function selectOption(option) {
  // 모든 옵션에서 'selected' 클래스 제거
  const options = document.querySelectorAll('#option-container-1 .option');
  options.forEach(opt => opt.classList.remove('selected'));

  // 선택된 옵션에 'selected' 클래스 추가
  option.classList.add('selected');
  
  // 선택된 옵션 저장
  selectedMainOption = option.getAttribute('data-option');
  
  // '다음' 버튼 활성화
  document.getElementById('nextBtn').disabled = false;
}

// '다음' 버튼 클릭 시 tagChoice.html로 이동, 선택된 옵션을 URL 파라미터로 전달
document.getElementById('nextBtn').addEventListener('click', function() {
  if (selectedMainOption) {
    window.location.href = `tagChoice.html?type=${selectedMainOption}`;
  }
});

// 각 옵션 클릭 시 selectOption 함수 호출
document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', function() {
    selectOption(option);
  });
});
