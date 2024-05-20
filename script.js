document.addEventListener("DOMContentLoaded", function () {
	var hamburger = document.querySelector(".hamburger");
	var menu = document.querySelector("nav ul");
	var btnn = document.querySelector(".button-container");
	hamburger.addEventListener("click", function () {
		// Toggle menu visibility
		menu.style.display = menu.style.display === "flex" ? "none" : "flex";
	});
	hamburger.addEventListener("click", function () {
		// Toggle menu visibility
		btnn.style.display = btnn.style.display === "none" ? "flex" : "none";
	});


	var slideIndex = 1; // Start with the first slide index
	showSlides(slideIndex); // Initialize the slideshow with the first slide

	function currentSlide(n) {
		showSlides((slideIndex = n));
	}
	function showSlides() {
		var i;
		var slides = document.getElementsByClassName("slide");
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
			slides[i].classList.remove("active"); // Remove active class
		}
		slideIndex++;
		if (slideIndex > slides.length) {
			slideIndex = 1;
		}
		slides[slideIndex - 1].style.display = "block";
		slides[slideIndex - 1].classList.add("active"); // Add active class to start animation
		setTimeout(showSlides, 8000); // Duration should match CSS animation + stay time
	}
});
