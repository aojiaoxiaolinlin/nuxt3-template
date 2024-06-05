<template>
  <div>
    <h1
      m-2
      bg-sky
      text-xl
      text-black
      hover:bg-slate
    >
      Home Page
    </h1>
    {{ count }}
  </div>
</template>

<script setup lang="ts">
const count = ref(0)
</script>

<style scoped></style>
