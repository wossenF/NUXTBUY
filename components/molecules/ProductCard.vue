<template>
  <div class="card text-center">
    <img :src="product.image" alt="product thumb" class="thumb" loading="lazy"/>

    <!-- Truncated product title (max 50 characters) -->
    <AtomsText
      fontWeight="bold"
      fontSize="18px"
      class="text-gray-500 m-4 truncate"
    >
      {{ truncatedTitle }}
    </AtomsText>

    <!-- Product price -->
    <AtomsText
      fontWeight="normal"
      fontSize="14px"
      class="text-lg text-gray-700 m-4"
    >
      {{ '$' + product.price }}
    </AtomsText>

    <!-- Link to product details page -->
    <NuxtLink :to="`/products/${product.id}`">
      <AtomsButton>
        View Details
      </AtomsButton>
    </NuxtLink>
  </div>
</template>

<script setup>
const { product } = defineProps(['product']);

// Computed property to truncate the title to 15 characters
const truncatedTitle = computed(() => {
  if (product.title && product.title.length > 15) {
    return product.title.substring(0, 15) + '...'; // Slice to 15 characters
  }
  return product.title; // Return the original title if it's 15 characters or less
});
</script>

<style scoped>
.thumb {
  max-width: 70%;
  max-height: 120px;
  margin: 0 auto;
}
</style>
