# Missing Routes

Below is a list of routes available on Discord.com Fosscord-server does not currently implement.

It does not account for different HTTP methods (GET, POST, etc). A single method implemented by Fosscord will remove it from this list,
so be sure to double check in the Fosscord [source code](https://github.com/fosscord/fosscord-server/tree/master/src/api/routes).

It is generated daily by [fosscord/fosscord-missing-routes](https://github.com/fosscord/fosscord-missing-routes/),
by scraping the latest Discord.com client.

<div>
	<div class="fc-search">
		<input
			id="missing-routes-search"
			class="md-input md-input--stretch"
			placeholder="Search missing routes"
		/>
	</div>
	<ul id="missing-routes-list">
	</ul>
</div>

<script src="/assets/js/missingroutes.js"></script>
