let selectedOptions = []; // 선택된 옵션 저장

// URL에서 선택한 명소/로컬 값 가져오기
const urlParams = new URLSearchParams(window.location.search);
const selectedMainOption = urlParams.get('type');

// 선택한 명소/로컬 값 표시
document.getElementById('selected-type').textContent = selectedMainOption === '명소' ? '명소를 선택하셨습니다' : '로컬을 선택하셨습니다';

// 하위 옵션 동적 생성
function generateSubOptions() {
  const gridContainer = document.getElementById('gridContainer');
  
  const options = ['음식', '디저트', '쇼핑', '역사', '체험', '자연']; // 명소와 로컬 모두 동일한 옵션 제공

  options.forEach(optionText => {
    const div = document.createElement('div');
    div.classList.add('option');
    div.setAttribute('tabindex', '0');
    div.setAttribute('data-option', optionText);
    div.innerHTML = `<h3>${optionText}</h3>`;
    
    div.addEventListener('click', function() {
      selectOption(div);
    });

    gridContainer.appendChild(div);
  });
}

// 각 옵션 클릭 시 실행되는 함수
function selectOption(option) {
  const optionValue = option.getAttribute('data-option');

  // 이미 선택된 항목을 클릭한 경우 선택 해제
  if (selectedOptions.includes(optionValue)) {
    selectedOptions = selectedOptions.filter(opt => opt !== optionValue); // 선택 해제
    option.classList.remove('selected'); // 시각적 선택 해제
  } else if (selectedOptions.length < 3) {
    // 선택된 항목이 3개 미만일 경우에만 추가
    selectedOptions.push(optionValue);
    option.classList.add('selected'); // 시각적 선택 표시
  }

  // 선택된 갯수 업데이트
  document.getElementById('selected-count').textContent = selectedOptions.length;

  // 선택된 옵션이 있으면 '다음' 버튼 활성화, 없으면 비활성화
  document.getElementById('nextButton').disabled = selectedOptions.length === 0;
}

// '이전 페이지' 버튼 클릭 시 실행되는 함수
document.getElementById('prevButton').addEventListener('click', function() {
  // 이전 페이지로 이동
  window.history.back();
});

// '다음' 버튼 클릭 시 실행되는 함수
document.getElementById('nextButton').addEventListener('click', function() {
  alert('선택된 옵션: ' + selectedOptions.join(', '));
  // 이후의 로직을 추가 가능
});

// 초기화
generateSubOptions();
