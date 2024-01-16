<template>
  <div>
    <LikeHeader>
      <h1>トータルいいね数</h1>
      <p>{{ number}}</p>
    </LikeHeader>
    <LikeNumber :totalNumber="number" @inclement-event="incrementCount" />
    <LikeNumber :totalNumber="number" @inclement-event="incrementCount" />
  </div>
</template>

<script>
  import LikeHeader from './components/LikeHeader.vue'
  export default {
    data: function() {
      return {
        number: 10
      }
    },
    components: {
      LikeHeader,
    },
    methods: {
      incrementCount() {
        this.number += 1;
      }
    }
  }
</script>

