<template>
  <p :style="computedStyle">
    <slot />
  </p>
</template>

<script setup>
const props = defineProps({
  fontWeight: {
    type: String,
    default: 'normal', // Example values: 'normal', 'bold', 'lighter'
  },
  fontSize: {
    type: String,
    default: '16px', // Can also accept classes like 'text-sm' if using TailwindCSS
  },
});

const computedStyle = computed(() => ({
  fontWeight: props.fontWeight,
  fontSize: props.fontSize,
}));
</script>
