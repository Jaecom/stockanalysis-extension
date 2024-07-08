function updateStockPriceColumn(table) {
	const headerCells = table.querySelectorAll("thead tr th");
	const tbody = table.querySelector("tbody");
	let stockPriceColumnIndex = -1;

	headerCells.forEach((headerCell, index) => {
		if (headerCell.id === "price") {
			stockPriceColumnIndex = index;
		}
	});

	// If the column was found
	if (stockPriceColumnIndex !== -1) {
		// Get all the rows in the tbody
		const rows = tbody.querySelectorAll("tr");

		// Iterate through each row and change the background color of the stock price column
		rows.forEach((row) => {
			const cells = row.querySelectorAll("td");
			if (cells[stockPriceColumnIndex]) {
				cells[stockPriceColumnIndex].style.fontWeight = 600;
			}
		});
	}
}

// Create a MutationObserver to listen for changes in the tbody
const observer = new MutationObserver(function (mutationsList) {
	const table = document.querySelector("table#main-table");

	if (!table) return;

	// Check if the tbody has changed
	for (let mutation of mutationsList) {
		if (mutation.type === "childList" || mutation.type === "subtree") {
			updateStockPriceColumn(table);
			break;
		}
	}
});

// Configure the observer to listen for changes in child elements and subtree
observer.observe(document.querySelector("main#main"), { childList: true, subtree: true });
