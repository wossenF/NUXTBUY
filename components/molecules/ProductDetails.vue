<template>
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="md:w-1/3">
      <img :src="product.image" alt="product image" class="max-w-[300px] mx-auto" />
    </div>
    <div class="md:w-2/3 md:pl-8">
      <h2 class="text-2xl font-bold">{{ product.title }}</h2>
      <p class="text-lg text-gray-700 my-4">Price: ${{ product.price }}</p>
      <p>{{ product.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const { id } = useRoute().params;

// Mock data
const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
];

// Find the product by ID
const product = computed(() => products.find((p) => p.id === Number(id)));
</script>

<style scoped>
/* Add your styles here */
</style>