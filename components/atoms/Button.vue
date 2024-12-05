<template>
  <div>
      <el-button :type="type"><slot /></el-button>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
      type: String,
      default: 'primary',
  },
});
</script>
