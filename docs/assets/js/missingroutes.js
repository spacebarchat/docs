const MISSING_ROUTES_LIST =
	"https://raw.githubusercontent.com/spacebarchat/missing-routes/main/missing.json";
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
	const json = await res.json();
	const missingRoutes = json.routes;

	document.getElementById("counter").textContent =
		`We implement ${json.discord - json.missing}/${
			json.discord
		} endpoints from Discord.com ` +
		`as well as ${
			json.spacebar + json.missing - json.discord
		} additional endpoints.`;

	for (let route of missingRoutes) {
		const elem = document.createElement("li");
		const inner = document.createElement("code");
		inner.innerText = route;
		elem.appendChild(inner);

		listMount.appendChild(elem);
	}
})();
