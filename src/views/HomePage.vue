<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">Usersページへ</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <button @click="increment(1)">+1</button>
    <button @click="decrement(1)">-1</button>
    <button @click="actionIncrement(2)">action +2</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
  
export default {
  computed: {
    ...mapGetters(['doubleCount', 'tripleCount']),

  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
    actionIncrement(number) {
      this.$store.dispatch('increment', number)
    },
    toUsers() {
      this.$router.push("/users");
    },
    increment() {
      this.$store.commit('increment', 1)
    },
    decrement() {
      this.$store.commit('decrement', 1)
    }
  }
}
</script>

