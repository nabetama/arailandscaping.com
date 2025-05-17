document.addEventListener("DOMContentLoaded", () => {
	const images = document.querySelectorAll(".company-image-slider img");
	if (images.length > 0) {
		let currentIndex = 0;
		function switchImage() {
			images[currentIndex].classList.remove("active");
			currentIndex = (currentIndex + 1) % images.length;
			images[currentIndex].classList.add("active");
		}
		setInterval(switchImage, 3500);
	}

	// ハンバーガーメニュー
	const hamburger = document.querySelector('.hamburger');
	const navMenu = document.querySelector('.nav-menu ul');
	if (hamburger && navMenu) {
		hamburger.addEventListener('click', () => {
			navMenu.classList.toggle('open');
			hamburger.classList.toggle('open');
		});
		// メニュークリックで自動的に閉じる
		navMenu.querySelectorAll('a').forEach(link => {
			link.addEventListener('click', () => {
				navMenu.classList.remove('open');
				hamburger.classList.remove('open');
			});
		});
	}

	// ページトップへ戻るボタン
	const scrollBtn = document.querySelector('.scroll-to-top');
	if (scrollBtn) {
		scrollBtn.addEventListener('click', () => {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		});
	}
});
