function createFallingApple() {
    const container = document.getElementById('falling-container');
    
    // 새로운 사과 이미지 요소 생성
    const apple = document.createElement('img');
    apple.src = 'apple.png'; // 사과 이미지 파일 경로
    apple.classList.add('apple');

    // 랜덤한 위치에서 떨어지도록 설정
    const randomLeft = Math.random() * (window.innerWidth - 80); // 사과 너비만큼 여백
    apple.style.left = `${randomLeft}px`;
    
    const randomSize = Math.floor(Math.random() * 280) + 90;
    apple.style.width = `${randomSize}px`;
    apple.style.height = 'auto'; // 비율 유지를 위해 height를 auto로 설정

    // 컨테이너에 사과 추가
    container.appendChild(apple);

    // 회전 각도를 랜덤하게 설정 (-360도 ~ 360도)
    const randomRotation = Math.floor(Math.random() * 720) - 360; 
    apple.style.transform = `rotate(${randomRotation}deg)`;

    // 사과 떨어지는 속도 (여기서 속도를 조정할 수 있습니다)
    const fallDuration = 1.5; // 사과가 떨어지는 시간 (초 단위)
    apple.style.transition = `top ${fallDuration}s linear`;

    // 사과를 아래로 떨어뜨리기
    setTimeout(() => {
        apple.style.top = `${window.innerHeight}px`;
    }, 50); // 약간의 지연 시간 후 떨어지기 시작

    // 사과가 화면 아래로 사라지면 삭제
    setTimeout(() => {
        apple.remove();
    }, fallDuration * 1000); // 떨어지는 시간에 맞춰 사과 삭제
}

// 일정 시간마다 새로운 사과 생성
setInterval(createFallingApple, 2000);
