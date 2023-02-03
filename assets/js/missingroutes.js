const MISSING_ROUTES_LIST =
	"https://raw.githubusercontent.com/fosscord/fosscord-missing-routes/main/missing.json";
const listMount = document.getElementById("missing-routes-list");

document
	.getElementById("missing-routes-search")
	.addEventListener("input", (e) => {
		const content = e.target.value.toLowerCase();

		for (let elem of listMount.children) {
			if (elem.innerText.toLowerCase().indexOf(content) !== -1)
				elem.style.display = "list-item";
			else elem.style.display = "none";
		}
	});

(async () => {
	const res = await fetch(MISSING_ROUTES_LIST);
	const missingRoutes = await res.json();

	for (let route of missingRoutes) {
		const elem = document.createElement("li");
		const inner = document.createElement("code");
		inner.innerText = route;
		elem.appendChild(inner);

		listMount.appendChild(elem);
	}
})();
