<template>
  <div>
    <h1>Users</h1>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr />
    <h1>User No.{{ id }}</h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile'">次のユーザー</router-link>
    <router-link :to="{ name: 'user-id-profile', params: {id: (Number(id) + 1)}, query: { lang: 'ja', page: 2} }">次のユーザー</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
  watch: {
    $route(to, from) {
      console.log(to, from);
    }
  },
  created() {
    console.log(this.$route.params.id);
  }
}
</script>

