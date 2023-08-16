<script>
  export let data;
</script>

<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>
<ul>
  {#each data.countries as country}
    <li>{country.name}</li>
  {/each}
</ul>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>