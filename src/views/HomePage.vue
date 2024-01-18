<template>
  <div>
    <h1>Home</h1>
    <button @click="toUsers">Usersページへ</button>
    <p>{{ doubleCount }}</p>
    <p>{{ tripleCount }}</p>
    <button @click="increment(1)">+1</button>
    <button @click="decrement(1)">-1</button>
    <button @click="actionIncrement(2)">action +2</button>

    <input type="text" v-model="message" />
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
  
export default {
  computed: {
    ...mapGetters(['doubleCount', 'tripleCount']),
    message: {
      get() {
        return this.$store.getters.message
      },
      set(value) {
        this.$store.dispatch('updateMessage', value)
      }
    }
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
    ...mapActions(['actionIncrement']),
    toUsers() {
      this.$router.push("/users");
    },
    increment() {
      this.$store.commit('increment', 1)
    },
    decrement() {
      this.$store.commit('decrement', 1)
    },
  }
}
</script>

