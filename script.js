document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const questionText = document.getElementById('question-text');
    const mainImage = document.getElementById('main-image');
    const bgMusic = document.getElementById('bg-music');
    const yesMusic = document.getElementById('yes-music');
    const noMusic1 = document.getElementById('no-music-1');
    const noMusic2 = document.getElementById('no-music-2');

    // Mảng các câu trả lời khi nhấp "Không"
    const noAnswers = [
        'Bạn chắc chứ?',
        'Thử nghĩ lại nha 😊',
        'Đừng mà, cho tớ hi vọng đi 💖',
        'Thật luôn đó hả?',
        'Tớ buồn đó nha 🥺',
        'Mốt làm bạn trai nha 🥺',
        'Nhưng tớ rất muốn được làm bạn trai của cậu mà!',
        'Đừng mà, một lần cuối thôi nha',
        'Cậu chắc chắn muốn chia tay ư?',
        'Nè, đừng làm tớ thất vọng mà',
        'Okay, tớ sẽ chấp nhận',
        'Vậy cậu có thể ôm tớ một cái được không?',
        'Tớ sẽ không quên cậu đâu',
        'Tớ sẽ luôn nhớ về cậu',
        'Tớ sẽ luôn yêu cậu, dù cậu không đồng ý',
        'Thôi, tớ đi đây, tớ sẽ không làm phiền cậu nữa',
        'Vậy thì hãy hứa với tớ rằng cậu sẽ hạnh phúc nhé!',
        'Đây là lần cuối cùng tớ hỏi, cậu chắc chắn muốn từ chối tớ không?'
    ];
    let noClickCount = 0;

    // Mảng các hình ảnh khi nhấp "Không"
    const noImages = [
        './assets/images/no-1.gif', 
        './assets/images/no-2.gif',
        './assets/images/no-3.gif',
        './assets/images/no-4.gif',
        './assets/images/no-5.gif',
        './assets/images/no-6.gif'
        // Thêm nhiều ảnh khác
    ];
    let imageIndex = 0;

    noBtn.addEventListener('click', () => {
        if (noClickCount < noAnswers.length) {
            questionText.textContent = noAnswers[noClickCount];
            
            // Cập nhật ảnh tương ứng
            imageIndex = (imageIndex + 1) % noImages.length;
            mainImage.src = noImages[imageIndex];
            
            noClickCount++;

            // Phát nhạc "không" ngẫu nhiên
            const randomNoMusic = Math.random() < 0.5 ? noMusic1 : noMusic2;
            randomNoMusic.play();
        } else {
            // Xử lý khi hết câu trả lời
            questionText.textContent = 'Một lần nữa nha, tớ chỉ muốn nghe "Có" thôi!';
            mainImage.src = './assets/images/final-no-image.gif'; // Ảnh cuối cùng
            
            // Tắt nhạc nền và phát nhạc "Không"
            bgMusic.pause();
            noMusic2.play();
        }

        // Thêm hiệu ứng di chuyển cho nút "Không"
        noBtn.classList.add(`no-response-${(noClickCount % 3) + 1}`);
        setTimeout(() => {
            noBtn.classList.remove(`no-response-${(noClickCount % 3) + 1}`);
        }, 300);
    });

    yesBtn.addEventListener('click', () => {
        questionText.innerHTML = 'Tớ biết mà! Tớ cũng thích cậu nhiều lắm <span class="heart">❤️</span>';
        mainImage.src = './assets/images/yes-image.gif'; // Ảnh khi đồng ý
        
        // Ẩn các nút
        document.getElementById('button-group').style.display = 'none';
        
        // Tạo hiệu ứng trái tim rơi xuống
        createFallingHearts();
        
        // Dừng nhạc nền và phát nhạc đồng ý
        bgMusic.pause();
        yesMusic.play();
    });

    // Tạo hiệu ứng trái tim rơi xuống
    function createFallingHearts() {
        const container = document.body;
        for (let i = 0; i < 30; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart-fall');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's';
            container.appendChild(heart);
        }
    }
});
