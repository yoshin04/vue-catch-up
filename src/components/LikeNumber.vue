<template>
  <div>
    <p>いいね({{totalNumber / 2}})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  export default {
    props: {
      totalNumber: {
        type: Number,
        required: true
      },
    },
    methods: {
      increment: function() {
        this.$emit('inclement-event')
      }
    }
  }
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>
