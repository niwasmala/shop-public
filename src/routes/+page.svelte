<script>
  export let data;

  let countries = data.countries ?? [];
</script>

<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>
<ul>
  {#each countries as country}
    <li>{country.name}</li>
  {/each}
</ul>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>