var container = document.getElementById("container");

window.addEventListener("click", function() {
	let coinFlip = Math.round(Math.random());
	console.log(coinFlip);
	container.classList = "";
	if (coinFlip === 1) {
		container.classList.add("left-arrow")
	} else {
		container.classList.add("right-arrow")
	}
})