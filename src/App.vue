<template>
  <div>
    <nav>
      <router-link to="/" class="link" active-class="link--active" exact>Home</router-link>
      <router-link to="/users" class="link" active-class="link--active" exact>Users</router-link>
    </nav>
    <router-view></router-view>
    <!-- <LikeHeader>
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
      <EventTitle v-model="eventData.title" />

      <label for="maxNumber">最大人数</label>
      <input type="number" id="maxNumber" v-model.number="eventData.maxNumber" />
      <p>最大人数: {{eventData.maxNumber}}</p>

        <label for="host">ホスト</label>
      <input type="text" id="host" v-model.trim="eventData.host" />
      <p>ホスト: {{eventData.host}}</p>

      <textarea id="detail" v-model="eventData.detail"></textarea>
      <pre>詳細: {{eventData.detail}}</pre>

      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate" />
      <label for="isPrivate">非公開</label>
      <p>非公開: {{eventData.isPrivate}}</p>
      <p>参加条件</p>
      <label for="10">10代</label>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="20">20代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
       <label for="30">30代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <p>参加条件: {{eventData.target}}</p>

      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.fee">
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.fee">
      <label for="paid">有料</label>

      <p>開催場所</p>
      <select v-model="eventData.location">
        <option v-for="location in locations" :key="location">{{location}}</option>
      </select>
      <p>{{eventData.location}}</p>
    </div> -->
  </div>
</template>

<script>
  // import LikeHeader from './components/LikeHeader.vue'
  // import HomeView from './components/HomeView.vue'
  // import AboutView from './components/AboutView.vue'
  // import EventTitle from './components/EventTitle.vue'

  // export default {
  //   data: function() {
  //     return {
  //       number: 10,
  //       currentComponent: 'HomeView',
  //       locations: ['東京', '神奈川'],
  //       eventData: {
  //         title: 'タイトル',
  //         maxNumber: 0,
  //         host: 'ホスト',
  //         detail: '',
  //         isPrivate: false,
  //         target: [],
  //         fee: '無料',
  //         location: '東京'
  //       }
  //     }
  //   },
  //   components: {
  //     LikeHeader,
  //     HomeView,
  //     AboutView,
  //     EventTitle,
  //   },
  //   methods: {
  //     incrementCount() {
  //       this.number += 1;
  //     }
  //   }
  // }
</script>

<style scoped>
  .link {
    margin-right: 10px;
  }
  .link--active {
    font-size: 20px;
  }
</style>

