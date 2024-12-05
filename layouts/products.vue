<template>
    <div>
      <header class="shadow-sm bg-white ">
        <nav class="container mx-auto p-4 ">
          <NuxtLink to="/products" class="font-bold">NUXTBUY Merch</NuxtLink>
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