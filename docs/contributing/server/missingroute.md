# Missing Routes

Below is a list of routes available on Discord.com {{ name }}-server does not currently implement.

It does not account for different HTTP methods (GET, POST, etc). A single method implemented by {{ name }} will remove it from this list,
so be sure to double check in the {{ name }} [source code](https://github.com/{{ name }}/{{ name }}-server/tree/master/src/api/routes).

It is generated daily by [{{ name }}/{{ name }}-missing-routes](https://github.com/{{ name }}/{{ name }}-missing-routes/),
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
