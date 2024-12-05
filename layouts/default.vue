<template>
    <div>
      <header class="shadow-sm bg-white ">
        <nav class="container mx-auto p-4 flex justify-between">
          <NuxtLink class="font-bold">NUXTBUY</NuxtLink>
          <ul class="flex gap-4">
            <li><NuxtLink>Home</NuxtLink> </li>
            <li><NuxtLink>About</NuxtLink> </li>
            <li><NuxtLink class="btn">Products</NuxtLink> </li>
          </ul>
        </nav>
      </header>

      <!-- output the page content -->
       
       <div class="container mx-auto p-4">
        <slot />
       </div>

      </div>
</template>

<style scoped>
.router-link-exact-active {
  color: #12b488;
}
</style>