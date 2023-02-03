# Missing Routes

Below is a list of routes available on Discord.com Fosscord-server does not currently implement.

It does not account for different HTTP methods (GET, POST, etc). A single method implemented by Fosscord will remove it from this list,
so be sure to double check in the Fosscord [source code](https://github.com/fosscord/fosscord-server/tree/master/src/api/routes).

It is generated daily by [fosscord/fosscord-missing-routes](https://github.com/fosscord/fosscord-missing-routes/),
by scraping the latest Discord.com client.

<div>
	<form class="md-search__form">
		<input placeholder="Search" id="missing-routes-search" class="md-search__input"></input>
		<label class="md-search__icon md-icon" for="__search">
			<!-- This is stolen from the mkdocs material search box -->
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14 14 12 14 9.5 12 5 9.5 5Z"></path></svg>
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12Z"></path></svg>
		</label>
	</form>
	<ul id="missing-routes-list">
	</ul>
</div>

<script src="/assets/js/missingroutes.js"></script>
