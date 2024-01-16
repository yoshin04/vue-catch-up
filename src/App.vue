<template>
  <div>
    <LikeHeader>
      <template v-slot:title>
        <h1>トータルいいね数</h1>
      </template>
      <template #:count>
        <p>{{ number}}</p>
      </template>
    </LikeHeader>
    <LikeNumber :totalNumber="number" @inclement-event="incrementCount" />
    <LikeNumber :totalNumber="number" @inclement-event="incrementCount" />

    <button @click="currentComponent='HomeView'">Home</button>
    <button @click="currentComponent='AboutView'">About</button>

    <keep-alive>
      <component :is="currentComponent" />
    </keep-alive>
  </div>
</template>

<script>
  import LikeHeader from './components/LikeHeader.vue'
  import HomeView from './components/HomeView.vue'
  import AboutView from './components/AboutView.vue'

  export default {
    data: function() {
      return {
        number: 10,
        currentComponent: 'HomeView',
      }
    },
    components: {
      LikeHeader,
      HomeView,
      AboutView,
    },
    methods: {
      incrementCount() {
        this.number += 1;
      }
    }
  }
</script>

