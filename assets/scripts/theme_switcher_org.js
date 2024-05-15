

/* Theme Switcher */

const themeDots = document.querySelectorAll(".theme_dot");
const styleSheet = document.querySelector("#color_scheme");
const theme = localStorage.getItem("theme");

for (var d = 0; d < themeDots.length; d++) {
	themeDots[d].addEventListener("click", function () {

		// Fetch dot info
		let mode = this.dataset.mode;

		// Set Theme
		setTheme(mode);

		// Stylesheet changing function
		function setTheme(dot) {
			if (dot == `blue`) {
				styleSheet.href = "./assets/styles/blue.css";
			} else if (dot == `green`) {
				styleSheet.href = "./assets/styles/green.css";
			} else if (dot == `purple`) {
				styleSheet.href = "./assets/styles/purple.css";
			} else {
				styleSheet.href = "./assets/styles/default.css";
			};
		};
	});
};