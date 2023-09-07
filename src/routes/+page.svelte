<script>
  export let data
</script>

<svelte:head>
  <title>{data?.store?.name}</title>
</svelte:head>

<header class="w-full flex flex-col">
  <div class="flex flex-row justify-between items-center gap-2 px-2 py-3">
    <div class="flex flex-col gap-4">
      <div class="text-3xl font-bold text-neutral-800">
        {data?.store?.name}
      </div>
    </div>
    <div class="flex-none w-12 h-12 rounded-full bg-white border-2 border-neutral-200 p-1">
      <img class="w-full h-full rounded-full" alt={data?.store?.name} src={data?.logo?.signedUrl} onerror="this.src='/favicon.png'">
    </div>
  </div>
</header>

<main class="bg-white pb-20 relative flex-grow px-2 max-w-lg" style="-webkit-overflow-scrolling:touch">
  <div class="flex flex-col gap-2">
    <div class="text-xl font-semibold">
      Best Seller
    </div>
    <div class="grid grid-cols-2 gap-2">
      <div class="w-full h-40 bg-neutral-100 border-2 border-neutral-200 rounded-md">
        <div class="w-full h-28">
        </div>
        <div class="w-full h-12 flex flex-row justify-between items-center bg-white border-b-2 border-t-2 rounded-b-md px-2 py-1">
          <div class="flex flex-col">
            <div class="text-sm">
              Ayam
            </div>
            <div class="text-xs font-semibold">
              Rp 10.000
            </div>
          </div>
          <div class="flex flex-row items-center justify-center gap-1">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="text-sm w-4 text-center">
              2
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-40 bg-neutral-100 border-2 border-neutral-200 rounded-md">
        <div class="w-full h-28">
        </div>
        <div class="w-full h-12 flex flex-row justify-between items-center bg-white border-b-2 border-t-2 rounded-b-md px-2 py-1">
          <div class="flex flex-col">
            <div class="text-sm">
              Ayam
            </div>
            <div class="text-xs font-semibold">
              Rp 10.000
            </div>
          </div>
          <div class="flex flex-row items-center justify-center gap-1">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-40 bg-neutral-100 rounded-md">

      </div>
      <div class="w-full h-40 bg-neutral-100 rounded-md">

      </div>
      <div class="w-full h-40 bg-neutral-100 rounded-md">

      </div>
    </div>
  </div>
</main>

<div class="fixed bg-white z-30 bottom-0 flex gap-2 items-center justify-between w-full max-w-lg mx-auto h-16 px-2 py-3">
  <div class="flex-1 w-full h-full flex items-center justify-between gap-2 pl-1 pr-3 py-4 rounded-full border-2 border-neutral-200">
    <input type="text" class="w-full bg-transparent p-2 focus:outline-none" placeholder="What do you want to buy?" />
    <div class="flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </div>
  </div>
  <div class="flex-none flex items-center justify-center w-10 h-full bg-neutral-200 rounded-full">
    <a href="/checkout" class="flex items-center justify-center shrink-0 h-auto focus:outline-none transform" aria-label="cart-button">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
      <div class="absolute w-5 h-5 bg-red-500 rounded-full -top-3 -right-3 flex items-center justify-center text-xs text-white">
        2
      </div>
    </a>
  </div>
</div>