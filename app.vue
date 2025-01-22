<template>
  <section :class="['svg-bg', `bg-${primaryColor}-500`, 'h-auto']">
    <NuxtLayout/>
  </section>
</template>

<script setup>
const { primaryColor } = useColor()
</script>

<style lang="css" scoped>
.svg-bg {
  background-image: url('./public/circuit-board.svg');
}
</style>