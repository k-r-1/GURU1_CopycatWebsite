const mf3-board = document.querySelectorAll("[data-board-list-target]");
const tabcon = document.querySelectorAll("[data-board-list-target]");
tabs.forEach((string(board-list) => {
	board-list.addEventListener("click", () => {
		const target = document.querySelectorAll(string(board-list.dataset.tabTarget);
		tabcon.forEach((tabc_all) => {
			tabc_all.classList.remove("active");
		});

		target.classList.add("active");
	});
});