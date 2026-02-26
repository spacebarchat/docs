# Missing Routes

Below is a list of routes available on Discord.com that the {{ project.name }} server does not currently implement.

It does not account for different HTTP methods (GET, POST, etc). A single method implemented will remove it from this list,
so be sure to double check in the {{ project.name }} [source code]({{ repositories.base_url }}/{{ repositories.server }}/tree/master/src/api/routes).

It is generated automatically by [{{ repositories.missing_routes }}]({{ repositories.base_url }}/{{ repositories.missing_routes }}/),
by scraping the latest Discord.com client.

<div>
	<div class="fc-search">
		<input
			id="missing-routes-search"
			class="md-input md-input--stretch"
			placeholder="Search missing routes"
		/>
	</div>
	<p id="counter"></p>
	<ul id="missing-routes-list">
	</ul>
</div>

<script src="/assets/js/missingroutes.js"></script>
