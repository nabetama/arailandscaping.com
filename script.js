document.addEventListener("DOMContentLoaded", () => {
	const images = document.querySelectorAll(".company-image-slider img");
	let currentIndex = 0;

	function switchImage() {
		images[currentIndex].classList.remove("active");
		currentIndex = (currentIndex + 1) % images.length;
		images[currentIndex].classList.add("active");
	}

	setInterval(switchImage, 3500);
});
