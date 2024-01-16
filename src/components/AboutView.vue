<template>
  <h1>About</h1>
</template>

<script>
  export default {
    destroyed() {
      console.log('destroyed')
    },
    deactivated() {
      console.log('deactivated')
    },
    activated() {
      console.log('activated')
    },
  }
</script>
