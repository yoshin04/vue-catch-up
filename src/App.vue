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

    <div>
      <h2>イベントのフォーム</h2>
      <label for="タイトル">タイトル</label>
      <input type="text" id="title" v-model="eventData.title" />
      <p>タイトル: {{eventData.title}}</p>

      <label for="maxNumber">最大人数</label>
      <input type="number" id="maxNumber" v-model.number="eventData.maxNumber" />
      <p>最大人数: {{eventData.maxNumber}}</p>

        <label for="host">ホスト</label>
      <input type="text" id="host" v-model.trim="eventData.host" />
      <p>ホスト: {{eventData.host}}</p>

    </div>
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
        eventData: {
          title: 'タイトル',
          maxNumber: 0,
          host: 'ホスト',
        }
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

