<template>
  <div>
    <!-- <Text class="text-4xl mb-5" :text="'Home'" />
    <Text class="my-5" :text="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quasi at perspiciatis quaerat. Cum quae necessitatibus commodi corrupti omnis odit?'" />
    <Text class="my-5" :text="'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt quasi at perspiciatis quaerat. Cum quae necessitatibus commodi corrupti omnis odit?'" /> -->

    <!-- Call the ProductList organism component here -->
    <ProductList />
  </div>
</template>

<script setup>
import ProductList from './products/ProductList.vue'; // Import ProductList organism component
</script>

<style scoped>
</style>
