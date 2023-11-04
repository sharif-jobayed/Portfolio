

/* Theme Switcher */

let styleSheet = document.querySelector ("#color_scheme");
let themeSwitchingDots = document.querySelectorAll (".theme_dot");
let theme = localStorage.getItem("scheme");



for (let d = 0; d < themeSwitchingDots.length; d++) {
	themeSwitchingDots[d].addEventListener ("click", function () {
		let color = this.dataset.mode;
		setScheme (color);
	});

	function setScheme (scheme) {
		switch (scheme) {
			case "blue": styleSheet.href = `./assets/styles/blue.css`;
			break;
			case "green": styleSheet.href = `./assets/styles/green.css`;
			break;
			case "purple": styleSheet.href = `./assets/styles/purple.css`;
			break;
			default: styleSheet.href = `./assets/styles/default.css`;
		}; 
	
		/* if (scheme == `blue`) {
			styleSheet.href = `./assets/styles/blue.css`;
		} else if (scheme == `green`) {
			styleSheet.href = `./assets/styles/green.css`;
		} else if (scheme == `purple`) {
			styleSheet.href = `./assets/styles/purple.css`;
		} else {
			styleSheet.href = `./assets/styles/default.css`;
		}; */
	};
};

